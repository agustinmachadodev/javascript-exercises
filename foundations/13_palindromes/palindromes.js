const palindromes = function (str) {
    // Convertimos todo a minúsculas para que las mayúsculas no afecten la comparación
    str = str.toLowerCase();
    
    // Eliminamos espacios
    // Separamos por espacios y luego unimos todo en un solo string
    let words = str.split(' ');
    str = words.join('')

    //Definimos los caracteres válidos
    // Solo letras y números van a ser considerados para el palíndromo
    let inc = 'abcdefghijklmnopqrstuvwxyz0123456789';

    //Limpiar el string original
    // Recorremos cada caracter y solo agregamos los válidos
    let cleanStr = '';
    
     for(let i = str.length -1; i >= 0; i--) {

        if(inc.includes(str[i])) {
            cleanStr += str[i]
        }
    }

    //Crear el string invertido
    //Recorremos el string limpio desde el final hasta el principio
    let str1 = '';
    
    for (let i = cleanStr.length - 1; i >= 0; i--) {
        str1 += cleanStr[i];
    }

    return cleanStr === str1;
    
};

// Do not edit below this line
module.exports = palindromes;
