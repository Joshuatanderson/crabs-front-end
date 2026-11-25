import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './components/Data';

function App() {
	return (
		<div className="App">
			<div className="header">
				<h1 className="h1">Carcinization is everywhere!</h1>
			</div>
			<Data />
		</div>
	);
}

export default App;
