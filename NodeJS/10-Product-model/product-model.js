import mongoose from "mongoose";
import validator from "validator";

const { Schema } = mongoose;

mongoose.connect("mongodb://localhost:27017/product", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error("Price must be positive number");
        }
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String],
      default: undefined,
      required: true,
      validate(val) {
        if (val.length < 2) {
          throw new Error("array must at least 2 images URLs");
        }
        val.forEach((el) => {
          if (!validator.isURL(el)) {
            throw new Error("all array items must be image URLs");
          }
        });
      },
    },
    phone: {
      type: String,
      required: true,
      validate(value) {
        if (
          !validator.isMobilePhone(value) ||
          !value.startsWith("00972") ||
          value.length !== 15
        ) {
          throw new Error("Phone number is invalid");
        }
      },
    },
    dateAdded: {
      type: String,
      default: Date(),
    },
  },
});

const Product = mongoose.model("Product", productSchema);

const boots = new Product({
  name: "boots",
  category: "shoes",
  isActive: true,
  details: {
    description: "boots for winter",
    price: 100,
    discount: 10,
    images: [
      "https://d5g6qrhuv2sn8.cloudfront.net/catalog/product/cache/7d6977a2ec7c2a93738e7f9002fdf582/1/e/1e2e6d8187bfd841cf3673a3895a0283_11.jpg",
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658529924-jadon-smooth-leather-platform-boots-dr-martens-1658529913.jpg",
    ],
    phone: "009720583331332",
  },
});

boots
  .save()
  .then((res) => {
    console.log(res);
    return;
  })
  .catch((err) => {
    console.log(err);
  });

const shirts = new Product({
  name: "shirts",
  category: "clothes",
  isActive: true,
  details: {
    description: "shirts for summer",
    price: 100,
    discount: 10,
    images: [
      "https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/38f5566e_0d61.jpg",
      "https://imgprd19.hobbylobby.com/2/4f/57/24f57e245a879cb2543edd1df4e090bfebf24a45/700Wx700H-1013689-0320.jpg",
    ],
    phone: "009720584568122",
  },
});

shirts
  .save()
  .then((res) => {
    console.log(res);
    return;
  })
  .catch((err) => {
    console.log(err);
  });

const pants = new Product({
  name: "pants",
  category: "clothes",
  isActive: true,
  details: {
    description: "pants for summer",
    price: 100,
    discount: 10,
    images: [
      "https://s3-us-west-2.amazonaws.com/melingoimages/Images/69247.jpg",
      "https://images.arcteryx.com/F22/1350x1710/Beta-AR-Pant-Cloud.jpg",
    ],
    phone: "009720583331678",
  },
});

pants
  .save()
  .then((res) => {
    console.log(res);
    return;
  })
  .catch((err) => {
    console.log(err);
  });
