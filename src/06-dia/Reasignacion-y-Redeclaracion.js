/* 
En JavaScript, la reasignación y la redeclaración son dos conceptos diferentes relacionados con las variables.

Además, es importante mencionar que las variables declaradas con la palabra clave “const” no pueden ser reasignadas

Reasignación se refiere al proceso de darle un nuevo valor a una variable existente. Por ejemplo:
En este ejemplo, la variable “numero” se ha reasignado con un nuevo valor de 10. Es importante 
notar solo su valor.
*/
let numero = 5;
numero = 10;

/* 
redeclaración se refiere al proceso de crear una nueva variable con el mismo nombre de una variable existente. Por ejemplo:
*/

let numero1 = 5;
//let numero1 = 10;

// Uncaught SyntaxError: redeclaration of let numero