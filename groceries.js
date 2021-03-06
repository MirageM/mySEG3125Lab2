	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		nutFree:true,
		lactoseFreeO: false,
		nutFreeO:false,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		nutFree:true,
		lactoseFreeO: false,
		nutFreeO:false,
		price: 3.99
	},

	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		nutFree:true,
		lactoseFreeO: false,
		nutFreeO:false,
		price: 11.99
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		nutFree:true,
		lactoseFreeO: false,
		nutFreeO:false,
		price: 2.99
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		nutFree: true,
		lactoseFreeO: false,
		nutFreeO:false,
		price: 2.99
	},

	{
		name: "yogurt",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		nutFree:true,
		price: 1.99
	},
	{
		name: "chicken burger",
		vegetarian: false,
		glutenFree: false,
		lactoseFree: true,
		nutFree:false,
		price: 3.99
	},
	
	{
		name: "bacon",
		vegetarian: false,
		glutenFree: false,
		lactoseFree: true,
		nutFree:true,
		lactoseFreeO: false,
		nutFreeO:false,
		price: 8.99
	},

	{
		name: "almond granola",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		nutFree: false,
		price: 4.99
	},

	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		nutFree:true,
		price: 1.99
	},
	{
		name: "organic milk",
		vegetarian: false,
		glutenFree: false,
		lactoseFree: false,
		nutFree:true,
		lactoseFreeO: false,
		nutFreeO:true,
		price: 1.99
	},
	{
		name: "organic bread",
		vegetarian: false,
		glutenFree: false,
		lactoseFree: false,
		nutFree:true,
		lactoseFreeO: false,
		nutFreeO:true,
		price: 1.99
	},
	{
		name: "blueberry",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		nutFree:true,
		lactoseFreeO: false,
		nutFreeO:false,
		price: 1.99
	},
	{
		name: "organic blueberry",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		nutFree:true,
		lactoseFreeO: true,
		nutFreeO:true,
		price: 1.99
	}
];
	
products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
		}
		else if((restriction == "LactoseFreeO") && (prods[i].lactoseFreeO == true)){
			product_names.push(prods[i].name);
		}
		else if((restriction == "NutFreeO") && (prods[i].nutFreeO == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}