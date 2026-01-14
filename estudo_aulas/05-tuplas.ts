//Tuplas
//type Calendario = [number, number, number];
type Calendario = [dia: number,mes: number,ano: number];
const data: Calendario = [13, 1, 2026];//mouse em cima de calendario

function createDate(...date: Calendario){//(...) espalhou os elementos da tupla dentro da variavel
    const [dia, mes, ano] = date
}

createDate(4 ,4 ,2000);
