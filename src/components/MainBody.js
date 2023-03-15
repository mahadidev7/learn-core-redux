import React from 'react'
import { useSelector } from 'react-redux'
import ProductForm from './ProductForm'
import ProductItem from './ProductItem'

function MainBody() {
  const SELECT_products = useSelector((state) => state.products)

  return (
    <main className="py-16">
    <div className="productWrapper">
      {/* <!-- products container --> */}
      <div className="productContainer" id="lws-productContainer">
        {
          SELECT_products?.map((product, key) => <ProductItem key={key} product={product} />)
        }
      </div>
      {/* <!-- products container ends --> */}
      <ProductForm />
    </div>
  </main>
  )
}

export default MainBody