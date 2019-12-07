let num = [5,1,4,2,9]
num.push(8)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)

if(pos == -1){
    console.log(`O valor não foi encontrado`)
}
else{
console.log(`O valor 9 está na posição ${pos}`)
}