import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/action";

const assetsOfProduct = {
  name: "",
  category: "",
  img: "",
  price: "",
  quantity: "",
  wasQuantity: "",
  shopQuantity: 0,
};

const assetsOfErrors = {
  name: false,
  category: false,
  img: false,
  price: false,
  quantity: false,
};

function ProductForm() {
  const [productAssets, setProductAssets] = useState(assetsOfProduct);
  const [errors, setErrors] = useState(assetsOfErrors);

  const dispatch = useDispatch()

  const errorHandle = () => {

    if(!productAssets.name){
      setErrors({...assetsOfErrors, name: true})
          return true
    }
    if(!productAssets.category){
      setErrors({...assetsOfErrors, category: true})
          return true
    }
    if(!productAssets.img){
      setErrors({...assetsOfErrors, img: true})
          return true
    }
    if(!productAssets.price){
      setErrors({...assetsOfErrors, price: true})
          return true
    }
    if(!productAssets.quantity){
      setErrors({...assetsOfErrors, quantity: true})
          return true
    }
     return false
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Error Handeler 
    if(errorHandle()) return

  dispatch(addProduct(productAssets))

  // reset useState
  setProductAssets(assetsOfProduct)
  };


  return (
    <div>
      {/* <!-- Product Input Form --> */}
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={(e) => handleSubmit(e)}
        >
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              onChange={(e) =>
                setProductAssets((item) => ({ ...item, name: e.target.value }))
              }
              value={productAssets.name}
            />
            {errors?.name && (
              <small style={{ color: "red" }}>product name empty!!!</small>
            )}
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              onChange={(e) =>
                setProductAssets((item) => ({
                  ...item,
                  category: e.target.value,
                }))
              }
              value={productAssets.category}
            />
            {errors?.category && (
              <small style={{ color: "red" }}>product category empty!!!</small>
            )}
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              onChange={(e) =>
                setProductAssets((item) => ({ ...item, img: e.target.value }))
              }
              value={productAssets.img}
            />
            {errors?.img && (
              <small style={{ color: "red" }}>product img empty!!!</small>
            )}
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                onChange={(e) =>
                  setProductAssets((item) => ({
                    ...item,
                    price: Number(e.target.value),
                  }))
                }
              value={productAssets.price}
              />
              {errors?.price && (
                <small style={{ color: "red" }}>product price empty!!!</small>
              )}
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                onChange={(e) =>
                  setProductAssets((item) => ({
                    ...item,
                    quantity: Number(e.target.value),
                    wasQuantity: Number(e.target.value),
                  }))
                }
              value={productAssets.quantity}
              />
              {errors?.quantity && (
                <small style={{ color: "red" }}>
                  product quantity empty!!!
                </small>
              )}
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
      {/* <!-- Product Input Form Ends --> */}
    </div>
  );
}

export default ProductForm;
