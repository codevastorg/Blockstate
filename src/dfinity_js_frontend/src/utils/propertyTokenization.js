import { Principal } from "@dfinity/principal";
import { transferICP } from "./ledger";

// createPropertyOwner
export async function createPropertyOwner(profile) {
  return window.canister.farmWorkChain.createPropertyOwner(profile);
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
export async function createInvestor(profile) {
  return window.canister.farmWorkChain.createInvestor(profile);
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

// createTransaction