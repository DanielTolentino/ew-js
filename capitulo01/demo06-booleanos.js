const podeDirigir = true

if(podeDirigir) {
    console.log('Ela pode dirigir')
}

const saldoEmConta = 0
if(!saldoEmConta) {
    console.log('não tem saldo!')
}

const boolComString = "ae hackerzao!!"

// força o valor a true ou false
// de acordo com a tabela
console.log('boolComString', !!boolComString)

// negação
console.log('negação', !boolComString)

// negação + forçar a bool
console.log(
    'negação + forçar bool',
    !(!!boolComString)
)

/* 
    RETORNA FALSO:
        - false
        - 0
        - [] array vazio
        - " " string vazia
        - ''  string vazia (aspas simples)
        - null
        - undefined
        - NaN

        RETORNA VERDADEIRO
        - true
        - 1
        - -1 
        - 0.5
        - "0"

*/