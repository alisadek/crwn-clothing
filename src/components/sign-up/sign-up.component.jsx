import React, { Component, useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { displayName, email, password, confirmPassword } = userCredentials;
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password,
			);

			await createUserProfileDocument(user, { displayName });

			setUserCredentials({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.error(error);
		}
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit} className='sign-up-form'>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label='Display Name'
					required
				></FormInput>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				></FormInput>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required
				></FormInput>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
					required
				></FormInput>
				<CustomButton type='submit'> SIgn Up</CustomButton>
			</form>
		</div>
	);
};
export default SignUp;
