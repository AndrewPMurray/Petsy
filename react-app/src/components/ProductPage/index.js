import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadProducts } from '../../store/products';
import ProductPhotos from './ProductPhotos';



function ProductPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector(state => state?.products)
  const product = products?.productId

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  return (
    <>
      {
        product.length && (
          <div className='product-div'>
            <ProductPhotos />
          </div>
        )
      }
    </>
  );
}



export default ProductPage;
