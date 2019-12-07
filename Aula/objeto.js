let amigo = {nome: 'José', 
sexo:'M', 
peso: 84.5, 
engordar(p){
    this.peso += p
}
}
amigo.engordar(2)
console.log(`${amigo.nome} peso ${amigo.peso} kg`)
