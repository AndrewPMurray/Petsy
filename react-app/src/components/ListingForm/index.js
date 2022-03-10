import './ListingForm.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct, editProduct, loadProducts } from '../../store/products';
import UploadPicture from './UploadPicture';

export default function ListingForm({ product, userId, setShowForm }) {
	const dispatch = useDispatch();
	const [title, setTitle] = useState(product?.title || '');
	const [price, setPrice] = useState(product?.price || 0);
	const [detailFields, setDetailFields] = useState(product?.details.length - 2 || 0);
	const [details, setDetails] = useState({
		handmade: product?.details[0] === 'Handmade' ? true : false,
		materials: product?.details[0].startsWith('Materials')
			? product?.details[0]?.slice(11, product.details[1]?.length)
			: product?.details[1]?.startsWith('Materials')
			? product?.details[1]?.slice(11, product.details[1]?.length)
			: '',
	});
	const [description, setDescription] = useState(product?.description || '');
	const [quantity, setQuantity] = useState(product?.quantity || 1);
	const [productType, setProductType] = useState(product?.product_type_id || 1);
	const [petType, setPetType] = useState(product?.pet_type_id || 1);
	const [images, setImages] = useState([]);
	const [imagesToDelete, setImagesToDelete] = useState([]);
	const imageInfo = product?.images.map((image) => ({
		url: image.url.includes('etsystatic') ? image.url : image.url.split('/')[3],
		id: image.id,
	}));

	useEffect(() => {
		imageInfo?.forEach(async (info) => {
			let image;
			let res;
			if (info.url.includes('etsystatic')) {
				image = {};
			} else {
				res = await fetch(`/api/images/${info.url}`);
				image = await res.blob();
			}
			image.exists = true;
			image.url = info.url;
			image.id = info.id;
			setImages((prev) => [...prev, image]);
		});
		return () => setImages([]);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

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

		images.forEach(async (image) => {
			const formData = new FormData();
			formData.append('image', image);
			formData.append('product_id', newProduct.id);

			// aws uploads can be a bit slow—displaying
			// some sort of loading message is a good idea
			// setImageLoading(true);

			const res = await fetch('/api/images', {
				method: 'POST',
				body: formData,
			});
			if (res.ok) {
				await res.json();
				// setImageLoading(false);
			} else {
				// setImageLoading(false);
				// a real app would probably use more advanced
				// error handling
				console.log('error');
			}
		});

		dispatch(loadProducts());
		setShowForm(false);
	};

	const handleEdit = async (e) => {
		e.preventDefault();

		const detailsArr = [];
		if (details.handmade === true) detailsArr.push('Handmade');
		if (details.materials !== '') detailsArr.push(`Materials: ${details.materials}`);
		for (const key in details) {
			if (key !== 'handmade' && key !== 'materials') detailsArr.push(details[key]);
		}

		await dispatch(
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

		images.forEach(async (image) => {
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
					// a real app would probably use more advanced
					// error handling
					console.log('error');
				}
			}
		});

		imagesToDelete.forEach(async (image) => {
			const formData = new FormData();
			formData.append('name', image.name);

			const res = await fetch(`/api/images/${image.id}`, {
				method: 'DELETE',
				body: formData,
			});
			if (res.ok) {
				await res.json();
			} else {
				console.log('error');
			}
		});

		dispatch(loadProducts());
		setShowForm(false);
	};

	return (
		<>
			<div id='picture-preview'>
				<UploadPicture
					images={images}
					setImages={setImages}
					imagesToDelete={imagesToDelete}
					setImagesToDelete={setImagesToDelete}
				/>
			</div>
			<form id='listingForm' onSubmit={product ? handleEdit : handleSubmit}>
				<label>
					Title
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
				{Array.apply(null, { length: detailFields }).map((el, i) => (
					<input
						key={i}
						name='details'
						type='text'
						value={details[i] || ''}
						onChange={(e) => setDetails({ ...details, [i]: e.target.value })}
					/>
				))}
				<div onClick={() => setDetailFields(detailFields + 1)}>Add Additional Detail</div>
				<label>
					Description
					<textarea
						value={description}
						name='description'
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<label>
					Quantity
					<input
						type='number'
						value={quantity}
						name='quantity'
						onChange={(e) => setQuantity(e.target.value)}
					/>
				</label>
				<button type='submit'> Submit </button>
			</form>
			<button onClick={() => setShowForm(false)}>Cancel</button>
		</>
	);
}
