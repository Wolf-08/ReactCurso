//rest operator como argumentos de una funcion
//rest operator como argumento solo puede ir al final
const rest = (a,...argumentos) => {
  console.log(a);
  console.log(argumentos);

}

//rest(1,2,3)

const obj = {
  a:1,
  b:2,
  c:3,
  d:4,
}

//Object destructuring

const { a, b,...restObj} = obj;
console.log(a,b, restObj);