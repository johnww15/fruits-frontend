import * as InventoryAPI from "./inventory-api";

export async function getInventoryList() {
  const response = await InventoryAPI.getInventoryList();
  return response;
}
