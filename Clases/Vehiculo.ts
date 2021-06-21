class Vehiculo{
    marca:string
    modelo:string
    año: number

    constructor(marca_: string, modelo_: string, año_:number){
        this.marca= marca_
        this.modelo= modelo_
        this.año= año_
    }

    acelerar():void{
        console.log('estoy acelerando')
    }

    frenar():void{
        console.log('estoy frenando')
    }
}

const auto= new Vehiculo('Ford','Mustang', 2015)
auto.acelerar()