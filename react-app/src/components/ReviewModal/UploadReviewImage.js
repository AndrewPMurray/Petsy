import { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'


function UploadReviewImage({ review, setUrl }) {
    const [image, setImage] = useState(null);
    const fileTypes = ['JPG', 'PNG', 'HEIC', ' JPEG', 'jpg', 'jpeg']
    // const updateImage = (e) => {
    //     const file = e.target.files[0]
    //     setImage(file)
    //     // console.log(image, 'from UPLOAD FORM')
    //     setUrl(file)
    // };

    const setFile = (file) => {
        console.log('FILE', file)
        setImage(file)
        setUrl(file)
    }

    return (
        <>
            {/* <input type='file' accept='image/*' onChange={updateImage} /> */}
            <FileUploader
                handleChange={(file) => setFile(file)}
                name='image'
                types={fileTypes}>
            </FileUploader>

            <div id='picture-preview-container'>
                <div className='picture-preview-node'>
                    <i
                        id='delete-picture'
                        className='fas fa-times'
                    ></i>
                    {/* <img
                        src={image ? URL.createObjectURL(image) : review?.url}
                        style={{ maxHeight: '100px' }}
                        alt='preview-upload'
                    /> */}
                </div>
            </div>
        </>
    )

}


export default UploadReviewImage;
