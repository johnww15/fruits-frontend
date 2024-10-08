import { getToken } from "../Users/users-service";

//constant for file
const apiUrl = import.meta.env.VITE_API_URL;
const BASE_URL = `${apiUrl}/api/inventory`;

function createHeaders() {
  const TOKEN = getToken();
  return {
    "Content-type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  };
}

export async function getInventoryList(id) {
  const userId = id;
  const options = {
    method: "GET",
    headers: createHeaders(),
  };
  const res = await fetch(`${BASE_URL}/` + userId, options);
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

export async function updateInventoryItem(data) {
  const inventoryId = data._id;
  const options = {
    method: "PUT",
    headers: createHeaders(),
    body: JSON.stringify(data),
  };
  const res = await fetch(`${BASE_URL}/` + inventoryId, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return res;
  }
}

export async function deleteInventoryItem(id) {
  const inventoryId = id;
  const options = {
    method: "DELETE",
    headers: createHeaders(),
  };
  const res = await fetch(`${BASE_URL}/` + inventoryId, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return res;
  }
}

export async function getFullInventoryList() {
  const options = {
    method: "GET",
    headers: createHeaders(),
  };
  const res = await fetch(BASE_URL, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return res;
  }
}
