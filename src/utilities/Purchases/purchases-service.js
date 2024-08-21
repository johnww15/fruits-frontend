import * as PurchasesAPI from "./purchases-api";

export async function createPurchase(data) {
  const response = await PurchasesAPI.createPurchase(data);
  return response;
}
