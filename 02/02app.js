// 2. [2 punkty] Napisz aplikację która przyjmuje w parametrze uruchamiania ciąg znaków a następnie wyświetli
// go w kolorach tęczy. Wykorzystaj moduł `colors` (https://www.npmjs.com/package/colors) w wersji 1.3.2!. 
// Pamiętaj o obsłudze błędów.

// Sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz
// z przykładowym wywołaniem).

const colors = require('colors');

const inputParameter = process.argv[2];
if (process.argv.length === 3) 
    console.log(inputParameter.rainbow);
    else if (process.argv.length > 3) 
    console.log("Too many input parameters");
    else 
    console.log("There is no input parameter");
  


// przykładowe wywołanie: node 02.js "Hej nazywam sie Marta"