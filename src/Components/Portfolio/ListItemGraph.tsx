import { parsePercentages } from '../../Functions/Stocks/ParsePercentages';
import { FHStockQuoteType } from '../../Types/Stocks/Finhhub';

type Props = {
	TickerSymbol: string;
	StockData: FHStockQuoteType;
};

const ListItemGraph = ({ TickerSymbol, StockData }: Props) => {
	return (
		<div className="ListItem">
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
