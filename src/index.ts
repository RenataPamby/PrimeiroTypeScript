//Interfaces
interface UserCarteira {
    coins?: number;
    credtits?: number;
}
interface User {
    name: string;
    createdAt: Date;
    carteira?: UserCarteira;
}
//pode fazer também
// interface User {
//     exibir (): void
// }

//função de definição
function createUser(name: string): User {
    return { name, createdAt: new Date(),
        // exibir () {
        //     console.log("Pode ter uma string")
        // },
    }
}
function updateCarteira(user: User, carteira: UserCarteira){
    user.carteira = {...user.carteira, ...carteira}//(...) se chama espalhamento ??? NÃO ENTENDI
}

//definindo usuario e carteira
const user01 = createUser("Renata");
updateCarteira(user01, {coins: 10});
updateCarteira(user01, {credtits: 20});

//testando funcionamento
console.log("Usuario", user01.name, "você tem", user01.carteira?.coins, "moedas na carteira e",
    user01.carteira?.credtits, "no credito"
);