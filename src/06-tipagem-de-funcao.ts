//tipagem de funcao

type Args = string | number;
function bootstrap(name: string, args?: Args): boolean{
    return true;
}

const novo = (texto: string): void => {
    console.log("ola", texto);
}
//função com inferencia
const triplo = (n: number) => n * 3;

//tipo customizado (função de flexa) callbacks
type MainFunction = (args: string[]) => void;
const main: MainFunction = (nome) => {
}

type Props = {
  onChange: (value: string) => void;
};


