import { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'


function UploadReviewImage({ review, setUrl }) {
    const [image, setImage] = useState(null);
    const fileTypes = ['JPG', 'PNG', 'HEIC', ' JPEG', 'jpg', 'jpeg']

    const setFile = (file) => {
        setImage(file)
        setUrl(file)
    }

    return (
        <>
            {/* <div id="dragDropImageDiv"> */}
            <div id="dragDropImageDiv">
                <img
                    src={image ? URL.createObjectURL(image) : review?.url}
                    alt='preview-upload'
                />
            </div>

            <div id="dragDropArea">
                <FileUploader
                    id="fileUploader"
                    handleChange={(file) => setFile(file)}
                    name='image'
                    types={fileTypes}
                // label='Upload an Image or Drop here'
                >
                    <div id="dragDropDiv">Upload or Drag and Drop</div>
                </FileUploader>
            </div>

            {/* </div> */}






        </>
    )

}


export default UploadReviewImage;
