import React, { useState } from 'react';
import Axios from '../../utils/Axios';
import { countries } from '../../utils/Data';
import "./styles.css"


export default function Login() {

	const [isRegister, setIsRegister] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [country, setCountry] = useState();
	const [name, setName] = useState('');

	async function login() {
		try {
			await Axios.post('/login', { email, password });
			window.location.reload();
		} catch (err) {
			alert(err.response ? err.response.data : 'Unexpected error');
		}
	}

	async function register() {
		try {
			await Axios.post('/register', { name, email, password, country });
			window.location.reload();
		} catch (err) {
			alert(err.response ? err.response.data : 'Unexpected error');
		}
	}


	return (
		<div className='login-container'>
			<div className='login-panel rounded p-4 pb-3 shadow'>
				<h1 className='text-center'>Exhaust</h1>

				<div class="imgcontainer">
					<img src={require("./avatar.png")} alt="Avatar" class="avatar"/>
				</div>


				<h2 className='text-center text-muted mb-5 fw-normal'>
					{isRegister ? 'Register' : 'Login'}
				</h2>


				{isRegister && (
					<input
						value={name}
						type='name'
						onChange={e => setName(e.target.value)}
						className='inputForm my-3'
						placeholder='Name'
					/>
				)}

				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					className='inputForm my-3'
					placeholder='Email'
				/>
				{isRegister && (
					<select 
						value={country}
						placeholder='Country'
						className='dropdown my-3'
						onChange={e => setCountry(e.target.value)}>
						<option selected>Country</option>
						{countries.map(el => (
							<option value={el.code}>{el.name}</option>
						))}
					</select>
				)}
				<input 
					value={password}
					type='password'
					onChange={e => setPassword(e.target.value)}
					className='inputForm my-3'
					placeholder='Password'
				/>
				<button className="login"
					onClick={isRegister ? register : login}
					className='login btn-dark w-100 mt-3 mb-2'>
					{isRegister ? 'Register' : 'Login'}
				</button>
				
				<button className="register" onClick={() => setIsRegister(prev => !prev)}>
					{isRegister ? 'Log in' : 'Register'}
				</button>
			</div>
		</div>
	);
}