import './ListingForm.css';
import { useState } from 'react';

export default function ListingForm({ product }) {
	const [title, setTitle] = useState(product?.title || '');

	return <h2>listing form!</h2>;
}
