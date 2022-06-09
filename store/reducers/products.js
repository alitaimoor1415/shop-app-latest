import PRODUCTS from "../../data/dummy-data";
import Product from "../../models/product";
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/products";
const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date.toString(),
        "u1",
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.availableProducts.concat(newProduct),
      };

    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        (prod) => prod.id === action.pid
      );
      const updateProduct = new Product(
        action.pid,
        state.userProducts[productIndex].ownerId,
        state.userProducts[productIndex].title,
        state.userProducts[productIndex].imageUrl,
        state.userProducts[productIndex].description,
        state.userProducts[productIndex].price
      );
      const updateUserProduct = [...state.userProducts];
      updateUserProduct[productIndex] = updateProduct;
      const availableProductIndex = state.availableProducts.findIndex(
        (prod) => prod.id === action.pid
      );
      const updateAvailableProduct = [...state.availableProducts];
      updateAvailableProduct[availableProductIndex] = updateProduct;
      return {
        ...state,
        availableProducts: updateAvailableProduct,
        userProducts: updateUserProduct,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.pid
        ),
        availableProducts: state.userProducts.filter(
          (product) => product.id !== action.pid
        ),
      };
  }
  return state;
};
