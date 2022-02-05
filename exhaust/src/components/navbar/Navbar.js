import React from 'react';
import { Link } from 'react-router-dom';
import Axios from '../../utils/Axios';
import {AppBar, Avatar, Typography, Toolbar, Button, ListItemIcon, Menu, Divider, Box, MenuItem, Fade, Tooltip, IconButton} from "@material-ui/core";
import "./styles.css";

export default function Navbar(props) {
	async function logout() {
		await Axios.post('/logout');
		window.location.reload();
	}


	return (

			<div className='collapse navbar-collapse navbar-content' id='navbarNav'>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Link className='nav-link' to='/'>
							Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/stats'>
							Stats
						</Link>
					</li>
					<li className='logout' onClick={logout}>
						<Link className='logout' to='/'>
							Logout
						</Link>
					</li>
				</ul>
			</div>


	);
}