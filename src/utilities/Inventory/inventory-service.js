import * as InventoryAPI from "./inventory-api";

export async function getInventoryList(id) {
  const response = await InventoryAPI.getInventoryList(id);
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

export async function deleteInventoryItem(id) {
  const response = await InventoryAPI.deleteInventoryItem(id);
  return response;
}

export async function getFullInventoryList() {
  const response = await InventoryAPI.getFullInventoryList();
  return response;
}
