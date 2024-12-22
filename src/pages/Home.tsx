import { useEffect } from 'react'
import { ProductState } from '../helpers/ts_helpers';
import ProductsCard from '../components/ProductsCard';
import { getProducts } from '../redux/slices/ProductSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootType } from '../redux/store/store';
import { useSelector } from 'react-redux';

const Home = () => {
    const dispatch: AppDispatch = useDispatch();
    const {products, pending, error}:ProductState = useSelector((state : RootType)=>state.products);
    console.log(products);
    const getData= async ()=>{
        try{
            const options = {
                method : "get",
                url : "/products/getproducts"
            }
            await dispatch(getProducts(options));
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {pending ? ( <h1>Loading</h1> ) :  error ? <p>{error}</p> : products.map((product) => (
            <ProductsCard key={product._id} product={product}/>
          ))}
        </div>
      </div>   
    </div>
  )
}

export default Home