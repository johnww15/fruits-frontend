import * as InventoryAPI from "./inventory-api";

export async function getInventoryList() {
  const response = await InventoryAPI.getInventoryList();
  return response;
}

export async function createInventoryItem(data) {
  const response = await InventoryAPI.createInventoryItem(data);
  return response;
}

export async function updateInventoryItem(data) {
  const response = await InventoryAPI.updateInventoryItem(data);
  return response;
}
