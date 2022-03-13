import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

function UploadReviewImage({ review, setUrl, url, setImageToDelete }) {
	const [image, setImage] = useState(null);
	const fileTypes = ['JPG', 'PNG', 'HEIC', ' JPEG', 'jpg', 'jpeg', 'png'];

	const setFile = (file) => {
		if (url.exists) setImageToDelete(() => url.url);
		setImage(file);
		setUrl(file);
	};

	return (
		<>
			<div id='dragDropImageDiv'>
				<img src={url.length > 0 ? review?.url : 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png'} alt='preview-upload' />
			</div>

			<div id='dragDropArea'>
				<FileUploader
					id='fileUploader'
					handleChange={(file) => setFile(file)}
					name='image'
					types={fileTypes}
				>
					<div id='dragDropDiv'>Upload or Drag and Drop</div>
				</FileUploader>
			</div>

			{/* </div> */}
		</>
	);
}

export default UploadReviewImage;
