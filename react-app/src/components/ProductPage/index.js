import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadProducts } from '../../store/products';
import ProductPhotos from './ProductPhotos';



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

  console.log(product)
  return (
    <>
      {
        product?.length && (
          <div className='product-div'>
            <ProductPhotos product={product} />
          </div>
        )
      }
    </>
  );
}



export default ProductPage;
