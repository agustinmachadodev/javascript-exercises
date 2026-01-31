const sumAll = function(a, b) {
    let sum = 0;

        if(a < b ) {
            for(let i = a; i <= b; i++) {
                sum += i
            }
        } else {
            for(let i = a; i >= b; i--) {
                sum += i
            }
        }
    
        return sum
};


console.log(sumAll(123, 1))