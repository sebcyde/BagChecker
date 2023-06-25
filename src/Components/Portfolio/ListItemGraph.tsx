import { useDispatch } from 'react-redux';
import { parsePercentages } from '../../Functions/Stocks/ParsePercentages';
import { setCurrentStoreStock } from '../../Store/Slices/StockSlice';
import { FHStockQuoteType } from '../../Types/Stocks/Finhhub';

type Props = {
	TickerSymbol: string;
	StockData: FHStockQuoteType;
};

const ListItemGraph = ({ TickerSymbol, StockData }: Props) => {
	const dispatch = useDispatch();

	const SetStoreStock = (Ticker: string) => {
		dispatch(setCurrentStoreStock(Ticker));
	};

	return (
		<div className="ListItem" onClick={() => SetStoreStock(TickerSymbol)}>
			<p>{TickerSymbol}</p>
			<span>
				<p>${StockData.c}</p>
				<p className={`${StockData.dp > 0 ? 'green' : 'red'}`}>
					{parsePercentages(StockData.dp)}
				</p>
			</span>
		</div>
	);
};

export default ListItemGraph;
