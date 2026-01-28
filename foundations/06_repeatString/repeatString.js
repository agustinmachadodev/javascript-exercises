const repeatString = function(string, num) {
    let count = '';

    if(num < 0) {
        return 'ERROR';
    
    }  else if(num > 0) {
        for(let i = 0; i < num; i++) {
            count += string
        }
    }
    return(count);
};

// Do not edit below this line
module.exports = repeatString;
