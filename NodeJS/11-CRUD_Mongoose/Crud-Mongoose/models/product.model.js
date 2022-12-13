import mongoose from "mongoose";
import { productSchema } from "./product.schema.js";

productSchema.statics.printSome = function () {
  console.log({ printSome: this });
};

productSchema.methods.instanceOf = function () {
  console.log({ instanceOf: this });
};

export const Product = mongoose.model("Product", productSchema);
