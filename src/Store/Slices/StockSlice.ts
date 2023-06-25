import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../Store';

interface iStockState {
	ticker: string;
}

const initialState: iStockState = {
	ticker: '',
};

export const stockSlice = createSlice({
	name: 'stock',

	initialState,
	reducers: {
		setCurrentStoreStock: (state, action) => {
			console.log('Store Stock Payload:', action.payload);
			state.ticker = action.payload;
			console.log('Updated Store Stock Payload:', state.ticker);
		},
	},
});

// Setter
export const { setCurrentStoreStock } = stockSlice.actions;

// Getter
export const getCurrentStoreStock = (state: RootState) =>
	state.StockState.ticker;

export default stockSlice.reducer;
