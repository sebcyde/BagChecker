import axios from 'axios';

export const GetCompanyLogo = async (Ticker: string) => {
	const Res = await axios.get(
		`https://finnhub.io/api/v1/stock/profile2?symbol=${Ticker}&token=ce8c86iad3i1ljtnrrggce8c86iad3i1ljtnrrh0`
	);

	console.log('Get Company Logo - Data:', Res.data);
	return Res.data;
};
