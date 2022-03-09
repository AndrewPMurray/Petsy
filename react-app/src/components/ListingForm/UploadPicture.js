import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import productsReducer from '../../store/products';
import './ListingForm.css';

const UploadPicture = ({ images, setImages }) => {
	const history = useHistory(); // so that we can redirect after the image upload is successful
	const [imageLoading, setImageLoading] = useState(false);

	const updateImage = (e) => {
		const file = e.target.files[0];
		setImages([...images, file]);
	};

	return (
		<>
			<input type='file' accept='image/*' onChange={updateImage} />
			<div id='picture-preview-container'>
				{images.map((image, i) => (
					<img key={i} src={URL.createObjectURL(image)} style={{ maxWidth: '300px' }} />
				))}
			</div>
		</>
	);
};

export default UploadPicture;
