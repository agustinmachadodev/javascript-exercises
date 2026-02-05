const fibonacci = function(n) {
    //Convertir string a number
    n = Number(n)

    //No acepta negativos
    if(n < 0) return 'OOPS';

    //Si n es igual a 0 o 1, devolvemos el resultado sin hacer calculos
    if(n === 0) return 0;
    if(n === 1) return 1;


    let prev = 0; //guarda F(n - 2), el número anterior al anterior
    let curr = 1; //guarda F(n - 1), el número anterior

    for(let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
};


// Do not edit below this line
module.exports = fibonacci;
