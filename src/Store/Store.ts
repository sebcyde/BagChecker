import { configureStore } from '@reduxjs/toolkit';
import { stockSlice } from './Slices/StockSlice';

const Store = configureStore({
	reducer: {
		StockState: stockSlice.reducer,
	},
});

export type RootState = ReturnType<typeof Store.getState>;

export default Store;
