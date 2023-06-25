import axios from 'axios';

export const GetTickerQuote = async (TickerSymbol: string) => {
	const res = await axios.get(
		`https://finnhub.io/api/v1/quote?symbol=${TickerSymbol}&token=ce8c86iad3i1ljtnrrggce8c86iad3i1ljtnrrh0`
	);

	return res.data;
};
