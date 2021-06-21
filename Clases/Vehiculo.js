var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, modelo_, año_) {
        this.marca = marca_;
        this.modelo = modelo_;
        this.año = año_;
    }
    Vehiculo.prototype.acelerar = function () {
        console.log('estoy acelerando');
    };
    Vehiculo.prototype.frenar = function () {
        console.log('estoy frenando');
    };
    return Vehiculo;
}());
var auto = new Vehiculo('Ford', 'Mustang', 2015);
auto.acelerar();
