class Padre{
    nombre:string
    edad: number

    constructor (_nombre:string, _edad:number){
        this.nombre=_nombre
        this.edad=_edad
    }

    mostrarnombre():void{
        console.log(this.nombre)
    }

}

class Hijo extends Padre{ 
    
    apellido: string
    constructor (_nombre:string, _edad:number, _apellido:string){
        super(_nombre, _edad)//llama al constructor de la clase padre
        this.apellido= _apellido
    }

    mostrarnombrehijo():void{
        console.log(this.nombre)
    }
}

const nuevohijo = new Hijo ('Fernando',27, 'Alegre')
nuevohijo.mostrarnombre