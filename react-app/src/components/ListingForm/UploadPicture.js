import { FileUploader } from 'react-drag-drop-files';
import './ListingForm.css';

const UploadPicture = ({ images, setImages, imagesToDelete, setImagesToDelete }) => {
	const fileTypes = ['JPG', 'PNG', 'HEIC', ' JPEG', 'jpg', 'jpeg'];

	const removePhoto = (i) => {
		const file = images[i];
		if (file.exists && !imagesToDelete.includes(file)) {
			setImagesToDelete((prev) => [...prev, file]);
		}
		setImages(images.filter((image) => image !== file));
	};

	return (
		<>
			<div id='picture-preview'>
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
							src={image?.url ? image.url : URL.createObjectURL(image)}
							style={{ maxHeight: '150px' }}
							alt='preview-upload'
						/>
					</div>
				))}
			</div>
			<div id='productFileUploader'>
				<FileUploader
					handleChange={(file) => setImages((prev) => [...prev, file])}
					name='image'
					types={fileTypes}
				/>
			</div>
		</>
	);
};

export default UploadPicture;
