import './PhotoPreviewBlock.css'
import {useState} from 'react'

function PhotoPreviewBlock({ image, selected, setSelected }) {

    return (
        <img onClick={() => setSelected(image.id)} className={
            image.id === selected ? 'product-preview-block-img selected-image-true' : 'product-preview-block-img selected-image-false'} src={image.url}></img>
    )
}

export default PhotoPreviewBlock