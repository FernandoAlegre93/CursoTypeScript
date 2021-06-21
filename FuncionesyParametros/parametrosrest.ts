const cartapostres =(postre:string, ... frutas:string[]):void =>{//es aplicable cuando nose cuantos parametros tiene, entonces le pongo un array con los "..."//
    console.log(`El postre es ${postre} y tiene ${frutas}`)
}

cartapostres('postre1','naranja', 'durazno')
cartapostres ('postres2','banana', 'kiwi')