const fn1 = (a, b, c)  => console.log(a,b,c)

const arr = [1,2]
//spread operator
// itera sobre el arreglo? solo desgloza las parametros de la funcion
fn(...arr)

const arr1 = [3,4,5]
//Concatenacion de arreglos
const arr2 = [...arr,...arr1,6,7]
//Cuando se modifica el arreglo arr no se modifica
// con la copia de arreglo con spread operator
console.log(arr2);

//Spread operator objetos

const obj1 = { a:1, b:2}
const obj2 = { b:5, c: 'Chanchito Feliz'}

const obj3 = {...obj1 }
obj1.a = 10
console.log(obj1,obj3);

//Se copian de izquierda a derecha
// si se tienen una misma llave la reemplza en el primer objeto.
// Se reemplaazan los objetos de derecha a izquierda.
const obj4 = { ...obj1,...obj2}

console.log(obj4);

