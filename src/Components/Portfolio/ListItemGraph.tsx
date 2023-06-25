import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Props = {
	TickerSymbol: string;
};

const ListItemGraph = ({ TickerSymbol }: Props) => {
	const [Loading, setLoading] = useState<boolean>(true);
	const [Data, setData] = useState();

	const PullData = async () => {
		const res = await axios.get(
			`https://finnhub.io/api/v1/quote?symbol=${TickerSymbol}&token=ce8c86iad3i1ljtnrrggce8c86iad3i1ljtnrrh0`
		);

		// const Data = await axios.get(
		// 	`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${TickerSymbol}&apikey=E8FAQ4X1Q5P2WHPN`
		// );

		setData(res.data);
		console.log('Data::', res.data);
	};

	useEffect(() => {
		PullData().then(() => setLoading(false));
	}, []);

	return (
		<div>
			{Loading || !Data ? (
				'Loading'
			) : (
				<>
					<p>${Data.c}</p>
					<p>{Data.dp}%</p>
				</>
			)}
		</div>
	);
};

export default ListItemGraph;
