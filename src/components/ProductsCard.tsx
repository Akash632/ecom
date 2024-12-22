import React from 'react'
import {Product} from '../helpers/ts_helpers';
import { useNavigate } from 'react-router-dom';
interface ProductProp{
        product : Product
}
const ProductsCard = ({product} : ProductProp) => {
  const navigate= useNavigate();
  return (
    <div key={product._id} className="group relative" onClick={()=>navigate(`/product/${product._id}`)}>
              <img
                src={product.image_src}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Rs.{product.original_price}/-</p>
                </div>
              </div>
            </div>
  )
}

export default ProductsCard