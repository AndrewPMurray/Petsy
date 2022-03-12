import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/Navbar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import PetTypePage from './components/PetTypePage';
import ProductPage from './components/ProductPage';
import SearchResults from './components/SearchResults';
import ProductTypePage from './components/ProductTypePage';
import ManageListings from './components/ManageListings';
import Purchases from './components/PurchasesPage';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
			setLoaded(true);
		})();
	}, [dispatch]);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<ProtectedRoute path='/users' exact={true}>
					<UsersList />
				</ProtectedRoute>
				<ProtectedRoute path='/users/:userId' exact={true}>
					<User />
				</ProtectedRoute>
				<Route path='/' exact={true}>
					<HomePage />
				</Route>
				<Route path='/pets/:petTypeId' exact={true}>
					<PetTypePage />
				</Route>
				<Route path='/products/:productId' exact={true}>
					<ProductPage />
				</Route>
				<Route path='/search/:searchInput'>
					<SearchResults />
				</Route>
				<Route path='/pets/:petTypeId/:productTypeId'>
					<ProductTypePage />
				</Route>
				<Route path='/manage-listings'>
					<ManageListings />
				</Route>
				<Route path='/purchases'>
					<Purchases />
				</Route>
				<Route path='/cart'>
					<Cart />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
