// types annotations

//tipos primitivos
const myString: string = "Hello";
const myNumber: number = 20; //tmb tem Ifinity e NaN
const myBoolean: boolean = true;
const myCon: null = null;
const myType: undefined = undefined;
const myVar: any = 1; //any pode ser qualquer coisa. NÂO RECOMENDADO


//inferencias de tipos
const myName = "Renata"; //já entende o tipo da variavel
//inferencia de OBJETOS
const animal = {
    name: "gato",
    age: 5
}
//inferencia de ARRAY
const vet = [1, 2, 3, 4];


//funções
function sum(a: number, b: number): number{//esse number é o tipo de retorno
    return a+b;
}
function greet(name: string, age?: number){
  //interrogação faz o parametro ser opcional
  //OBS: somente os ultimos paramentros podem ser opcional
  //um parametro obrigatorio não pode ser seguido de um opcional  
}

//função de flexa
const filter = (value: number) => value < 0;

const number = [1, 2, 3, 4, -1 , -2];

number.filter(filter);//passe o mouse em cima