import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

type Props = {};

const NavTree = (props: Props) => {
	const [CurrentPage, setCurrentPage] = useState<string>('');
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		setCurrentPage(location.pathname);
	}, [location]);

	return (
		<div className="NavTreeContainer">
			<ul>
				<li
					className={
						location.pathname == '/' || location.pathname == '/#/'
							? 'active'
							: ''
					}
					onClick={() => navigate('/')}
				>
					Home
				</li>
				<li
					className={location.pathname == '/stocks' ? 'active' : ''}
					onClick={() => navigate('/stocks')}
				>
					Stocks
				</li>
				<li
					className={location.pathname == '/news' ? 'active' : ''}
					onClick={() => navigate('/news')}
				>
					News
				</li>
				<li
					className={location.pathname == '/people' ? 'active' : ''}
					onClick={() => navigate('/people')}
				>
					People
				</li>
				<li
					className={location.pathname == '/search' ? 'active' : ''}
					onClick={() => navigate('/search')}
				>
					Search
				</li>
				<li
					className={location.pathname == '/portfolio' ? 'active' : ''}
					onClick={() => navigate('/portfolio')}
				>
					Portfolio
				</li>
				<li
					className={location.pathname == '/settings' ? 'active' : ''}
					onClick={() => navigate('/settings')}
				>
					Settings
				</li>
			</ul>
		</div>
	);
};

export default NavTree;
