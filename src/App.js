import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import Blocks from './blocks/latestBlocks';
import BlockDetail from './blocks/blockDetail';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
	const store = configureStore();
	return (
		<Provider store={store}>
			<div className="app">
				<header>
					<div className="app-header">LATEST BLOCKS</div>
				</header>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Navigate to="/blocks" />} />
						<Route path="/blocks" element={<Blocks />} />
						<Route path="/blocks/:id" element={<BlockDetail />} />
					</Routes>
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
