import { getToken } from "../Users/users-service";

//constant for file
const BASE_URL = "/api/purchases";

function createHeaders() {
  const TOKEN = getToken();
  return {
    "Content-type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  };
}

export async function createPurchase(data) {
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

export async function getPurchaseList(id) {
  const userId = id;
  const options = {
    method: "GET",
    headers: createHeaders(),
  };
  const res = await fetch(BASE_URL + "/" + userId, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error("Network response failed.");
  }
}

export async function deletePurchaseItem(id) {
  const purchaseId = id;
  const options = {
    method: "DELETE",
    headers: createHeaders(),
  };
  const res = await fetch(BASE_URL + "/" + purchaseId, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return res;
  }
}

export async function updatePurchasesPaid(id) {
  const userId = id;
  const options = {
    method: "PUT",
    headers: createHeaders(),
  };
  const res = await fetch(BASE_URL + "/update/" + userId, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return res;
  }
}
