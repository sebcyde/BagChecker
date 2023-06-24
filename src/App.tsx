import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoadingScreen from './Pages/Loading/LoadingScreen';
import Portfolio from './Pages/Portfolio/Portfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import Settings from './Pages/Settings/Settings';
import Stocks from './Pages/Stocks/Stocks';
import Search from './Pages/Search/Search';
import People from './Pages/People/People';
import News from './Pages/News/News';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';

function App() {
	const [isLoggedIn, setisLoggedIn] = useState<boolean>(true);
	const [Loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return Loading ? (
		<LoadingScreen />
	) : (
		<HashRouter>
			<Routes>
				{isLoggedIn ? (
					<>
						<Route path="/" element={<Dashboard />} />
						<Route path="/loading" element={<LoadingScreen />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/people" element={<People />} />
						<Route path="/news" element={<News />} />
						<Route path="/search" element={<Search />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/stocks" element={<Stocks />} />
					</>
				) : (
					<>
						<Route path="/" element={<SignIn />} />
						<Route path="/signup" element={<SignUp />} />
					</>
				)}
			</Routes>
		</HashRouter>
	);
}

export default App;
