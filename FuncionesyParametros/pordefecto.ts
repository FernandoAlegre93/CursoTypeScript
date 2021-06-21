//Parametros por defecto.//

const mostrar = (nombre : string, apellido:string, edad: number =27) =>{//sino le paso el parametro, me va a imprimir el parametro que le paso, si le paso uno nuevo se sobreescribe con el que le habia pasado//
    return `Se llama ${nombre} ${apellido} y tiene ${edad} años`
}

console.log(mostrar('Fernando', 'Alegre'))