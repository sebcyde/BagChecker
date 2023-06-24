import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const NavTree = (props: Props) => {
	const navigate = useNavigate();

	return (
		<div className="NavTreeContainer">
			<ul>
				<li onClick={() => navigate('/')}>Home</li>
				<li onClick={() => navigate('/stocks')}>Stocks</li>
				<li onClick={() => navigate('/news')}>News</li>
				<li onClick={() => navigate('/people')}>People</li>
				<li onClick={() => navigate('/search')}>Search</li>
				<li onClick={() => navigate('/portfolio')}>Portfolio</li>
				<li onClick={() => navigate('/settings')}>Settings</li>
			</ul>
		</div>
	);
};

export default NavTree;
