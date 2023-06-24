// import { LogIn, app } from '../../Config/firebase.js';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { SignInFunction, app } from '../../Config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useSelector } from 'react-redux';

const SignIn = () => {
	// const Version = useSelector((state: any) => state.VersionState);
	const [UserPassword, setUserPassword] = useState('');
	const [UserEmail, setUserEmail] = useState('');
	const navigate = useNavigate();
	const auth = getAuth(app);
	const [user] = useAuthState(auth);

	const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserEmail(event.target.value);
	};

	const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserPassword(event.target.value);
	};

	const SignInUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		await SignInFunction(auth, UserEmail, UserPassword);
		if (user) navigate('/');
	};

	return (
		<div className="AuthPage">
			<div className="card">
				<h6 className="card-subtitle mb-2 text-body-secondary">
					Welcome back.
				</h6>
				<input
					type="text"
					className="form-control"
					placeholder="Email"
					value={UserEmail}
					onChange={changeEmail}
				/>
				<input
					type="password"
					className="form-control"
					placeholder="Password"
					value={UserPassword}
					onChange={changePassword}
				/>
				<button type="button" className="btn btn-primary" onClick={SignInUser}>
					Enter{' '}
				</button>
				<div className="BottomText">
					<p>
						Don't have an account?{' '}
						<a onClick={() => navigate('/signup')}>Register here</a>
					</p>
					<p>Version 1.0</p>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
