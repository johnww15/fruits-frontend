import * as PurchasesAPI from "./purchases-api";

export async function createPurchase(data) {
  const response = await PurchasesAPI.createPurchase(data);
  return response;
}

export async function getPurchaseList(id) {
  const response = await PurchasesAPI.getPurchaseList(id);
  return response;
}

export async function deletePurchaseItem(id) {
  const response = await PurchasesAPI.deletePurchaseItem(id);
  return response;
}
