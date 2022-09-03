import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {



	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">Create account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Name</label>
						<input type="text" id="name" placeholder="your name" className="input input-name" />
						<label for="email" className="label">Email</label>
						<input type="text" id="email" placeholder="user@example.com" className="input input-email" />
						<label for="password" className="label">Password</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					
				</form>
				<a className="create-text" href="#/checkout">
					<button className="create-button">
					Create
					</button>
				</a>
				
			</div>
		</div>
	);
}

export default CreateAccount;
