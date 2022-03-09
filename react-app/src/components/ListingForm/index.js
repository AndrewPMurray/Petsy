import './ListingForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../store/products';

export default function ListingForm({ product, userId, setShowForm }) {
	const dispatch = useDispatch();
	const [title, setTitle] = useState(product?.title || '');
	const [price, setPrice] = useState(product?.price || 0);
	const [detailFields, setDetailFields] = useState(product?.details.length - 2 || 0);
	const [details, setDetails] = useState({
		handmade: product?.details[0] === 'Handmade' ? true : false,
		materials: product?.details[1].slice(11, product.details[1].length) || '',
	});
	const [description, setDescription] = useState(product?.description || '');
	const [quantity, setQuantity] = useState(product?.quantity || 1);
	const [productType, setProductType] = useState(product?.product_type_id || 1);
	const [petType, setPetType] = useState(product?.pet_type_id || 1);

	const handleSubmit = (e) => {
		e.preventDefault();

		const detailsArr = [];
		if (details.handmade === true) detailsArr.push('Handmade');
		if (details.materials !== '') detailsArr.push(`Materials: ${details.materials}`);
		for (const i in details) {
			if (i !== 'handmade' && i !== 'materials') detailsArr.push(details[i]);
		}

		const newProduct = {
			title,
			price: +price,
			details: JSON.stringify(detailsArr),
			description,
			quantity,
			user_id: +userId,
			product_type_id: +productType,
			pet_type_id: +petType,
		};


		dispatch(createProduct(newProduct));
		setShowForm(false);
	};

	const handleEdit = (e) => {
		e.preventDefault();

		const detailsArr = [];
		if (details.handmade === true) detailsArr.push('Handmade');
		if (details.materials !== '') detailsArr.push(`Materials: ${details.materials}`);
		for (const key in details) {
			if (key !== 'handmade' && key !== 'materials') detailsArr.push(details[key]);
		}

		const editedProduct = {
			id: product?.id,
			title,
			price: +price,
			details: JSON.stringify(detailsArr),
			description,
			quantity,
			user_id: +userId,
			product_type_id: +productType,
			pet_type_id: +petType,
		};

		console.log(editedProduct);
	};

	const uploadImage = (e) => {
		console.log(e);
	};

	return (
		<>
			<form id='listingForm' onSubmit={product ? handleEdit : handleSubmit}>
				<label>
					Images
					<input type='file' onChange={uploadImage}></input>
				</label>
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
