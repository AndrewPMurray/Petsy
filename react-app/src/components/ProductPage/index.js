import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadProducts } from '../../store/products';
import ProductPhotos from './ProductPhotos';
import ProductInfo from './ProductInfo';
import Reviews from '../Reviews/index'

function ProductPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector(state => state?.products)

  let product;
  if (products) {
    product = products[productId]
  }

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  return (
    <>
      {
        product && (
          <div className='product-div'>
            <div className='product-left-col'>
              <ProductPhotos product={product} />
              <Reviews product={product} />
            </div>
            <div className='product-right-col'>
              <ProductInfo product={product} />
            </div>
          </div>
        )
      }
    </>
  );
}



export default ProductPage;
