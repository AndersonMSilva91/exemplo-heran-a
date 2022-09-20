"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
/*abstract e usado para quando criamos um objeto que nao e algo que em si existe
 * e é apenas uma ideia por exemplo
 */
var Animal = /** @class */ (function () {
    function Animal(name, lifeTime, size, weight) {
        this.name = name;
        this.lifeTime = lifeTime;
        this.size = size;
        this.weight = weight;
    }
    return Animal;
}());
exports.Animal = Animal;
