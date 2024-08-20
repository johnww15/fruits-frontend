import { getToken } from "../Users/users-service";

//constant for file
const BASE_URL = "/api/inventory";

function createHeaders() {
  const TOKEN = getToken();
  return {
    "Content-type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  };
}

export async function getInventoryList() {
  const options = {
    method: "GET",
    headers: createHeaders(),
  };
  const res = await fetch(BASE_URL, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error("Network response failed.");
  }
}

export async function createInventoryItem(data) {
  const options = {
    method: "POST",
    headers: createHeaders(),
    body: JSON.stringify(data),
  };
  const res = await fetch(BASE_URL, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error("Network response failed.");
  }
}
