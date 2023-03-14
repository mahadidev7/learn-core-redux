import React from 'react'
import ProductForm from './ProductForm'
import ProductItem from './ProductItem'

function MainBody() {
  return (
    <main class="py-16">
    <div class="productWrapper">
      {/* <!-- products container --> */}
      <div class="productContainer" id="lws-productContainer">
        {/* <!-- product item --> */}
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        {/* <!-- product item ends --> */}

      </div>
      {/* <!-- products container ends --> */}
      <ProductForm />
    </div>
  </main>
  )
}

export default MainBody