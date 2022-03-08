import PhotoPreviewBlock from './PhotoPreviewBlock'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './ProductPage.css'

function ProductPhotos({ product }) {
  const [ selected, setSelected ] = useState(product.images[0].id)
  let photoIds = {};
  product.images.map((image) => photoIds[image.id] = image.url)

  return (
    <div className="product-photos-div">
      <ul className="photo-preview-ul">
        {product.images.map((image) => {
        return <li><PhotoPreviewBlock image={image} selected={selected} setSelected={setSelected} /></li>
        })}
      </ul>
      <div className="photo-gallery-view">
        <img className="main-gallery-image" src={photoIds[selected]}>
        </img>
      </div>
    </div>
  )
}


export default ProductPhotos;
