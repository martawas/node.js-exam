// 3. [2 punkty] Napisz program który wypisze szczegóły pliku z własnym kodem źródłowym.

//     Wypisywane informacje:
//     - czas utworzenia
//     - czas modyfikacji
//     - rozmiar

//     Program powinien działać poprawnie także po zmianie nazwy i lokalizacji pliku - bez zmiany kodu źródłowego!

//     Przykłady wywołania
//     > node app.js //wyświetla szczegóły pliku app.js

//     po zmianie nazwy app.js na app2.js
//     > node app2.js //wyświetla szczegóły pliku app2.js

//     Podpowiedź: jest to możliwe przy użyciu wbudowanych modułów Node.js.



const fs = require('fs');
const path = __filename

fs.stat(path, (error, stats) => {
	if (error) {
		console.log(error);
		// ?? 	throw new Error(error);
	} 
	else {
		console.log(`File name: ${path}`);
		console.log(`Time of file creation: ${stats.birthtime}`),
		console.log(`Time of last file modification: ${stats.mtime}`),
		console.log(`File size: ${stats.size}`);
	}
	});
