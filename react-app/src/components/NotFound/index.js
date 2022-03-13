import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div id='not-found-container'>
			<div className='not-found-image-container'>
			<img
				src='https://i.pinimg.com/originals/15/56/73/1556733162ff7df149cb5ad2c5e560f3.gif'
				alt='confused-kitty'
				/>
			</div>
			<h2>Looks like our website got a bit confused trying to find this page</h2>
			<Link to='/'>Click here to return to Petsy</Link>
		</div>
	);
}
