import React, {useEffect} from 'react'
import Loading from '../../../utils/Loading/Loading';
import { getProductByCategory } from '../../../redux/products/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../product/Product';


function Prodacts() {
     const dispatch = useDispatch()
     const {products, loading,error} = useSelector((state) => state.products)
       
    
      useEffect(() => {
        dispatch(getProductByCategory('beauty'))
      }, [dispatch])
    
      if (loading) return <Loading/>
      if (error) return <div>error:{error}</div>
    
      
  return (
    <div>
         <div className='products'>
        {
          products.map((product) => (
            <Product key={product.id} product={product}/>
          ))
        }      
      </div>
    </div>
  )
}

export default Prodacts

