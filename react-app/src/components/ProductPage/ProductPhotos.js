import PhotoPreviewBlock from './PhotoPreviewBlock';
import { useEffect, useState } from 'react';
import './ProductPage.css';

function ProductPhotos({ product, firstImage }) {
	const [selected, setSelected] = useState(null);
	let photoIds = {};
	product.images.forEach((image) =>{
		photoIds[image.id] = image.url
	});

	useEffect(() => {
		setSelected(firstImage)
	}, [firstImage])

	return (
		<div className='product-photos-div'>
			<ul className='photo-preview-ul'>
				{product.images.map((image) => {
					return (
						<li key={image.id}>
							<PhotoPreviewBlock
								image={image}
								selected={selected}
								setSelected={setSelected}
							/>
						</li>
					);
				})}
			</ul>
			<div className='photo-gallery-view'>
				<img
					className='main-gallery-image'
					src={photoIds[selected]}
					alt='main-gallery'
				></img>
			</div>
		</div>
	);
}

export default ProductPhotos;
