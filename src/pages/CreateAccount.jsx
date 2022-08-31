import React, {useRef} from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			name: formData.get('name'),
			username: formData.get('email'),
			password: formData.get('password')

		}
		console.log(data);
	}


	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form" ref={form}>
					<div>
						<label for="name" className="label">Name</label>
						<input type="text" id="name" placeholder="Teff" className="input input-name" />
						<label for="email" className="label">Email</label>
						<input type="text" id="email" placeholder="platzi@example.com" className="input input-email" />
						<label for="password" className="label">Password</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					<input type="submit" onSubmit={handleSubmit} value="Create" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;
