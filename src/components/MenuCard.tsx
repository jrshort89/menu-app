import React from 'react';
import { MenuItem } from '../dummyData';

interface MenuCardProps {
    menuItem: MenuItem
}

export default function MenuCard({menuItem: { title, imageSource, description, price }}: MenuCardProps) {
	return (
		<div className='hover:border-4 mb-6 w-3/4 border-2 flex flex-col lg:flex-row justify-between items-center rounded-lg'>
			<img className='max-w-md w-auto' src={imageSource} alt={title} />
			<div className='w-auto m-8 justify-center self-center'>
				<text className='font-bold' >{title}</text>
				<br/>
				<text>{description}</text>
				<br/>
				<text className='font-bold'>${price}</text>
			</div>
		</div>
	);
}