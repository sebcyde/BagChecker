export const CreateList = async (ListName: string, TickerList?: string[]) => {
	console.log(`Creating ${ListName} with:`);
	TickerList ? TickerList.forEach((Ticker) => console.log(Ticker)) : '';
};

export const DeleteList = async (ListName: string) => {
	console.log(`Deleting ${ListName}`);
};
