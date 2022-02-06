const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
  
  const list = document.querySelector("#ingredients")
                      console.log(list);
  
 
  const markup = ingredients
    .map((ingredient) => `<li class="item">${ingredient}</li>`).join("");
                      console.log(markup)
  list.insertAdjacentHTML("afterend",markup);
  
  console.log(markup)

//   const ingredients = [
//     "Potatoes",
//     "Mushrooms",
//     "Garlic",
//     "Tomatos",
//     "Herbs",
//     "Condiments",
//   ];
  
//   Напиши скрипт, который для каждого элемента массива ingredients:
  
//       Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//       Добавит название ингредиента как его текстовое содержимое.
//       Добавит элементу класс item.
//       После чего вставит все <li> за одну операцию в список ul.ingredients.
  
//   Задание 3

//   const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// ____________________________________________________

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const list = document.querySelector("#ingredients")
//                     console.log(list);


// const textEl = ingredients[0];
// console.log(textEl)


// const liEl = document.createElement('li');
// liEl.textContent = textEl;

// console.log(liEl)





// Напиши скрипт, который для каждого элемента массива ingredients:

//     Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//     Добавит название ингредиента как его текстовое содержимое.
//     Добавит элементу класс item.
//     После чего вставит все <li> за одну операцию в список ul.ingredients.