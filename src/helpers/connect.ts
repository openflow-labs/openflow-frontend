import { ethers } from "ethers";
import CONTRACTABI from "../abis/contract.json"; // ABI

const CONTRACT_ADDRESS = "0xc2190225340fF87588785D451bba2304384Ae488"; // Dirección del contrato

export const fetchEndpoint = async () => {
  try {
    const provider = new ethers.JsonRpcProvider(
      "https://rpc-amoy.polygon.technology"
    );

    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACTABI,
      provider
    );

    console.log("contract :  ", contract);

    const _floor = 0;
    const ceiling = 59;
    const uris = await contract.tokenURIBatch(_floor, ceiling);
    console.log("Uris :  ", uris);

    // Convertir URLs IPFS a HTTP
    const httpUris = uris.map(convertIpfsToHttp);

    console.log("https :  ", httpUris);

    const fetchPromises = httpUris.map((uri: string) => fetchDataFromIPFS(uri));
    const results = await Promise.all(fetchPromises);
    console.log("Results :  ", results);

    // Procesar los datos obtenidos
    const final = results.map((data, index) => {
      return data.attributes;
    });

    console.log("Final :  ", final);

    return transformData(final);
  } catch (error) {
    console.log(error);
  }
};

// Define the type for the items in the array
interface Trait {
  trait_type: "Proof" | "Amount" | "Date" | "Reference ID";
  value: string | number | null;
}

// Define the type for the array of trait objects
type TraitArray = Trait[];
// Function to transform the data
function transformData(
  array: TraitArray[]
): { id: string; date: string; amount: string }[] {
  return array.map((itemArray) => {
    const id = (
      itemArray.find((item) => item.trait_type === "Reference ID") as Trait
    ).value as string;
    const dateTimestamp = (
      itemArray.find((item) => item.trait_type === "Date") as Trait
    ).value as string;
    const amount = (
      itemArray.find((item) => item.trait_type === "Amount") as Trait
    ).value as string;

    // Convert timestamp to date string
    const date = new Date(Number(dateTimestamp)).toLocaleDateString("en-GB");

    return { id, date, amount };
  });
}

// Función para convertir IPFS URL a HTTP
function convertIpfsToHttp(ipfsUrl: string): string {
  if (ipfsUrl.startsWith("ipfs://")) {
    return `https://ipfs.io/ipfs/${ipfsUrl.substring(7)}`;
  }
  return ipfsUrl; // Si ya es una URL HTTP, la retorna tal cual
}

// Función para hacer fetch de una URL IPFS
async function fetchDataFromIPFS(ipfsUrl: string) {
  try {
    const response = await fetch(ipfsUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // O el formato adecuado según los datos en IPFS
    return data;
  } catch (error) {
    console.error(`Error fetching data from IPFS (${ipfsUrl}):`, error);
    return null; // Devuelve null en caso de error para manejarlo más tarde
  }
}
