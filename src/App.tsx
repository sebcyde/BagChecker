import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoadingScreen from './Pages/Loading/LoadingScreen';
import { useAuthState } from 'react-firebase-hooks/auth';
import Portfolio from './Pages/Portfolio/Portfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import Settings from './Pages/Settings/Settings';
import { auth } from './Config/firebase.js';
import Stocks from './Pages/Stocks/Stocks';
import Search from './Pages/Search/Search';
import People from './Pages/People/People';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import News from './Pages/News/News';

function App() {
	const [Loading, setLoading] = useState<boolean>(true);
	const [user, loading] = useAuthState(auth);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		if (user) {
			window.location.hash = '/';
		}
	}, [user]);

	return Loading || loading ? (
		<LoadingScreen />
	) : (
		<HashRouter>
			<Routes>
				{user ? (
					<>
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/people" element={<People />} />
						<Route path="/search" element={<Search />} />
						<Route path="/stocks" element={<Stocks />} />
						<Route path="/" element={<Dashboard />} />
						<Route path="/news" element={<News />} />
					</>
				) : (
					<>
						<Route path="signup" element={<SignUp />} />
						<Route path="/" element={<SignIn />} />
					</>
				)}
			</Routes>
		</HashRouter>
	);
}

export default App;
