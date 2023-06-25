import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Store/Store.ts';
import App from './App.tsx';
import './Styles/All.scss';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={Store}>
			<App />
		</Provider>
	</React.StrictMode>
);

postMessage({ payload: 'removeLoading' }, '*');
