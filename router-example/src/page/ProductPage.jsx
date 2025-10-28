import React from 'react'
import { useSearchParams } from 'react-router'

const ProductPage = () => {
    let [query, setQuery] = useSearchParams();
    console.log("ddd", query.get("q"))  //get : 값을 가져온다
  return (
    <div>
        <h1>Show All Products!!!</h1>

    </div>
  )
}

export default ProductPage