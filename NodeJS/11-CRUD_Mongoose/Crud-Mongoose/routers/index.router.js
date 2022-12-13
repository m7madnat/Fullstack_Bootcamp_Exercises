import { Router } from "express";
import {
  addProduct,
  getAllProduct,
  getProduct,
  getActiveProduct,
  getProductsWithSpecificPriceRange,
  updateProductController,
  deleteProductController,
  deleteAllProductController,
} from "../controllers/product.controllers.js";

export const productRoute = Router();

productRoute.post("/add", addProduct);
productRoute.get("/getall", getAllProduct);
productRoute.get("/get/:id", getProduct);
productRoute.get("/getactive", getActiveProduct);
productRoute.get("/getspecificprice", getProductsWithSpecificPriceRange);
productRoute.put("/update/:id", updateProductController);
productRoute.delete("/delete/:id", deleteProductController);
productRoute.delete("/deleteAll", deleteAllProductController);
