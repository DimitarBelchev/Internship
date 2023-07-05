// class Pizza {
//   constructor(name, ingredients) {
//     this.name = name;
//     this.ingredients = ingredients;
//   }
// }

// class PizzaRestaurant {
//   constructor() {
//     this.pizzas = [];
//     this.recognizedIngredients = [
//       "Tomato",
//       "Mozzarella",
//       "Basil",
//       "Pepperoni",
//       "Pineapple",
//       "Ham",
//       "Onions",
//     ];
//   }

//   preparePizza(name, ingredients) {
//     if (this.hasPizza(name)) {
//       throw new Error("Pizza name already exists");
//     }

//     if (ingredients.length === 0) {
//       throw new Error("Invalid ingredients");
//     }

//     for (const ingredient of ingredients) {
//       if (!this.recognizedIngredients.includes(ingredient)) {
//         throw new Error("Invalid ingredients");
//       }
//     }

//     const pizza = new Pizza(name, ingredients);
//     this.pizzas.push(pizza);
//     return pizza;
//   }

//   hasPizza(name) {
//     return this.pizzas.some(
//       (pizza) => pizza.name.toLowerCase() === name.toLowerCase().trim()
//     );
//   }

//   getPizzaCount() {
//     return this.pizzas.length;
//   }

//   addIngredient(ingredient) {
//     this.recognizedIngredients.push(ingredient);
//   }
// }

// module.exports = { basicReduce };

function basicReduce(inputArr) {
  return inputArr.reduce((acc, cur) => (acc += cur), 0);
}

function reduceWithInitialValue(inputArr, initVal) {
  return inputArr.reduce((acc, cur) => (acc += cur), initVal);
}

function findMinUsingReduce(inputArr) {
  return inputArr.reduce((a, b) => Math.min(a, b));
}
console.log(findMinUsingReduce([1, 2, 3, 4, 5]));

module.exports = { basicReduce, reduceWithInitialValue, findMinUsingReduce };
