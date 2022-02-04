export interface MenuItem {
    title: string
	description: string
	price: number
	imageSource: string
}

export const dummyData = [
	{
		title: 'East Coast Oysters on the Half Shell',
		description: `½ Dozen
         • Piece Options:  • Filet +$16 •  • Chicken +$7 • Shrimp +$12 • Gulf Crab +$12 • Seared Tuna +$18 • 1 Pc. Oyster +$2 • 1 Pc Shrimp +$3 • 1 Pc. Tostada +$5.50 • 1 Pc. Quail +$5 • 1 Pc. Poached Egg +$6SPLIT Entree +$5`,
		imageSource: 'https://popmenucloud.com/cdn-cgi/image/width=3840,height=3840,fit=scale-down,format=auto,quality=60/zhacvfry/90b5a572-bd27-4673-8dde-b6415918c0fc.jpg',
		price: 24,
	},
	{
		title: 'Shrimp Cocktail',
		description: `w/ Smoked Chile Cocktail Sauce & 
        Charred Chile Remoulade
        
         • Piece Options: • Filet +$16 • Chicken +$7 • Shrimp +$12 • Gulf Crab +$12 • Seared Tuna +$18 • 1 Pc. Oyster +$2 • 1 Pc Shrimp +$3 • 1 Pc. Tostada +$5.50 • 1 Pc. Quail +$5 • 1 Pc. Poached Egg +$6SPLIT Entree +$5`,
		imageSource: 'https://popmenucloud.com/cdn-cgi/image/width=3840,height=3840,fit=scale-down,format=auto,quality=60/zhacvfry/012ac648-74e8-4c34-992d-cd7b9682dd4b.jpg',
		price: 24,
	},
	{
		title: 'King Crab Louie',
		description: `Hearts of Palm, Chopped Egg, Ugly Tomato & Avocado •

        Dressing Choice: Lemon Vinaigrette • Walnut Vinaigrette • Oil & Vinegar • Caesar Blue Cheese Dressing • Cheddar Dressing • NO Dressing
        Salad Protein Choice: Chicken +$8 • Scallops +$16 • Seared Tuna +$20 • Shrimp +$16 •
        Crab Louie Choices: NO Avocado NO Egg NO Hearts of Palm NO Tomato`,
		imageSource: 'https://popmenucloud.com/cdn-cgi/image/width=3840,height=3840,fit=scale-down,format=auto,quality=60/zhacvfry/3f10e394-0d81-41e3-9af0-78bb54f003c7.jpg',
		price: 72,
	}
];