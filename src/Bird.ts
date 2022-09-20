import { Animal } from "./Animal";
//extends e a forma que eu crio a herança o vinculo/ o boolean e pra verificar Verdadeiro Falso
abstract class Bird extends Animal{
public canFly: boolean;

constructor (name: string, lifeTime: number, size: number, weight: number, canFly: boolean) {
 super(name, lifeTime, size, weight);
 this.canFly = canFly;
 }
}

export { Bird }