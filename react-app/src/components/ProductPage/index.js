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
  let firstImage;

  if (products) {
    product = products[productId]
    firstImage = product?.images[0].id
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
              <ProductPhotos firstImage={firstImage} product={product} />
              <Reviews product={product} products={products} />

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
