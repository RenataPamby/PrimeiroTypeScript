//types

//deve usar um desses (union type)
type Input = string | number | string[] | number[];
//deve usar todos (insertion type)
type Buttom = string & number & string[] & number[];

function prompt(input: Input){
}
prompt([10, 4]);
prompt(["Renata", "Teixeira"]);


//EXEMPLO 01
interface Dog{
    name: string;
    breed: string;
    bark(): string;
}
interface Cat{
    name: string;
    color: string;
    meow(): string;
}
type Animal = Dog | Cat;

function creatAnimal(animal: Animal){
}
creatAnimal({       //invoke
    name: "Nina",
    color: "Escaminha",
    meow(){
        return "miau"
    }
})


//EXEMPLO 02 (da aula de interface) 
//o que da pra fazer também
type UserCarteira = {
    coins?: number;
    credtits?: number;
}
type User = {
    name: string;
    createdAt: Date;
    carteira?: UserCarteira;
}
type Admin = User & {
    ban(user: User): void;
    kick(user: User): void;
}