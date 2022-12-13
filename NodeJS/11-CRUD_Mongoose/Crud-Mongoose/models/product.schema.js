import mongoose from 'mongoose';
import validator from 'validator';

export const productSchema = new mongoose.Schema({
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
        image: {
            type: String,
            required: true,
            validate(value) {
                if (!validator.isURL(value)) {
                    throw new Error('Image must be a valid URL');
                }
            }
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

