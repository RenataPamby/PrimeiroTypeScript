//Union types

type Primitive = string | number | boolean;

//posso usar um dos tipos acima
export function main (value: Primitive){
    //vai passando o mouse em cima do value para ver os tipo
    value;
    if (typeof value === "string"){
        value;
    }
    if (typeof value === "number"){
        value;
    }
    if (typeof value === "boolean"){
        value;
        return;
    }
    value;
}

//EXEMPLO 01
enum TrafficLightType{
    Yellow,
    Red,
    Green,
}

interface YellowColor {
    type : TrafficLightType.Yellow;
    wait(): void;
}
interface RedColor {
    type : TrafficLightType.Red;
    stop(): void;
}
interface GreenColor {
    type : TrafficLightType.Green;
    drive(): void;
}

type TrafficLight = YellowColor | RedColor | GreenColor;

const trafficLight: TrafficLight = {
    //se eu chamar um so vai trazer o metodo dele
    type: TrafficLightType.Green,
    drive() {
        
    },
}


//EXEMPLO 02 com o 03
type ImageSize = 8 | 10 | 19 | "string tambem"

interface Image {
    name : string;
    size: ImageSize;
}
const image: Image = {
    name: "Renata",
    size: 19,
    //ou
    //size: "string tambem",
}