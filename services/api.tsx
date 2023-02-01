import axios from 'axios';

let baseURL: 'https://localhost:3003'

async function getProductById(id:string) {
    try {
      const response = await axios.get(baseURL+`/getProductWithHistory/?id=${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

async function getProductDetailsById(id:string) {
  try {
    const response = await axios.get(baseURL+`/getProduct/?id=${id}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function addProduct(payload:JSON) {
  try {
    const response = await axios.post(baseURL+`/createProdcut`, payload);
    console.log(response);
  } catch (error) {
    console.error(error);
  }

}

async function isIdExists(id:string) {
  try {
    const response = await axios.get(baseURL+`/productExists/?id=${id}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function shipProduct(payload:JSON) {
  try {
    const response = await axios.post(baseURL+"/shipProductTo",payload);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}