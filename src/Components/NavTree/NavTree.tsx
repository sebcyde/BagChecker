import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentStoreStock } from '../../Store/Slices/StockSlice';

type Props = {};

const NavTree = (props: Props) => {
	const [CurrentPage, setCurrentPage] = useState<string>('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	const ResetStoreCurrentStock = () => {
		dispatch(setCurrentStoreStock(''));
		navigate('/stocks');
	};

	useEffect(() => {
		setCurrentPage(location.pathname);
	}, [location]);

	return (
		<div className="NavTreeContainer">
			<ul>
				<li
					className={CurrentPage == '/' ? 'active' : ''}
					onClick={() => navigate('/')}
				>
					Home
				</li>
				<li
					className={CurrentPage == '/stocks' ? 'active' : ''}
					onClick={ResetStoreCurrentStock}
				>
					Stocks
				</li>
				<li
					className={CurrentPage == '/news' ? 'active' : ''}
					onClick={() => navigate('/news')}
				>
					News
				</li>
				<li
					className={CurrentPage == '/people' ? 'active' : ''}
					onClick={() => navigate('/people')}
				>
					People
				</li>
				<li
					className={CurrentPage == '/search' ? 'active' : ''}
					onClick={() => navigate('/search')}
				>
					Search
				</li>
				<li
					className={CurrentPage == '/portfolio' ? 'active' : ''}
					onClick={() => navigate('/portfolio')}
				>
					Portfolio
				</li>
				<li
					className={CurrentPage == '/settings' ? 'active' : ''}
					onClick={() => navigate('/settings')}
				>
					Settings
				</li>
			</ul>
		</div>
	);
};

export default NavTree;
