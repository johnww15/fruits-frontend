import * as InventoryAPI from "./inventory-api";

export async function getInventoryList() {
  const response = await InventoryAPI.getInventoryList();
  return response;
}

export async function createInventoryItem(data) {
  const response = await InventoryAPI.createInventoryItem(data);
  return response;
}
