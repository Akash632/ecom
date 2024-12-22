import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Product } from "../helpers/ts_helpers";
import ApiRequest from "../utils/api_request";
import { AppDispatch, RootType } from "../redux/store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSingleProduct } from "../redux/slices/ProductSlice";

export default function ProductDetails() {
    const dispatch : AppDispatch = useDispatch();
    const {activeProduct, pending} = useSelector((state:RootType)=>state.products)
    const params = useParams();
    const getData = async ()=>{
        try{
            const options = {
                url : `/products/getProducts/${params.id}`,
                method: "get",
            }
            const response = await dispatch(getSingleProduct(options));
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getData();
    },[params.id]);
  return (
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {!pending && activeProduct ?
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <img
                src={activeProduct.image_src}
                className="aspect-[3/3] w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
            />
            <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{activeProduct.title}</h2>

                <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                    Product information
                </h3>

                <p className="text-2xl text-gray-900">Rs. {activeProduct.original_price}/-</p>                  
                </section>

                <section aria-labelledby="options-heading" className="mt-10">
                <div className='flex gap-8'>

                    <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                    Buy Now
                    </button>
                    <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center rounded-md border border-indigo-700 px-8 py-3 text-base font-medium text-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                    Add to bag
                    </button>
                </div>
                </section>
            </div>
            </div> : <h1>Loading...</h1>}
        </div>
  )
}
