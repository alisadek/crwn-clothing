import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = userCredentials;
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					value={email}
					handleChange={handleChange}
					required
					label='Email'
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					handleChange={handleChange}
					required
					label='Password'
				/>

				<div className='buttons'>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton
						type='button'
						onClick={signInWithGoogle}
						isGoogleSignIn
					>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
