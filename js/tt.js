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

  //----------------------------------------Задача 3
  const list = document.querySelector('.gallery')
  console.log(list)
  
  const imageEl = images.map((image) => `<li class="item">${image}</li>`).join('');
  console.log(imageEl)
  list.insertAdjacentHTML('afterend', imageEl)
  
  
  <li class="item"><img src="########" alt="#####" width="#####"/>#####</li>