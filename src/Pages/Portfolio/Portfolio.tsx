import { useEffect, useState } from 'react';
import NavTree from '../../Components/NavTree/NavTree';
import LoadingScreen from '../Loading/LoadingScreen';
import { GetUserLists } from '../../Functions/Stocks/GetUserLists';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Config/firebase';
import { DocumentData } from 'firebase/firestore/lite';
import ListItemGraph from '../../Components/Portfolio/ListItemGraph';
import { GetTickerQuote } from '../../Functions/Stocks/GetTickerQuote';

const Portfolio = () => {
	const [UserLists, setUserLists] = useState<DocumentData | undefined>();
	const [CurrentItem, setCurrentItem] = useState<string>('');
	const [CurrentListStockItems, setCurrentListStockItems] =
		useState<JSX.Element[]>();
	const [Loading, setLoading] = useState<boolean>(true);
	const [user, loading] = useAuthState(auth);
	const [ErrorMessage, setErrorMessage] = useState<string>('');

	const PullData = async () => {
		const AllLists = await GetUserLists(user!.uid);
		setCurrentItem(Object.keys(AllLists!)[0]);
		setUserLists(AllLists);
	};

	const UpdateStockListItems = async () => {
		setLoading(true);
		setErrorMessage('');
		const allStockListItems: JSX.Element[] = [];
		try {
			for (const listItem of UserLists![CurrentItem]) {
				const data = await GetTickerQuote(listItem);
				allStockListItems.push(
					<ListItemGraph TickerSymbol={listItem} StockData={data} />
				);
				setCurrentListStockItems(allStockListItems);
			}
		} catch (error: any) {
			console.log(error.response.data.error);
			setErrorMessage(error.response.data.error);
		}
		setLoading(false);
	};

	useEffect(() => {
		PullData().then(() => setLoading(false));
	}, []);

	useEffect(() => {
		UpdateStockListItems();
	}, [CurrentItem]);

	return (
		<>
			<NavTree />
			{Loading || loading ? (
				<LoadingScreen />
			) : (
				<div className="PortfolioContainer">
					{ErrorMessage ? <p className="LimitError">{ErrorMessage}</p> : ''}
					<div className="SectionsContainer">
						<div className="LeftSection">
							{Object.keys(UserLists!).map((List: string, index: number) => {
								return (
									<div
										className={`List ${CurrentItem == List ? 'active' : ''}`}
										onClick={() => setCurrentItem(List)}
										key={`${List}${index}`}
									>
										{List}
									</div>
								);
							})}
						</div>
						<div className="RightSection">{CurrentListStockItems} </div>
					</div>
				</div>
			)}
		</>
	);
};

export default Portfolio;
