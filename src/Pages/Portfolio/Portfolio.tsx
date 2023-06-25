import React, { useEffect, useState } from 'react';
import NavTree from '../../Components/NavTree/NavTree';
import LoadingScreen from '../Loading/LoadingScreen';
import { GetUserLists } from '../../Functions/Stocks/GetUserLists';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Config/firebase';
import { DocumentData } from 'firebase/firestore/lite';
import ListItemGraph from '../../Components/Portfolio/ListItemGraph';

type Props = {};

const Portfolio = (props: Props) => {
	const [UserLists, setUserLists] = useState<DocumentData | undefined>();
	const [CurrentItem, setCurrentItem] = useState<string>('');
	const [Loading, setLoading] = useState<boolean>(true);
	const [user, loading] = useAuthState(auth);

	const PullData = async () => {
		const AllLists = await GetUserLists(user!.uid);
		setCurrentItem(Object.keys(AllLists!)[0]);
		setUserLists(AllLists);
	};

	useEffect(() => {
		PullData().then(() => setLoading(false));
	}, []);

	return (
		<>
			<NavTree />
			{Loading || loading ? (
				<LoadingScreen />
			) : (
				<div className="PortfolioContainer">
					<div>Portfolio</div>
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
						<div className="RightSection">
							{UserLists![CurrentItem].map((ListItem: string) => {
								console.log(ListItem);
								return (
									<div className="ListItem">
										<p>{ListItem}</p>
										<ListItemGraph TickerSymbol={ListItem} />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Portfolio;
