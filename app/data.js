const books = [
{
	id: "1",
	title: "Almond brown nuts",
	ratings: 5,
	reviews: "100",
	qty: "Pack of 150",	
	picture: require("./assets/images/Products/almond-brown-nuts.png"),
	cost: 25
},
{
	id: "2",
	title: "Apple",
	ratings: 1,
	reviews: "200",
	qty: "Pack of 30",	
	picture: require("./assets/images/Products/apple.png"),
	cost: 35.99
},
{
	id: "3",
	title: "Carrat",
	ratings: 4.5,
	reviews: "300",
	qty: "Pack of 35",	
	picture: require("./assets/images/Products/carrat.png"),
	cost: 25.99
},
{
	id: "4",
	title: "Cashew nuts",
	ratings: 0,
	reviews: "5",
	qty: "Pack of 98",	
	picture: require("./assets/images/Products/cashew-nuts.png"),
	cost: 45.99
},
{
	id: "5",
	title: "Cherry Fruit",
	ratings: 1,
	reviews: "50",
	qty: "Pack of 10",	
	picture: require("./assets/images/Products/cheery-fruit.png"),
	cost: 20.99
},
{
	id: "6",
	title: "Cocunut",
	ratings: 2,
	reviews: "2",
	qty: "Pack of 23",	
	picture: require("./assets/images/Products/cocunut.png"),	
	cost: 22.00
},
{
	id: "7",
	title: "Grapes",
	ratings: 5,
	reviews: "3",
	qty: "Pack of 13",	
	picture: require("./assets/images/Products/grapes.png"),
	cost: 25.99
},
{
	id: "8",
	title: "Green Apple",
	ratings: 2,
	reviews: "100",
	qty: "Pack of 15",	
	picture: require("./assets/images/Products/green-apple.png"),
	cost: 63.01
},
{
	id: "9",
	title: "Mango",
	ratings: 1,
	reviews: "5",
	qty: "Pack of 10",	
	picture: require("./assets/images/Products/mango.png"),
	cost: 95.99
},
{
	id: "10",
	title: "Orange",
	ratings: 5,
	reviews: "10",
	qty: "Pack of 8",	
	picture: require("./assets/images/Products/orange.png"),
	cost: 90.99
},
{
	id: "11",
	title: "Paprika",
	ratings: 3,
	reviews: "20",
	qty: "Pack of 6",	
	picture: require("./assets/images/Products/paprika.png"),
	cost: 77.99
},
{
	id: "12",
	title: "Pine Apple",
	ratings: 4,
	reviews: "50",
	qty: "Pack of 3",	
	picture: require("./assets/images/Products/pine-apple.png"),
	cost: 66.99
},
{
	id: "13",
	title: "Pistachio nuts",
	ratings: 2,
	reviews: "80",
	qty: "Pack of 5",	
	picture: require("./assets/images/Products/pistachio-nuts.png"),
	cost: 19.99
},
{
	id: "14",
	title: "Pomegranate",
	ratings: 4,
	reviews: "1000",
	qty: "Pack of 10",	
	picture: require("./assets/images/Products/pomegranate.png"),
	cost: 29.99
},
{
	id: "15",
	title: "Strawberry",
	ratings: 1,
	reviews: "500",
	qty: "Pack of 15",	
	picture: require("./assets/images/Products/strawberry.png"),
	cost: 19.99
},
{
	id: "16",
	title: "Tomatto",
	ratings: 5,
	reviews: "10",
	qty: "Pack of 30",	
	picture: require("./assets/images/Products/tomatto.png"),
	cost: 20.10
}
];

export const getProducts = () => {
    return books;
    
}


