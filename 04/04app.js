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

const axios = require("axios");
const fs = require("fs");
const { writeFile, readFile } = require("fs").promises;

const getNumberInfo = async (number) => {
  const url = `https://lukaszuk.net/numbers.php?number=${number}`;
  const response = await axios.get(url);
  return response.data;
};

(async () => {
  try {
    const dataFromFile = await readFile("04/data.json", "utf8");
    const { number, filename } = JSON.parse(dataFromFile);
    if (number) {
      const numberInfo = await getNumberInfo(number);
      writeFile(filename, numberInfo);
      console.log("File saved correctly");
    } else {
      console.log("There is no number in the file");
    }
  } catch (error) {
    console.log("Error: " + error.message);
  }
})();
