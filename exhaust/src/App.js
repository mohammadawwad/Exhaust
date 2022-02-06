import './App.scss';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import LoginPage from './components/register/LoginPage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './components/home/HomePage';
import ContactUs from './components/contact/ContactUs';
import AboutUsPage from './components/about/AboutUsPage';
import MapsPage from './components/maps/MapsPage';
import { useEffect, useState } from 'react';
import Axios from './utils/Axios';
import Dashboard from './components/dashboard/dashboard';

function App() {
	const [isAuthed, setIsAuthed] = useState('loading');

	useEffect(() => {
		(async function () {
			const { data } = await Axios.get('/status');
			console.log(data);
			setIsAuthed(data.isAuthed);
		})();
	}, []);

	return isAuthed === 'loading' ? (
		<div className='total-center'>
			<div class='spinner-border' role='status'>
				<span class='visually-hidden'>Loading...</span>
			</div>
		</div>
	) : !isAuthed ? (
		<LoginPage />
	) : (
		<div>
			<Router>
				<Navbar />
				

				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/maps' exact component={MapsPage} />
					<Route path='/stats' exact component={Dashboard} />
					<Route path='/aboutus' exact component={AboutUsPage} />
					<Route path='/contactus' exact component={ContactUs} />
				</Switch>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
