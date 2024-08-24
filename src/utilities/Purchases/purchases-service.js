import * as PurchasesAPI from "./purchases-api";

//functions for customers UI
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

export async function updatePurchasesPaid(id) {
  const response = await PurchasesAPI.updatePurchasesPaid(id);
  return response;
}

export async function getHistoryList(id) {
  const response = await PurchasesAPI.getHistoryList(id);
  return response;
}
//functions for shop owners UI
export async function getOrdersList(id) {
  const response = await PurchasesAPI.getOrdersList(id);
  return response;
}

export async function fulfillOrderItem(id) {
  const response = await PurchasesAPI.fulfillOrderItem(id);
  return response;
}

export async function getPurchaseListForInventoryItem(id) {
  const response = await PurchasesAPI.getPurchaseListForInventoryItem(id);
  return response;
}
