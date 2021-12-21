const Rectangulo = class R {}
console.log(Rectangulo);
const r = new Rectangulo()
console.log(r)

// Hoisting
//Variables definidad con var
//Funciones definidas con Function
// Y las lleva al comienzo del archivo
// Se pueden mandar a llamar antes de declararlas >.<

//Las clases con class no tienen Hoisting
class Dog {
  propiedad = 'propiedad'
  #hambre
  static statico = 'Valor estatico'
  constructor(estado='Turstre', hambre = false){
    this.estado = estado
    this.#hambre = false
    if ( this.estado === 'emocionado') this.#hambre = true;
  }
  hablar(){
    console.log(`El estado del cachorrito es ${this.estado} ${this.#hambre ? 'y esta satisfecho' :
  'y tiene mucha hambre :c'}`);
  }
  static comer(){
    console.log(this.statico)
  }
}

Dog.comer()
const puppy = new Dog('emocionado');
console.log(puppy);console.log(puppy.__proto__.hablar);
puppy.hablar();
const puppy2 = new Dog('Triste');
puppy2.hablar()
const sinParametro = new Dog();
sinParametro.hablar();