import { Product } from "../models/product.model.js";

export const addProductToMongo = async (productObj) => {
        const product = new Product(productObj);
        const result = await product.save();
        return result;   
};

export const getProductFromMongo = async (id) => {
  const product = await Product.findById(id);
  return product;
};

export const getAllProductFromMongo = async () => {
  const products = await Product.find();
  return products;
};

export const getActiveProductFromMongo = async () => {
  const products = await Product.find({ isActive: true });
  return products;
};

export const getProductsWithSpecificPrice = async () => {
  return Product.find({
    $and: [
      { "details.price": { $gte: 120 } },
      { "details.price": { $lte: 500 } },
    ],
  });
};

export const updateProduct = async (id, productObj) => {
  const product = await Product.findByIdAndUpdate(id, productObj, {
    new: true,
  });
  return product;
};

export const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  return product;
};

export const deleteAllProduct = async () => {
  const products = await Product.deleteMany();
  return products;
};
