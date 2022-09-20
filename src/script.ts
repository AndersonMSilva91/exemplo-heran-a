import { Duck } from "./Duck"
import { ICanFly } from "./ICanFly";
import { ICanSwim } from "./ICanSwim";
import { ICanWalk } from "./ICanWalk";
const duck = new Duck('Patolino o Mago', 3, 50, 2, true, 'preto c/ verde');

function takeOff(animal:ICanFly) {
    animal.fly();
}

takeOff(duck);

function Alake(animal:ICanSwim) {
    animal.swim();
}
Alake(duck);

function Awalk(animal:ICanWalk) {
    animal.walk();
}
Awalk(duck);