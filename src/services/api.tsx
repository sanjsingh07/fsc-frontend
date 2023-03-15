import axios from 'axios';

let baseURL: 'http://localhost:3003'

async function getProductById(id:string) {
    try {
      // const response = await axios.get(`http://localhost:3003/getProductWithHistory/?id=${id}`);
      const response = await axios.get(`http://localhost:3003/getProductWithHistory/?id=${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

async function getProductDetailsById(id:string) {
  try {
    const response = await axios.get(`http://localhost:3003/getProduct?id=${id}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function addProduct(payload:any) {
 
  try {

    const response = await axios.post(`http://localhost:3003/createProduct`, payload);
    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
    console.log("ERROR: ", error);
  }

}

async function isIdExists(id:string) {

  try {
    const response = await axios.get(`http://localhost:3003/productExists/?id=${id}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function shipProduct(payload:JSON) {
  try {
    const response = await axios.post("http://localhost:3003/shipProductTo",payload);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export {
  getProductById,
  getProductDetailsById,
  addProduct,
  isIdExists,
  shipProduct
}