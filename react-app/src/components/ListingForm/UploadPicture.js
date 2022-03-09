import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import productsReducer from '../../store/products';
import './ListingForm.css';

const UploadPicture = ({ images, setImages, imagesToDelete, setImagesToDelete }) => {
	const history = useHistory(); // so that we can redirect after the image upload is successful
	const [imageLoading, setImageLoading] = useState(false);

	const updateImage = (e) => {
		const file = e.target.files[0];
		setImages((prev) => [...prev, file]);
	};

	const removePhoto = (i) => {
		const file = images[i];
		if (file.exists && !imagesToDelete.includes(file))
			setImagesToDelete((prev) => [...prev, file]);
		setImages(images.filter((image) => image !== file));
	};

	return (
		<>
			<input type='file' accept='image/*' onChange={updateImage} />
			<div id='picture-preview-container'>
				{images.map((image, i) => (
					<div key={`picture-preview-${i}`} className='picture-preview-node'>
						<i
							key={`delete-picture${i}`}
							id='delete-picture'
							className='fas fa-times'
							onClick={() => removePhoto(i)}
						></i>
						<img
							key={i}
							src={URL.createObjectURL(image)}
							style={{ maxWidth: '300px' }}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default UploadPicture;
