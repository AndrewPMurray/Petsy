import './ListingForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct, editProduct, loadProducts } from '../../store/products';
import UploadPicture from './UploadPicture';

export default function ListingForm({ product, userId, setShowForm }) {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState({});
	const [title, setTitle] = useState(product?.title || '');
	const [price, setPrice] = useState(product?.price || '');
	const [detailFields, setDetailFields] = useState(0);
	const [details, setDetails] = useState({
		handmade: product?.details[0] === 'Handmade' ? true : false,
		materials: product?.details[0]?.startsWith('Materials')
			? product?.details[0]?.slice(11, product.details[1]?.length)
			: product?.details[1]?.startsWith('Materials')
			? product?.details[1]?.slice(11, product.details[1]?.length)
			: '',
	});
	const [description, setDescription] = useState(product?.description || '');
	const [quantity, setQuantity] = useState(product?.quantity || 1);
	const [productType, setProductType] = useState(product?.product_type_id || 1);
	const [petType, setPetType] = useState(product?.pet_type_id || 1);
	const [images, setImages] = useState(
		product?.images.map((image) => ({
			url: image.url,
			id: image.id,
			exists: true,
		})) || []
	);
	const [imagesToDelete, setImagesToDelete] = useState([]);
	const [imageLoading, setImageLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors({});

		const detailsArr = [];
		if (details.handmade === true) detailsArr.push('Handmade');
		if (details.materials !== '') detailsArr.push(`Materials: ${details.materials}`);
		for (const i in details) {
			if (i !== 'handmade' && i !== 'materials') detailsArr.push(details[i]);
		}

		const newProduct = await dispatch(
			createProduct({
				title,
				price: +price,
				details: JSON.stringify(detailsArr),
				description,
				quantity,
				user_id: +userId,
				product_type_id: +productType,
				pet_type_id: +petType,
			})
		);

		if (newProduct.errors) {
			setErrors(() => {
				const errors = {};
				newProduct.errors.forEach((e) => {
					const errorArr = e.split(' :');
					errors[errorArr[0]] = errorArr[1];
				});
				return errors;
			});
			return;
		}

		if (images.length) {
			setImageLoading(true);
			images.forEach(async (image, i) => {
				const formData = new FormData();
				formData.append('image', image);
				formData.append('product_id', newProduct.id);

				// aws uploads can be a bit slow—displaying
				// some sort of loading message is a good idea

				const res = await fetch('/api/images', {
					method: 'POST',
					body: formData,
				});
				if (res.ok) {
					await res.json();
					if (i === images.length - 1) {
						setImageLoading(false);
						await dispatch(loadProducts());
						setShowForm(false);
					}
				} else {
					setImageLoading(false);
					const errors = res.json();
					setErrors(() => errors);
				}
			});
		} else {
			await dispatch(loadProducts());
			setShowForm(false);
		}
	};

	const handleEdit = async (e) => {
		e.preventDefault();
		setErrors(() => {});

		const detailsArr = [];
		if (details.handmade === true) detailsArr.push('Handmade');
		if (details.materials !== '') detailsArr.push(`Materials: ${details.materials}`);
		for (const key in details) {
			if (key !== 'handmade' && key !== 'materials') detailsArr.push(details[key]);
		}

		const editedProduct = await dispatch(
			editProduct({
				id: product?.id,
				title,
				price: +price,
				details: JSON.stringify(detailsArr),
				description,
				quantity,
				user_id: +userId,
				product_type_id: +productType,
				pet_type_id: +petType,
			})
		);

		if (editedProduct.errors) {
			setErrors(() => {
				const errors = {};
				editedProduct.errors.forEach((e) => {
					const errorArr = e.split(' :');
					errors[errorArr[0]] = errorArr[1];
				});
				return errors;
			});
			return;
		}

		imagesToDelete.forEach(async (image) => {
			const formData = new FormData();
			formData.append('url', image.url);

			const res = await fetch(`/api/images/${image.id}`, {
				method: 'DELETE',
				body: formData,
			});
			if (res.ok) {
				await res.json();
			} else {
				const errors = res.json();
				setErrors(() => errors);
			}
		});

		if (errors.length) return;

		if (images.length) {
			setImageLoading(true);
			images.forEach(async (image, i) => {
				if (!image.exists) {
					const formData = new FormData();
					formData.append('image', image);
					formData.append('product_id', product?.id);

					const res = await fetch('/api/images', {
						method: 'POST',
						body: formData,
					});
					if (res.ok) {
						await res.json();
					} else {
						const errors = res.json();
						setErrors(() => errors);
					}
				}
				if (i === images.length - 1) {
					setImageLoading(false);
					await dispatch(loadProducts());
					if (!errors.length) setShowForm(false);
				}
			});
		} else {
			await dispatch(loadProducts());
			setShowForm(false);
		}
	};

	return (
		<div id='form-container'>
			<div id='picture-preview-container'>
				<UploadPicture
					images={images}
					setImages={setImages}
					imagesToDelete={imagesToDelete}
					setImagesToDelete={setImagesToDelete}
				/>
			</div>
			<form id='listing-form' onSubmit={product ? handleEdit : handleSubmit}>
				<label>
					Title
					{errors?.title && <p id='error'>{errors.title}</p>}
					<input
						type='text'
						name='title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
				<label>
					Select a Pet Type
					<select
						value={petType}
						onChange={(e) => setPetType(e.target.value)}
						name='pet_type_id'
					>
						<option value='1'>Cats</option>
						<option value='2'>Dogs</option>
						<option value='3'>Bird</option>
						<option value='4'>Reptile</option>
					</select>
				</label>
				<label>
					Select a Category
					<select
						value={productType}
						onChange={(e) => setProductType(e.target.value)}
						name='product_type_id'
					>
						<option value='1'>Food</option>
						<option value='2'>Toys</option>
						<option value='3'>Furniture</option>
						<option value='4'>Clothing</option>
						<option value='5'>Accessories</option>
						<option value='6'>Supplies</option>
					</select>
				</label>
				<label>
					Price
					{errors?.price && <p id='error'>{errors.price}</p>}
					<input
						type='number'
						value={price}
						name='price'
						onChange={(e) => setPrice(e.target.value)}
					/>
				</label>
				<label>
					Handmade
					<input
						id='handmade-checkbox'
						type='checkbox'
						value={details.handmade}
						checked={details.handmade || false}
						name='details'
						onChange={(e) => setDetails({ ...details, handmade: !details.handmade })}
					/>
				</label>
				<label>
					Materials
					<input
						type='text'
						value={details.materials || ''}
						name='details'
						onChange={(e) => setDetails({ ...details, materials: e.target.value })}
					/>
				</label>
				<label>Additional details</label>
				{Array.apply(null, { length: detailFields }).map((el, i) => (
					<input
						key={i}
						name='details'
						type='text'
						value={details[i] || ''}
						onChange={(e) => setDetails({ ...details, [i]: e.target.value })}
					/>
				))}
				<div id='add-additional-detail' onClick={() => setDetailFields(detailFields + 1)}>
					Add Additional Detail
				</div>
				<label>
					Description
					{errors?.description && <p id='error'>{errors.description}</p>}
					<textarea
						id='product-description'
						value={description}
						name='description'
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<label>
					Quantity
					{errors?.quantity && <p id='error'>{errors.quantity}</p>}
					<input
						type='number'
						value={quantity}
						name='quantity'
						onChange={(e) => setQuantity(e.target.value)}
					/>
				</label>
				<div id='submit-buttons-container'>
					<button id='product-submit-button' type='submit'>
						Submit
					</button>
					<div id='cancel-button' onClick={() => setShowForm(false)}>
						Cancel
					</div>
				</div>
			</form>
			{imageLoading && <p>Submitting item, please wait...</p>}
		</div>
	);
}
