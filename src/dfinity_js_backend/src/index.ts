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
import { v4 as uuidv4 } from "uuid";

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

// PropertyOwnerStatus Enum
const PropertyOwnerStatus = Variant({
  Active: text,
  Inactive: text,
  Suspended: text,
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

// Transaction Struct
const Transaction = Record({
  id: text,
  investorId: text, // Investor ID
  assetId: text, // Asset ID
  amountInvested: nat64,
  tokensPurchased: nat64,
  transactionDate: text,
  status: text, // "Pending", "Completed"
});

// Payloads
const PropertyOwnerPayload = Record({
  name: text,
  phoneNumber: text,
  email: text,
});

const InvestorPayload = Record({
  name: text,
  email: text,
  phoneNumber: text,
});

const AssetPayload = Record({
  title: text,
  description: text,
  location: text,
  totalValue: nat64,
  totalTokens: nat64,
});

const OfferingPayload = Record({
  assetId: text,
  pricePerToken: nat64,
  availableTokens: nat64,
});

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
const transactionStorage = StableBTreeMap(4, text, Transaction);

// Functions

export default Canister({
  // Create PropertyOwner
  createPropertyOwner: update(
    [PropertyOwnerPayload],
    Result(PropertyOwner, text),
    (payload) => {
      if (!payload.name || !payload.email || !payload.phoneNumber) {
        return Err("Missing required fields");
      }

      const propertyOwnerId = uuidv4();
      const propertyOwner = {
        id: propertyOwnerId,
        owner: ic.caller(),
        name: payload.name,
        phoneNumber: payload.phoneNumber,
        email: payload.email,
        propertiesOwned: [],
        joinedAt: new Date().toISOString(),
      };
      propertyOwnerStorage.insert(propertyOwnerId, propertyOwner);
      return Ok(propertyOwner);
    }
  ),

  // Create Asset
  createAsset: update(
    [AssetPayload],
    Result(Asset, text),
    (payload) => {
      const propertyOwnerOpt = propertyOwnerStorage.get(ic.caller().toText());
      if ("None" in propertyOwnerOpt) {
        return Err("Property owner not found.");
      }

      const assetId = uuidv4();
      const asset = {
        id: assetId,
        owner: ic.caller().toText(),
        title: payload.title,
        description: payload.description,
        location: payload.location,
        totalValue: payload.totalValue,
        totalTokens: payload.totalTokens,
        availableTokens: payload.totalTokens,
        status: "Available",
        listedAt: new Date().toISOString(),
      };

      assetStorage.insert(assetId, asset);
      return Ok(asset);
    }
  ),

  // Create Offering
  createOffering: update(
    [OfferingPayload],
    Result(Offering, text),
    (payload) => {
      const assetOpt = assetStorage.get(payload.assetId);
      if ("None" in assetOpt) {
        return Err("Asset not found.");
      }

      const offeringId = uuidv4();
      const offering = {
        id: offeringId,
        assetId: payload.assetId,
        pricePerToken: payload.pricePerToken,
        availableTokens: payload.availableTokens,
        startDate: new Date().toISOString(),
        endDate: None,
        status: "Ongoing",
      };

      offeringStorage.insert(offeringId, offering);
      return Ok(offering);
    }
  ),

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

      const transactionId = uuidv4();
      const transaction = {
        id: transactionId,
        investorId: payload.investorId,
        assetId: payload.assetId,
        amountInvested: payload.amountInvested,
        tokensPurchased: payload.amountInvested / assetOpt.Some.pricePerToken,
        transactionDate: new Date().toISOString(),
        status: "Completed",
      };

      transactionStorage.insert(transactionId, transaction);
      return Ok(transaction);
    }
  ),

  // Get PropertyOwner by ID
  getPropertyOwnerById: query([text], Result(PropertyOwner, text), (ownerId) => {
    const propertyOwnerOpt = propertyOwnerStorage.get(ownerId);
    if ("None" in propertyOwnerOpt) {
      return Err("Property owner not found.");
    }
    return Ok(propertyOwnerOpt.Some);
  }),

  // Get All Assets
  getAllAssets: query([], Result(Vec(Asset), text), () => {
    const assets = assetStorage.values();
    return assets.length ? Ok(assets) : Err("No assets found.");
  }),

  // Get All Offerings
  getAllOfferings: query([], Result(Vec(Offering), text), () => {
    const offerings = offeringStorage.values();
    return offerings.length ? Ok(offerings) : Err("No offerings found.");
  }),
});
