import { ADDED_PRODUCT, } from "./actionTypes";

export const addProduct = (product_assets={}) => {
    return {
        type: ADDED_PRODUCT,
        payload: product_assets
    }
}









