import { verify } from "@dfinity/agent";
import { auto } from "@popperjs/core";
import {
  query,
  update,
  text,
  Null,
  Record,
  StableBTreeMap,
  Variant,
  Vec,
  None,
  Some,
  Ok,
  Err,
  ic,
  Principal,
  Opt,
  nat64,
  Duration,
  Result,
  bool,
  Canister,
} from "azle";
import {
  Address,
  Ledger,
  binaryAddressFromAddress,
  binaryAddressFromPrincipal,
  hexAddressFromPrincipal,
} from "azle/canisters/ledger";
import { hashCode } from "hashcode";
import { memo } from "react";
import { v4 as uuidv4 } from "uuid";

// PropertyOwnerStatus Enum
const PropertyOwnerStatus = Variant({
  Active: text,
  Inactive: text,
  Suspended: text,
});

// PropertyOwner Struct
const PropertyOwner = Record({
  id: text,
  owner: Principal,
  name: text,
  phoneNumber: text,
  email: text,
  propertiesOwned: Vec(text),
  joinedAt: text,
});

// Investor Struct
const Investor = Record({
  id: text,
  owner: Principal,
  name: text,
  email: text,
  phoneNumber: text,
  investments: Vec(text),
  totalInvested: nat64,
  joinedAt: text,
});

// Asset/Property Struct
const Asset = Record({
  id: text,
  owner: text, // PropertyOwner ID
  imageUrl: text,
  title: text,
  description: text,
  location: text,
  totalValue: nat64,
  totalTokens: nat64,
  availableTokens: nat64,
  status: text, // "Available", "Sold Out"
  listedAt: text,
});

// Offerings Struct
const Offering = Record({
  id: text,
  assetId: text, // Asset ID
  pricePerToken: nat64,
  availableTokens: nat64,
  startDate: text,
  creator: Principal,
  status: text, // "Ongoing", "Completed"
});

// Transaaction Status Enum
const TransactionStatus = Variant({
  PaymentPending: text,
  Completed: text,
  Cancelled: text,
});

// Transaction Struct
const Transaction = Record({
  id: text,
  propertyOwnerId: text,
  investorId: text,
  offeringId: text,
  propertyOwner: Principal,
  Investor: Principal,
  amountInvested: nat64,
  tokensPurchased: nat64,
  status: TransactionStatus,
  paid_at_block: Opt(nat64),
  transactionDate: text,
  memo: nat64,
});

// Message Struct
const Message = Variant({
  Success: text,
  Error: text,
  NotFound: text,
  InvalidPayload: text,
  InvalidEmail: text,
  EmailAlreadyExists: text,
  UnauthorizedAccess: text,
  PaymentFailed: text,
  PaymentCompleted: text,
});

// Payloads

// PropertyOwner Payload
const PropertyOwnerPayload = Record({
  name: text,
  phoneNumber: text,
  email: text,
});

// Investor Payload
const InvestorPayload = Record({
  name: text,
  email: text,
  phoneNumber: text,
});

// Asset Payload
const AssetPayload = Record({
  imageUrl: text,
  title: text,
  description: text,
  location: text,
  totalValue: nat64,
});

// Offering Payload
const OfferingPayload = Record({
  assetId: text,
});

// Transaction Payload
const TransactionPayload = Record({
  propertyOwnerId: text,
  investorId: text,
  offeringId: text,
  amountInvested: nat64,
});

// Storage
const propertyOwnerStorage = StableBTreeMap(0, text, PropertyOwner);
const investorStorage = StableBTreeMap(1, text, Investor);
const assetStorage = StableBTreeMap(2, text, Asset);
const offeringStorage = StableBTreeMap(3, text, Offering);
const persistedInvestmentsReserves = StableBTreeMap(4, Principal, Transaction);
const pendingInvestmentsReserves = StableBTreeMap(5, nat64, Transaction);

// Reservation period in seconds
const TIMEOUT_PERIOD = 9600n;

/* 
    initialization of the Ledger canister. The principal text value is hardcoded because 
    it's set in the `dfx.json`
*/
const icpCanister = Ledger(Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai"));

// Functions

export default Canister({
  // Create PropertyOwner
  createPropertyOwner: update(
    [PropertyOwnerPayload],
    Result(PropertyOwner, Message),
    (payload) => {
      // Check if required fields are provided
      if (!payload.name || !payload.email || !payload.phoneNumber) {
        return Err({ InvalidPayload: "Missing required fields" });
      }

      // Check for valid email format (simple regex example)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(payload.email)) {
        return Err({
          InvalidEmail: "Invalid email format, ensure it is in correct format!",
        });
      }

      // Validation for unique email check
      const propertyOwners = propertyOwnerStorage.values();
      const existingOwner = propertyOwners.find(
        (owner) => owner.email === payload.email
      );

      if (existingOwner) {
        return Err({
          EmailAlreadyExists:
            "Email already exists, please use a different email.",
        });
      }

      const propertyOwnerId = uuidv4();
      const propertyOwner = {
        ...payload,
        id: propertyOwnerId,
        owner: ic.caller(),
        propertiesOwned: [],
        joinedAt: new Date().toISOString(),
      };

      // Insert the property owner into the storage
      propertyOwnerStorage.insert(propertyOwnerId, propertyOwner);

      return Ok(propertyOwner); // Successfully return the created property owner
    }
  ),

  // Update PropertyOwner Profile
  updatePropertyOwnerProfile: update(
    [text, PropertyOwnerPayload],
    Result(PropertyOwner, Message),
    (ownerId, payload) => {
      // Check if the property owner exists
      const propertyOwnerOpt = propertyOwnerStorage.get(ownerId);
      if ("None" in propertyOwnerOpt) {
        return Err({ NotFound: "Property owner not found." });
      }

      // Check if required fields are
      if (!payload.name || !payload.email || !payload.phoneNumber) {
        return Err({ InvalidPayload: "Missing required fields" });
      }

      // Check for valid email format.
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(payload.email)) {
        return Err({
          InvalidEmail: "Invalid email format, ensure it is in correct format!",
        });
      }

      // Validation for unique email check
      const propertyOwners = propertyOwnerStorage.values();
      const existingOwner = propertyOwners.find(
        (owner) => owner.email === payload.email
      );

      if (existingOwner && existingOwner.id !== ownerId) {
        return Err({
          EmailAlreadyExists:
            "Email already exists, please use a different email.",
        });
      }

      // Check if the caller is the owner of the PropertyOwner profile
      if (ic.caller().toText() !== propertyOwnerOpt.Some.owner.toText()) {
        return Err({ UnauthorizedAccess: "Unauthorized access." });
      }

      // Update the property owner profile
      const updatedOwner = {
        ...propertyOwnerOpt.Some,
        ...payload,
      };

      propertyOwnerStorage.insert(ownerId, updatedOwner);

      return Ok(updatedOwner);
    }
  ),

  // Delete PropertyOwner Profile
  deletePropertyOwnerProfile: update(
    [text],
    Result(Null, Message),
    (ownerId) => {
      const propertyOwnerOpt = propertyOwnerStorage.get(ownerId);
      if ("None" in propertyOwnerOpt) {
        return Err({
          NotFound: "Property owner with id=${ownerId} not found.",
        });
      }

      // Check if the caller is the owner of the PropertyOwner profile
      if (ic.caller().toText() !== propertyOwnerOpt.Some.owner.toText()) {
        return Err({ UnauthorizedAccess: "Unauthorized access." });
      }

      // Remove the property owner profile
      propertyOwnerStorage.remove(ownerId);

      return Ok(null);
    }
  ),

  // Get PropertyOwner Profile by ID
  getPropertyOwnerProfileById: query(
    [text],
    Result(PropertyOwner, Message),
    (ownerId) => {
      const propertyOwnerOpt = propertyOwnerStorage.get(ownerId);
      if ("None" in propertyOwnerOpt) {
        return Err({ NotFound: "Property owner not found." });
      }

      return Ok(propertyOwnerOpt.Some);
    }
  ),

  // Get PropertyOwner Profile by Principal using filter
  getPropertyOwnerProfileByPrincipal: query(
    [],
    Result(PropertyOwner, Message),
    () => {
      const propertyOwners = propertyOwnerStorage
        .values()
        .filter((PropertyOwner) => {
          return PropertyOwner.owner.toText() === ic.caller().toText();
        });

      if (propertyOwners.length === 0) {
        return Err({
          NotFound: `PropertyOwner profile for owner=${ic.caller()} not found`,
        });
      }

      return Ok(propertyOwners[0]);
    }
  ),

  // Get All PropertyOwners
  getAllPropertyOwners: query([], Result(Vec(PropertyOwner), Message), () => {
    const propertyOwners = propertyOwnerStorage.values();

    // Check if there are any property owners
    if (propertyOwners.length === 0) {
      return Err({ NotFound: "No property owners found." });
    }

    return Ok(propertyOwners);
  }),

  // Create Investor
  createInvestor: update(
    [InvestorPayload],
    Result(Investor, Message),
    (payload) => {
      // Check if required fields are provided
      if (!payload.name || !payload.email || !payload.phoneNumber) {
        return Err({ InvalidPayload: "Missing required fields" });
      }

      // Check for valid email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(payload.email)) {
        return Err({
          InvalidEmail: "Invalid email format, ensure it is in correct format!",
        });
      }

      // Validation for unique email check
      const investors = investorStorage.values();

      const existingInvestor = investors.find(
        (investor) => investor.email === payload.email
      );

      if (existingInvestor) {
        return Err({
          EmailAlreadyExists:
            "Email already exists, please use a different email.",
        });
      }

      const investorId = uuidv4();
      const investor = {
        id: investorId,
        ...payload,
        owner: ic.caller(),
        investments: [],
        totalInvested: 0n,
        joinedAt: new Date().toISOString(),
      };

      // Insert the investor into the storage
      investorStorage.insert(investorId, investor);

      // Successfully return the created investor
      return Ok(investor);
    }
  ),

  // Update Investor Profile
  updateInvestorProfile: update(
    [text, InvestorPayload],
    Result(Investor, Message),
    (investorId, payload) => {
      // Check if the investor exists
      const investorOpt = investorStorage.get(investorId);
      if ("None" in investorOpt) {
        return Err({ NotFound: "Investor not found." });
      }

      // Check if required fields are provided
      if (!payload.name || !payload.email || !payload.phoneNumber) {
        return Err({ InvalidPayload: "Missing required fields" });
      }

      // Check for valid email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(payload.email)) {
        return Err({
          InvalidEmail: "Invalid email format, ensure it is in correct format!",
        });
      }

      // Validation for unique email check
      const investors = investorStorage.values();
      const existingInvestor = investors.find(
        (investor) => investor.email === payload.email
      );

      if (existingInvestor && existingInvestor.id !== investorId) {
        return Err({
          EmailAlreadyExists:
            "Email already exists, please use a different email.",
        });
      }

      // Check if the caller is the owner of the Investor profile
      if (ic.caller().toText() !== investorOpt.Some.principal.toText()) {
        return Err({ UnauthorizedAccess: "Unauthorized access." });
      }

      // Update the investor profile
      const updatedInvestor = {
        ...investorOpt.Some,
        ...payload,
      };

      investorStorage.insert(investorId, updatedInvestor);

      return Ok(updatedInvestor);
    }
  ),

  // Delete Investor Profile
  deleteInvestorProfile: update([text], Result(Null, Message), (investorId) => {
    const investorOpt = investorStorage.get(investorId);
    if ("None" in investorOpt) {
      return Err({ NotFound: "Investor with id=${investorId} not found." });
    }

    // Check if the caller is the owner of the Investor profile
    if (ic.caller().toText() !== investorOpt.Some.principal.toText()) {
      return Err({ UnauthorizedAccess: "Unauthorized access." });
    }

    // Remove the investor profile
    investorStorage.remove(investorId);

    return Ok(null);
  }),

  // Get Investor Profile by ID
  getInvestorProfileById: query(
    [text],
    Result(Investor, Message),
    (investorId) => {
      const investorOpt = investorStorage.get(investorId);
      if ("None" in investorOpt) {
        return Err({ NotFound: "Investor not found." });
      }

      return Ok(investorOpt.Some);
    }
  ),

  // Get Investor Profile by Principal using filter
  getInvestorProfileByPrincipal: query([], Result(Investor, Message), () => {
    const investors = investorStorage.values().filter((Investor) => {
      return Investor.principal.toText() === ic.caller().toText();
    });

    if (investors.length === 0) {
      return Err({
        NotFound: `Investor profile for owner=${ic.caller()} not found`,
      });
    }

    return Ok(investors[0]);
  }),

  // Get All Investors
  getAllInvestors: query([], Result(Vec(Investor), Message), () => {
    const investors = investorStorage.values();

    // Check if there are any investors
    if (investors.length === 0) {
      return Err({ NotFound: "No investors found." });
    }

    return Ok(investors);
  }),

  // Create Asset
  createAsset: update([AssetPayload], Result(Asset, Message), (payload) => {
    // Check if required fields are provided
    if (
      !payload.title ||
      !payload.description ||
      !payload.location ||
      !payload.totalValue ||
      !payload.imageUrl
    ) {
      return Err({
        InvalidPayload: "Ensure all required fields are provided!",
      });
    }

    // Check if the caller is a PropertyOwner
    const propertyOwners = propertyOwnerStorage.values();
    const propertyOwner = propertyOwners.find(
      (owner) => owner.owner.toText() === ic.caller().toText()
    );

    if (!propertyOwner) {
      return Err({ UnauthorizedAccess: "Unauthorized access." });
    }

    // Logic to automate division of property into tokens based on it's total value.
    const tokenValue = 1000n; // 1 token

    // Calculate the total tokens based on the total value of the property
    const totalTokens = payload.totalValue / tokenValue;

    // Generate a unique asset ID
    const assetId = uuidv4();

    // Create the asset object
    const asset = {
      id: assetId,
      owner: propertyOwner.id,
      ...payload,
      totalTokens: totalTokens,
      availableTokens: totalTokens,
      status: "Available",
      listedAt: new Date().toISOString(),
    };

    // Insert the asset into the storage
    assetStorage.insert(assetId, asset);

    // Successfully return the created asset
    return Ok(asset);
  }),

  // Update Asset
  updateAsset: update(
    [text, AssetPayload],
    Result(Asset, Message),
    (assetId, payload) => {
      // Check if the asset exists
      const assetOpt = assetStorage.get(assetId);
      if ("None" in assetOpt) {
        return Err({ NotFound: "Asset not found." });
      }

      // Check if required fields are provided
      if (
        !payload.title ||
        !payload.description ||
        !payload.location ||
        !payload.totalValue
      ) {
        return Err({
          InvalidPayload: "Ensure all required fields are provided!",
        });
      }

      // Check if the caller is the owner of the Asset
      const propertyOwners = propertyOwnerStorage.values();
      const propertyOwner = propertyOwners.find(
        (owner) => owner.owner.toText() === ic.caller().toText()
      );

      if (assetOpt.Some.owner !== propertyOwner.id) {
        return Err({ UnauthorizedAccess: "Unauthorized access." });
      }

      // Update the asset
      const updatedAsset = {
        ...assetOpt.Some,
        ...payload,
      };

      assetStorage.insert(assetId, updatedAsset);

      return Ok(updatedAsset);
    }
  ),

  // Delete Asset
  deleteAsset: update([text], Result(Null, Message), (assetId) => {
    const assetOpt = assetStorage.get(assetId);
    if ("None" in assetOpt) {
      return Err({ NotFound: "Asset with id=${assetId} not found." });
    }

    // Check if the caller is the owner of the Asset
    const propertyOwners = propertyOwnerStorage.values();
    const propertyOwner = propertyOwners.find(
      (owner) => owner.owner.toText() === ic.caller().toText()
    );

    if (assetOpt.Some.owner !== propertyOwner.id) {
      return Err({ UnauthorizedAccess: "Unauthorized access." });
    }

    // Remove the asset
    assetStorage.remove(assetId);

    return Ok(null);
  }),

  // Get Asset by ID
  getAssetById: query([text], Result(Asset, Message), (assetId) => {
    const assetOpt = assetStorage.get(assetId);
    if ("None" in assetOpt) {
      return Err({
        NotFound: `Asset with id=${assetId} not found`,
      });
    }

    return Ok(assetOpt.Some);
  }),

  // Get all Assets
  getAllAssets: query([], Result(Vec(Asset), Message), () => {
    const assets = assetStorage.values();

    // Check if there are any assets
    if (assets.length === 0) {
      return Err({ NotFound: "No assets found." });
    }

    return Ok(assets);
  }),

  // Get Assets by Owner
  getAssetsByOwner: query([text], Result(Vec(Asset), Message), (ownerId) => {
    const assets = assetStorage.values().filter((asset) => {
      return asset.owner === ownerId;
    });

    // Check if there are any assets
    if (assets.length === 0) {
      return Err({ NotFound: "No assets found for the owner" });
    }

    return Ok(assets);
  }),

  // Get available Assets
  getAvailableAssets: query([], Result(Vec(Asset), Message), () => {
    const assets = assetStorage.values().filter((asset) => {
      return asset.status === "Available";
    });

    // Check if there are any available assets
    if (assets.length === 0) {
      return Err({ NotFound: "No available assets found." });
    }

    return Ok(assets);
  }),

  // Get Sold Out Assets
  getSoldOutAssets: query([], Result(Vec(Asset), Message), () => {
    const assets = assetStorage.values().filter((asset) => {
      return asset.status === "Sold Out";
    });

    // Check if there are any sold out assets
    if (assets.length === 0) {
      return Err({ NotFound: "No sold out assets found." });
    }

    return Ok(assets);
  }),

  // Create Offering
  createOffering: update(
    [OfferingPayload],
    Result(Offering, Message),
    (payload) => {
      // Check if required fields are provided
      if (!payload.assetId) {
        return Err({
          InvalidPayload: "Ensure all required fields are provided!",
        });
      }

      // Check if the asset exists
      const assetOpt = assetStorage.get(payload.assetId);
      if ("None" in assetOpt) {
        return Err({ NotFound: "Asset not found." });
      }

      // Check if the caller is the owner of the Asset
      const propertyOwners = propertyOwnerStorage.values();
      const propertyOwner = propertyOwners.find(
        (owner) => owner.owner.toText() === ic.caller().toText()
      );

      if (assetOpt.Some.owner !== propertyOwner.id) {
        return Err({ UnauthorizedAccess: "Unauthorized access." });
      }

      // Fetch the assetValue from the asset
      const assetValue = assetOpt.Some.totalValue;

      // Generate a unique offering ID
      const offeringId = uuidv4();

      // Create the offering object
      const offering = {
        id: offeringId,
        ...payload,
        pricePerToken: assetValue,
        availableTokens: assetOpt.Some.totalTokens,
        creator: ic.caller(),
        startDate: new Date().toISOString(),
        endDate: None, // Optional endDate
        status: "Ongoing", // Status for the offering
      };

      // Insert the offering into the storage
      offeringStorage.insert(offeringId, offering);

      // Successfully return the created offering
      return Ok(offering);
    }
  ),

  // Update Offering
  updateOffering: update(
    [text, OfferingPayload],
    Result(Offering, Message),
    (offeringId, payload) => {
      // Check if the offering exists
      const offeringOpt = offeringStorage.get(offeringId);
      if ("None" in offeringOpt) {
        return Err({ NotFound: "Offering not found." });
      }

      // Check if required fields are provided
      if (!payload.assetId) {
        return Err({
          InvalidPayload: "Ensure all required fields are provided!",
        });
      }

      // Check if the asset exists
      const assetOpt = assetStorage.get(payload.assetId);
      if ("None" in assetOpt) {
        return Err({ NotFound: "Asset not found." });
      }

      // Check if the caller is the owner of the Asset
      const propertyOwners = propertyOwnerStorage.values();
      const propertyOwner = propertyOwners.find(
        (owner) => owner.owner.toText() === ic.caller().toText()
      );

      if (assetOpt.Some.owner !== propertyOwner.id) {
        return Err({ UnauthorizedAccess: "Unauthorized access." });
      }

      // Update the offering
      const updatedOffering = {
        ...offeringOpt.Some,
        ...payload,
      };

      offeringStorage.insert(offeringId, updatedOffering);

      return Ok(updatedOffering);
    }
  ),

  // Get Offering by ID
  getOfferingById: query([text], Result(Offering, Message), (offeringId) => {
    const offeringOpt = offeringStorage.get(offeringId);
    if ("None" in offeringOpt) {
      return Err({
        NotFound: `Offering with id=${offeringId} not found`,
      });
    }

    return Ok(offeringOpt.Some);
  }),

  // Get all Offerings
  getAllOfferings: query([], Result(Vec(Offering), Message), () => {
    const offerings = offeringStorage.values();

    // Check if there are any offerings
    if (offerings.length === 0) {
      return Err({ NotFound: "No offerings found." });
    }

    return Ok(offerings);
  }),

  // Get Offerings by Asset
  getOfferingsByAsset: query(
    [text],
    Result(Vec(Offering), Message),
    (assetId) => {
      const offerings = offeringStorage.values().filter((offering) => {
        return offering.assetId === assetId;
      });

      // Check if there are any offerings
      if (offerings.length === 0) {
        return Err({ NotFound: "No offerings found for the asset" });
      }

      return Ok(offerings);
    }
  ),

  // Get Ongoing Offerings
  getOngoingOfferings: query([], Result(Vec(Offering), Message), () => {
    const offerings = offeringStorage.values().filter((offering) => {
      return offering.status === "Ongoing";
    });

    // Check if there are any ongoing offerings
    if (offerings.length === 0) {
      return Err({ NotFound: "No ongoing offerings found." });
    }

    return Ok(offerings);
  }),

  // Get Completed Offerings
  getCompletedOfferings: query([], Result(Vec(Offering), Message), () => {
    const offerings = offeringStorage.values().filter((offering) => {
      return offering.status === "Completed";
    });

    // Check if there are any completed offerings
    if (offerings.length === 0) {
      return Err({ NotFound: "No completed offerings found." });
    }

    return Ok(offerings);
  }),

  // Make Investment

  // This function is used to reserve an investment for a specific offering with the amount invested
  reserveInvestment: update(
    [TransactionPayload],
    Result(Transaction, Message),
    (payload) => {
      // Ensure all the required fields are provided
      if (
        !payload.propertyOwnerId ||
        !payload.investorId ||
        !payload.offeringId ||
        !payload.amountInvested
      ) {
        return Err({
          InvalidPayload: "Ensure all required fields are provided!",
        });
      }

      // Check if the investor exists
      const investorOpt = investorStorage.get(payload.investorId);
      if ("None" in investorOpt) {
        return Err({
          NotFound: `Cannot create the reserve: Investor with id=${payload.investorId} not found`,
        });
      }

      const investor = investorOpt.Some;

      // Check if the property owner exists
      const propertyOwnerOpt = propertyOwnerStorage.get(
        payload.propertyOwnerId
      );
      if ("None" in propertyOwnerOpt) {
        return Err({
          NotFound: `Cannot create the reserve: Property owner with id=${payload.propertyOwnerId} not found`,
        });
      }

      const propertyOwner = propertyOwnerOpt.Some;

      // Check if the offering exists
      const offeringOpt = offeringStorage.get(payload.offeringId);
      if ("None" in offeringOpt) {
        return Err({
          NotFound: `Cannot create the reserve: Offering with id=${payload.offeringId} not found`,
        });
      }

      const offering = offeringOpt.Some;

      try {
        // Generate a unique transaction ID
        const transactionId = uuidv4();

        // Create the transaction object
        const transaction = {
          id: transactionId,
          investorId: payload.investorId,
          propertyOwnerId: payload.propertyOwnerId,
          offeringId: payload.offeringId,
          Investor: investor.owner,
          propertyOwner: offering.creator,
          amountInvested: payload.amountInvested,
          tokensPurchased: 0n,
          status: { PaymentPending: "Payment Pending" },
          paid_at_block: None,
          memo: generateCorrelationId(payload.investorId),
          transactionDate: new Date().toISOString(),
        };

        // Log the Invesment details for debugging  purposes
        console.log("Investment Details: ", transaction);

        // Insert the transaction into the storage(pendingInvestmentsReserves)
        pendingInvestmentsReserves.insert(transaction.memo, transaction);

        // Discard the reservation after a specific period
        discardByTimeout(transaction.memo, TIMEOUT_PERIOD);

        // Successfully return the created transaction
        return Ok(transaction);

        // Handle any errors
      } catch (error) {
        return Err({
          Error: `An error occurred while creating the reserve: ${error}`,
        });
      }
    }
  ),

  // Complete a reserve for an investment
  completeReserveInvestment: update(
    [Principal, text, nat64, nat64, nat64],
    Result(Transaction, Message),
    async (reservor, investorId, reservePrice, block, memo) => {
      const paymentVerified = await verifyPaymentInternal(
        reservor,
        reservePrice,
        block,
        memo
      );
      if (!paymentVerified) {
        return Err({
          NotFound: `Cannot complete the investment reserve: cannot verify the payment, memo=${memo}`,
        });
      }

      const pendingReserveOpt = pendingInvestmentsReserves.remove(memo);
      if ("None" in pendingReserveOpt) {
        return Err({
          NotFound: `Cannot complete the investment reserve: there is no pending reserve with id=${investorId}`,
        });
      }

      const reserve = pendingReserveOpt.Some;
      const updatedReserve = {
        ...reserve,
        status: TransactionStatus.Completed,
        paid_at_block: block,
      };

      const investorOpt = investorStorage.get(investorId);
      if ("None" in investorOpt) {
        return Err({
          NotFound: `Investor with id=${investorId} not found`,
        });
      }

      const investor = investorOpt.Some;
      investor.totalInvested += reserve.amountInvested;
      investorStorage.insert(investorId, investor);
      persistedInvestmentsReserves.insert(ic.caller(), updatedReserve);

      return Ok(updatedReserve);
    }
  ),

  /*
        another example of a canister-to-canister communication
        here we call the `query_blocks` function on the ledger canister
        to get a single block with the given number `start`.
        The `length` parameter is set to 1 to limit the return amount of blocks.
        In this function we verify all the details about the transaction to make sure that we can mark the order as completed
    */
  verifyPayment: query(
    [Principal, nat64, nat64, nat64],
    bool,
    async (propertyOwner, amount, block, memo) => {
      return await verifyPaymentInternal(propertyOwner, amount, block, memo);
    }
  ),

  /*
              a helper function to get address from the principal
              the address is later used in the transfer method
          */
  getAddressFromPrincipal: query([Principal], text, (principal) => {
    return hexAddressFromPrincipal(principal, 0);
  }),
});

/*
    a hash function that is used to generate correlation ids for orders.
    also, we use that in the verifyPayment function where we check if the used has actually paid the order
*/
function hash(input: any): nat64 {
  return BigInt(Math.abs(hashCode().value(input)));
}

// a workaround to make uuid package work with Azle
globalThis.crypto = {
  // @ts-ignore
  getRandomValues: () => {
    let array = new Uint8Array(32);

    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }

    return array;
  },
};

// HELPER FUNCTIONS
function generateCorrelationId(bookId: text): nat64 {
  const correlationId = `${bookId}_${ic.caller().toText()}_${ic.time()}`;
  return hash(correlationId);
}

/*
    after the order is created, we give the `delay` amount of minutes to pay for the order.
    if it's not paid during this timeframe, the order is automatically removed from the pending orders.
*/
function discardByTimeout(memo: nat64, delay: Duration) {
  ic.setTimer(delay, () => {
    const order = pendingInvestmentsReserves.remove(memo);
    console.log(`Reserve discarded ${order}`);
  });
}

async function verifyPaymentInternal(
  receiver: Principal,
  amount: nat64,
  block: nat64,
  memo: nat64
): Promise<bool> {
  const blockData = await ic.call(icpCanister.query_blocks, {
    args: [{ start: block, length: 1n }],
  });
  const tx = blockData.blocks.find((block) => {
    if ("None" in block.transaction.operation) {
      return false;
    }
    const operation = block.transaction.operation.Some;
    const senderAddress = binaryAddressFromPrincipal(ic.caller(), 0);
    const receiverAddress = binaryAddressFromPrincipal(receiver, 0);
    return (
      block.transaction.memo === memo &&
      hash(senderAddress) === hash(operation.Transfer?.from) &&
      hash(receiverAddress) === hash(operation.Transfer?.to) &&
      amount === operation.Transfer?.amount.e8s
    );
  });
  return tx ? true : false;
}
