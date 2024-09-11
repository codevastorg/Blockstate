import { Principal } from "@dfinity/principal";
import { transferICP } from "./ledger";

// createPropertyOwner
export async function createPropertyOwnerProfile(profile) {
  return window.canister.farmWorkChain.createPropertyOwnerProfile(profile);
}

// getPropertyOwnerProfileById
export async function getPropertyOwnerProfileById(ownerId) {
  return window.canister.farmWorkChain.getPropertyOwnerProfileById(ownerId);
}

//  getAllPropertyOwners
export async function getAllPropertyOwners() {
  return window.canister.farmWorkChain.getAllPropertyOwners();
}

// getPropertyOwnerProfileByPrincipal
export async function getPropertyOwnerProfileByPrincipal() {
  return window.canister.farmWorkChain.getPropertyOwnerProfileByPrincipal();
}

// createInvestor
export async function createInvestorProfile(profile) {
  return window.canister.farmWorkChain.createInvestorProfile(profile);
}

// getInvestorProfileById
export async function getInvestorProfileById(investorId) {
  return window.canister.farmWorkChain.getInvestorProfileById(investorId);
}

// getInvestorProfileByPrincipal
export async function getInvestorProfileByPrincipal() {
  return window.canister.farmWorkChain.getInvestorProfileByPrincipal();
}

// getAllInvestors
export async function getAllInvestors() {
  return window.canister.farmWorkChain.getAllInvestors();
}

// createAsset
export async function createAsset(asset) {
  return window.canister.farmWorkChain.createAsset(asset);
}

// getAssetById
export async function getAssetById(assetId) {
  return window.canister.farmWorkChain.getAssetById(assetId);
}

// getAllAssets
export async function getAllAssets() {
  return window.canister.farmWorkChain.getAllAssets();
}

// getAssetsByOwner
export async function getAssetsByOwner(ownerId) {
  return window.canister.farmWorkChain.getAssetsByOwner(ownerId);
}

// getAvailableAssets
export async function getAvailableAssets() {
  return window.canister.farmWorkChain.getAvailableAssets();
}

// getSoldOutAssets
export async function getSoldOutAssets() {
  return window.canister.farmWorkChain.getSoldOutAssets();
}

// createOffering
export async function createOffering(offering) {
  return window.canister.farmWorkChain.createOffering(offering);
}

// getOfferingById
export async function getOfferingById(offeringId) {
  return window.canister.farmWorkChain.getOfferingById(offeringId);
}

// getAllOfferings
export async function getAllOfferings() {
  return window.canister.farmWorkChain.getAllOfferings();
}

// getOfferingsByAsset
export async function getOfferingsByAsset(assetId) {
  return window.canister.farmWorkChain.getOfferingsByAsset(assetId);
}

// getOngoingOfferings
export async function getOngoingOfferings() {
  return window.canister.farmWorkChain.getOngoingOfferings();
}

// getCompletedOfferings
export async function getCompletedOfferings() {
  return window.canister.farmWorkChain.getCompletedOfferings();
}

// getAllInvestments
export async function getAllInvestments() {
  return window.canister.farmWorkChain.getAllInvestments();
}

// Make investment
export async function makeInvestment(investment) {
  const investmentCanister = window.canister.farmWorkChain;

  // Step 1: Create a reservation for the investment
  const investmentReserveResp = await investmentCanister.reserveInvestment({
    propertyOwnerId: investment.propertyOwnerId,
    investorId: investment.investorId,
    offeringId: investment.offeringId,
    amountInvested: investment.amountPayable,
  });

  // Check if the reservation was successful
  if ("Err" in investmentReserveResp) {
    console.error(investmentReserveResp.Err);
    return; // Handle error as needed
  }

  const reserve = investmentReserveResp.Ok;
  console.log("Investment reserve created:", reserve);

  // Step 2: Get the receiver (property owner)'s address
  const receiverPrincipal = Principal.from(reserve.propertyOwner);
  const receiverAddress = await investmentCanister.getAddressFromPrincipal(
    receiverPrincipal
  );

  // Step 3: Transfer ICP tokens to the receiver's address
  const block = await transferICP(
    receiverAddress,
    BigInt(reserve.amountInvested),
    BigInt(reserve.memo)
  );
  

  // Logging the transaction details
  console.log(
    "Logging the transaction details",
    receiverPrincipal,
    investment.investorId,
    reserve.amountInvested,
    block,
    reserve.memo
  );

  // Step 4: Complete the investment reserve
  await investmentCanister.completeReserveInvestment(
    receiverPrincipal,
    investment.investorId,
    reserve.amountInvested,
    block,
    reserve.memo
  );
}
