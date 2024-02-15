import axios from "axios";

export async function getApiData(url: string) {
  const response = await axios.get(url);

  if (response) return response.data;

  return null;
}
