import React, { useState } from 'react';
import './App.css';
import MenuCard from './components/MenuCard';
import MenuItemForm from './components/MenuItemForm';
import { dummyData } from './dummyData';


function App() {
	const [menuItems, setMenuItems] = useState(dummyData);

	return (
		<div className="App">
			<h1 className='text-5xl font-bold mb-6' >Amazing Menu</h1>
			<MenuItemForm setMenuItems={setMenuItems} />
			<div className='flex items-center flex-col'>
				{menuItems.map(d => <MenuCard menuItem={d} key={d.title} />)}
			</div>
		</div>
	);
}

export default App;
