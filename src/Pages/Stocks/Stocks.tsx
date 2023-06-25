import NavTree from '../../Components/NavTree/NavTree';
import { RootState } from '../../Store/Store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { GetTickerQuote } from '../../Functions/Stocks/GetTickerQuote';
import { GetCompanyLogo } from '../../Functions/Stocks/GetCompanyLogo';
import LoadingScreen from '../Loading/LoadingScreen';
import { GetCompanyMetrics } from '../../Functions/Stocks/GetCompanyMetrics';

type Props = {};

const Stocks = (props: Props) => {
	const [Loading, setLoading] = useState<boolean>(true);
	const [StockData, setStockData] = useState<any>();

	const CurrentStockFromStore = useSelector(
		(state: RootState) => state.StockState.ticker
	);

	const PullData = async (Ticker: string) => {
		const BaseStockRes = await GetTickerQuote(Ticker);
		const BaseLogoRes = await GetCompanyLogo(Ticker);
		const BaseMetrics = await GetCompanyMetrics(Ticker);

		setStockData({
			TickerData: BaseStockRes,
			LogoData: BaseLogoRes,
			Metrics: BaseMetrics,
		});

		console.log('Base Data:', BaseStockRes);
		console.log('Base Logo Data:', BaseLogoRes);
	};

	useEffect(() => {
		console.log('Current Stock From Store', CurrentStockFromStore);
		if (CurrentStockFromStore) {
			PullData(CurrentStockFromStore).then(() => setLoading(false));
		}
	}, [CurrentStockFromStore]);

	return (
		<>
			<NavTree />
			{Loading ||
			!StockData.TickerData ||
			!StockData.LogoData ||
			!StockData.Metrics ? (
				<LoadingScreen />
			) : (
				<div className="StocksPageContainer">
					<div className="StockDataParentContainer">
						<span className="ToolbarParentContainer">
							<img src={StockData.LogoData.logo} className="Logo" />
							<h1 className="TickerName">
								{StockData.LogoData.ticker} - {StockData.LogoData.name}
							</h1>
						</span>

						<div className="DataColumnContainer">
							<div className="StockColumn">
								<span>
									<p>Current Price:</p>
									<p>${StockData.TickerData.c.toFixed(2)}</p>
								</span>
								<span>
									<p>52 Week High:</p>
									<p>${StockData.Metrics.metric['52WeekHigh'].toFixed(2)}</p>
								</span>
								<span>
									<p>52 Week Low: </p>
									<p>${StockData.Metrics.metric['52WeekLow'].toFixed(2)}</p>
								</span>
								<span>
									<p>Industry:</p>
									<p>{StockData.LogoData.finnhubIndustry}</p>
								</span>
								<span>
									<p>Exchange:</p>
									<p> {StockData.LogoData.exchange.split(' ')[0]}</p>
								</span>
							</div>
							<div className="StockColumn">
								<span>
									<p>IPO: </p>
									<p>{StockData.LogoData.ipo}</p>
								</span>
								<span>
									<p>Payout Ratio:</p>
									<p>{StockData.Metrics.metric.payoutRatioAnnual}%</p>
								</span>
								<span>
									<p>Payout Ratio TTM: </p>
									<p> {StockData.Metrics.metric.payoutRatioTTM}%</p>
								</span>
								<span>
									<p>Shares Outstanding:</p>
									<p> {StockData.LogoData.shareOutstanding}</p>
								</span>
								<span>
									<p>Market Cap:</p>
									<p> {StockData.LogoData.marketCapitalization}</p>
								</span>
							</div>
							<div className="StockColumn">
								<span>
									<p>P/E Ratio:</p>
									<p> {StockData.Metrics.metric.peAnnual.toFixed(2)}</p>
								</span>
								<span>
									<p>Dividend Yield: </p>
									<p>
										{StockData.Metrics.metric.dividendYieldIndicatedAnnual?.toFixed(
											2
										)}
										%
									</p>
								</span>
								<span>
									<p>Dividend Growth Rate 5Y:</p>
									<p>
										{StockData.Metrics.metric.dividendGrowthRate5Y?.toFixed(2)}%
									</p>
								</span>
								<span>
									<p>Dividend Per Share:</p>
									<p>
										{' '}
										{StockData.Metrics.metric.dividendPerShareAnnual?.toFixed(
											2
										)}
									</p>
								</span>
								<span>
									<p>S&P Comparison YTD:</p>
									<p>{StockData.Metrics.metric['priceRelativeToS&P500Ytd']}</p>
								</span>
							</div>
						</div>
						<p className="Website">{StockData.LogoData.weburl}</p>
					</div>
					<div className="GraphParentContainer">graphs go here</div>
				</div>
			)}
		</>
	);
};

export default Stocks;
