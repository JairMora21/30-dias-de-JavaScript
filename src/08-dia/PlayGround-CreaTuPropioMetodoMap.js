

function myMap(array, func) {
    // Creamos el array que retornaremos
    // Inicialmente está vacío 
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
      // Luego iteramos por cada elemento del array
      const element = array[i];
      console.log(array[i]);
  
      // Y lo vamos pasando al array vacío después de ejecutar 
      // la función sobre cada elemento del array
      result.push(func(element));
  
      // Es importante recalcar que en ningún momento modificamos el array original 
    }
  
    // Al final lo retornamos
    return result;
  }

myMap([1, 2, 3, 4], (num) => num * 2);

myMap(
  [
    { name: "michi", age: 2 },
    { name: "firulais", age: 6 },
  ],
  (pet) => pet.name
);
