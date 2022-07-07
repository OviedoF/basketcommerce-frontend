import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";

export const agregarProducto = (product) => ({
    type: ADD_PRODUCT,
    payload: product
});

export const removeProduct = (product) => ({
    type: DELETE_PRODUCT,
    payload: product
});