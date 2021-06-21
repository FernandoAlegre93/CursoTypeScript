//parametros opcionales//
const opcionales = (nombre: string, apellido:string, edad?:number)=>{ //el signo de interrogacion define que es un parametro opcional (puedo o no ponerlo si quiero y no me va a traer error//
    console.log(`Ud. se llama ${nombre} su apellido es ${apellido} y su edad es ${edad}`)
}

opcionales('Fernando', 'Alegre', 27)