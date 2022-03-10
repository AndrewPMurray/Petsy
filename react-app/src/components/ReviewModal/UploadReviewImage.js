import { useState } from 'react'

function UploadReviewImage({ review, setUrl }) {
    const [image, setImage] = useState('');

    const updateImage = (e) => {
        const file = e.target.files[0]
        setImage(file)
        // console.log(image, 'from UPLOAD FORM')
        setUrl(file)
    };

    return (
        <>
            <input type='file' accept='image/*' onChange={updateImage} />

            <div id='picture-preview-container'>
                <div className='picture-preview-node'>
                    <i
                        id='delete-picture'
                        className='fas fa-times'
                    ></i>
                    <img
                        src={image ? URL.createObjectURL(image) : review?.url}
                        style={{ maxHeight: '100px' }}
                        alt='preview-upload'
                    />
                </div>
            </div>
        </>
    )

}


export default UploadReviewImage;
