import { getToken } from "./users-service";

//constant for file
const BASE_URL = "/api/users";

//consolidating function for requests
export async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };
  console.log("options", options);
  console.log("payload", payload);
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  console.log("user-api token ran", token);

  if (token) {
    options.headers ||= {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  console.log("user-api", options);
  const res = await fetch(url, options);

  if (res.ok) return res.json();
  throw new Error("Bad Request");
}

// signup function
export async function userSignup(signupData) {
  console.log("user-api signup running");
  return sendRequest(BASE_URL, "POST", signupData);
}

// login function
export async function userLogin(loginData) {
  console.log("user-api login running");
  return sendRequest(BASE_URL + "/login", "POST", loginData);
}
