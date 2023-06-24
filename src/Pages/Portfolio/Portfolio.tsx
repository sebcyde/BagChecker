import React, { useState } from 'react';
import NavTree from '../../Components/NavTree/NavTree';
import LoadingScreen from '../Loading/LoadingScreen';

type Props = {};

const Portfolio = (props: Props) => {
	const [Loading, setLoading] = useState<boolean>(true);

	return (
		<>
			<NavTree />
			{Loading ? (
				<LoadingScreen />
			) : (
				<>
					<div>Portfolio</div>;
				</>
			)}
		</>
	);
};

export default Portfolio;
