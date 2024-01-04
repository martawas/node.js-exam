// 4. [5 punktów] Napisz aplikację która odczyta z pliku `data.json` liczbę oraz nazwę pliku, a następnie:
//     - pobierze z API informacje o danej liczbie 
//     (https://lukaszuk.net/numbers.php?number={number}, np https://lukaszuk.net/numbers.php?number=1)
//     - informacje pobrane z API zapisze w pliku o pobranej wcześniej nazwie

//     Przykład pliku: data.json
//     ``` JSON
//     {
//         "number": "588",
//         "filename": "file.json"
//     }
//    //     Pamiętaj o obsłudze błędów. Żądania do API oraz zapis do pliku wykonuj asynchronicznie.


const axios = require('axios');
const fs = require('fs');
const { writeFile } = require('fs').promises;


function readFile() {
const file = fs.readFileSync("04/data.json", "utf8");
if (file) {
    return file;
} else {
    throw `File not found`;
}
}

const data = readFile();
const { number, filename } = JSON.parse(data);


const getData = async () => {
    const url = `https://lukaszuk.net/numbers.php?number=${number}`;
    const response = await axios.get(url);
    return response.data;
}

(async () => {
	try {
    const data = await getData();    
    await writeFile(filename, data);
	console.log('File saved correctly');
	}
	catch (error) {
		console.log("Error: " + error.message);
	}
})();