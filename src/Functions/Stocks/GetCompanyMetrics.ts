import axios from 'axios';

export const GetCompanyMetrics = async (Ticker: string) => {
	const Res = await axios.get(
		`https://finnhub.io/api/v1/stock/metric?symbol=${Ticker}&metric=all&token=ce8c86iad3i1ljtnrrggce8c86iad3i1ljtnrrh0`
	);
	console.log('Company Metrics:', Res.data);
	return Res.data;
};
