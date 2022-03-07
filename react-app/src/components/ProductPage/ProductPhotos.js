import PhotoPreviewBlock from './PhotoPreviewBlock'

function ProductPhotos({ product }) {
  console.log("HELLO?:", product)

  return (
    <>
      <div className="photo-preview-div">
        <PhotoPreviewBlock />
      </div>
      <div className="photo-gallery-view">

      </div>
    </>
  )
}


export default ProductPhotos;
