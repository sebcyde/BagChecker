// import { LogIn, app } from '../../Config/firebase.js';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
// import { useSelector } from 'react-redux';

const SignIn = () => {
	// const Version = useSelector((state: any) => state.VersionState);
	// const auth = getAuth(app);
	// const [UserEmail, setUserEmail] = useState('');
	// const [UserPassword, setUserPassword] = useState('');
	// const navigate = useNavigate();

	// const SetSignIn = (e: any) => {
	// 	e.preventDefault();
	// 	SignIn(auth, UserEmail, UserPassword);
	// };

	return (
		<div className="AuthPage">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Sign In</h5>
					<h6 className="card-subtitle mb-2 text-body-secondary">
						Welcome back. Sign in below.
					</h6>
					<div className="input-group input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Email
						</span>
						<input
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
						/>
					</div>
					<div className="input-group input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Password
						</span>
						<input
							type="password"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
						/>
					</div>
				</div>
				<span className="ButtonContainer">
					<button type="button" className="btn btn-secondary">
						Secondary
					</button>
					<button type="button" className="btn btn-primary">
						Primary
					</button>
				</span>
				<p>
					Don't have an account? <a>Register here</a>
				</p>
			</div>
		</div>
	);

	// return (
	// 	<div className="AuthPage">
	// 		<Box
	// 			component="form"
	// 			sx={{
	// 				'& > :not(style)': { m: 1, width: '25ch' },
	// 			}}
	// 			noValidate
	// 			autoComplete="off"
	// 			className="AuthContainer"
	// 			onSubmit={(e) => {
	// 				e.preventDefault();
	// 				SignIn(auth, UserEmail, UserPassword);
	// 			}}
	// 		>
	// 			<h2>Sign In</h2>
	// 			<TextField
	// 				id="standard-basic"
	// 				label="Email"
	// 				variant="standard"
	// 				onChange={(e) => setUserEmail(e.target.value)}
	// 			/>
	// 			<TextField
	// 				id="standard-basic"
	// 				type="password"
	// 				label="Password"
	// 				variant="standard"
	// 				onChange={(e) => setUserPassword(e.target.value)}
	// 			/>
	// 			<Button onClick={SetSignIn}>Sign In</Button>
	// 			<Link to="/signup">Create account</Link>
	// 			<p style={{ margin: '10px', textAlign: 'center' }}>
	// 				App Version: v{Version.Version}
	// 			</p>
	// 		</Box>
	// 	</div>
	// );
};

export default SignIn;
