import {
  addProductToMongo,
  getAllProductFromMongo,
  getProductFromMongo,
  getActiveProductFromMongo,
  getProductsWithSpecificPrice,
  updateProduct,
  deleteProduct,
  deleteAllProduct
} from "../services/product.mongoose.js";

export const addProduct = async (req, res) => {
  try{
    const productObj = req.body;
    const product = await addProductToMongo(productObj);
    res.send(product);
  }
  catch(err){
    res.status(500).send(err);
  }
};

export const getProduct = async (req, res) => {

  try{
    const id = req.params.id;
    const product = await getProductFromMongo(id);
    res.send(product);
  }
  catch(err){
    res.status(500).send(err)
  }
  
};

export const getAllProduct = async (req, res) => {
  
  try{
    const products = await getAllProductFromMongo();
    res.send(products);
  }
  catch(err){
    res.status(500).send(err)
  }
};

export const getActiveProduct = async (req, res) => {  
  try{
    const products = await getActiveProductFromMongo();
    res.send(products);
  }
  catch(err){
    res.status(500).send(err)
  }
};

export const getProductsWithSpecificPriceRange = async (req, res) => {
  try{    
  const products = await getProductsWithSpecificPrice();
  res.send(products);
  }
  catch(err){
    res.status(500).send(err)
  }
};

export const updateProductController = async (req, res) => {
  try{   
    const id = req.params.id;
    const productObj = req.body;
    const product = await updateProduct(id, productObj);
    res.send(product);
  }
  catch(err){
    res.status(500).send(err)
  }
}

export const deleteProductController = async (req, res) => {
  try{          
    const id = req.params.id;
    const product = await deleteProduct(id);
    res.send(product);
  }
  catch(err){
    res.status(500).send(err)
  }
}

export const deleteAllProductController = async (req, res) => {    
  try{
    const products = await deleteAllProduct();
    res.send(products);
  }
  catch(err){
    res.status(500).send(err)
  }
}
