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
  principal: Principal,
  name: text,
  email: text,
  phoneNumber: text,
  investments: Vec(text),
  totalInvested: nat64,
  joinedAt: text,
});

// Asset Struct
const Asset = Record({
  id: text,
  owner: text, // PropertyOwner ID
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
  endDate: Opt(text),
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
  assetId: text,
  propertyOwner: Principal,
  Investor: Principal,
  amountInvested: nat64,
  tokensPurchased: nat64,
  status: TransactionStatus,
  paid_at_block: Opt(nat64),
  transactionDate: text,
  memo: text,
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
  title: text,
  description: text,
  location: text,
  totalValue: nat64,
  totalTokens: nat64,
});

// Offering Payload
const OfferingPayload = Record({
  assetId: text,
  pricePerToken: nat64,
  availableTokens: nat64,
});

// Transaction Payload
const TransactionPayload = Record({
  investorId: text,
  assetId: text,
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
    we set it in the `dfx.json`
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
        principal: ic.caller(),
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
      !payload.totalTokens
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

    const assetId = uuidv4();
    const asset = {
      id: assetId,
      owner: propertyOwner.id,
      ...payload,
      availableTokens: payload.totalTokens,
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
        !payload.totalValue ||
        !payload.totalTokens
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
      if (
        !payload.assetId ||
        !payload.pricePerToken ||
        !payload.availableTokens
      ) {
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

      const offeringId = uuidv4();
      const offering = {
        id: offeringId,
        assetId: payload.assetId,
        pricePerToken: payload.pricePerToken,
        availableTokens: payload.availableTokens,
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
      if (
        !payload.assetId ||
        !payload.pricePerToken ||
        !payload.availableTokens
      ) {
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
  makeInvestment: update(
    [TransactionPayload],
    Result(Transaction, text),
    (payload) => {
      const investorOpt = investorStorage.get(payload.investorId);
      if ("None" in investorOpt) {
        return Err("Investor not found.");
      }

      const assetOpt = assetStorage.get(payload.assetId);
      if ("None" in assetOpt) {
        return Err("Asset not found.");
      }

      const tokensPurchased =
        payload.amountInvested / assetOpt.Some.pricePerToken;
      if (tokensPurchased > assetOpt.Some.availableTokens) {
        return Err("Not enough tokens available.");
      }

      const transactionId = uuidv4();
      const transaction = {
        id: transactionId,
        investorId: payload.investorId,
        assetId: payload.assetId,
        amountInvested: payload.amountInvested,
        tokensPurchased: tokensPurchased,
        transactionDate: new Date().toISOString(),
        status: "Completed",
      };

      // Update storage
      assetStorage.insert(payload.assetId, {
        ...assetOpt.Some,
        availableTokens: assetOpt.Some.availableTokens - tokensPurchased,
      });
      transactionStorage.insert(transactionId, transaction);

      return Ok(transaction);
    }
  ),
});
