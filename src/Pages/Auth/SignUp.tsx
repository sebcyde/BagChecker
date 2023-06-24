import { SignUpFunction, app } from '../../Config/firebase';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
// import { useSelector } from 'react-redux';

const SignUp = () => {
	// const Version = useSelector((state: any) => state.VersionState);
	const [UserPassword, setUserPassword] = useState('');
	const [UserEmail, setUserEmail] = useState('');
	const [UserName, setUserName] = useState('');
	const navigate = useNavigate();
	const auth = getAuth(app);

	const changeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(event.target.value);
	};

	const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserEmail(event.target.value);
	};

	const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserPassword(event.target.value);
	};

	const SignUpUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		await SignUpFunction(auth, UserEmail, UserPassword, UserName);
	};

	return (
		<div className="AuthPage">
			<div className="card">
				<h6 className="card-subtitle mb-2 text-body-secondary">
					Join the club.
				</h6>
				<input
					type="text"
					className="form-control"
					placeholder="Username"
					value={UserName}
					onChange={changeUsername}
				/>
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
				<button type="button" className="btn btn-primary" onClick={SignUpUser}>
					Register
				</button>
				<div className="BottomText">
					<p>
						Already have an account?{' '}
						<a onClick={() => navigate('/')}>Sign In here</a>
					</p>
					<p>Version 1.0</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
