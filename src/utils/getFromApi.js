import { REST_API_ADRESS } from "./const";

export async function getFromApi() {
  try {
    const response = await fetch(REST_API_ADRESS);
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
