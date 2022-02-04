import React from 'react';
import './App.css';
import MenuCard from './components/MenuCard';
import { dummyData } from './dummyData';


function App() {
	return (
		<div className="App">
			<h1 className='text-5xl font-bold mb-6' >Amazing Menu</h1>
			<div className='flex items-center flex-col'>
				{dummyData.map(d => <MenuCard menuItem={d} key={d.title} />)}
			</div>
		</div>
	);
}

export default App;
