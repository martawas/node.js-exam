// 5. [10 punktów] Stwórz aplikację która pobierze z GitHuba informacje o użytkowniku i jego repozytoriach. Dodatkowo sprawdź
//  aktualną pogodę w lokalizacji użytkownika.
//     - w parametrach uruchomienia jest podawany login użytkownika oraz opcjonalnie informacja czy wyświetlać liczbę śledzących użytkownika,
//  sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem).
//     - wyświetl nazwę użytkownika (`name`)
//     - wyświetl liczbę śledzących użytkownika (`followers`) - tylko jeżeli użyto odpowiedniego parametru przy uruchomieniu aplikacji
//     - wyświetl liczbę repozytoriów
//     - wyświetl nazwy repozytoriów (`name`)
//     - wyświetl opis pogody (`weather.main`, `weather.description`) w lokalizacji użytkownika (`location` - zwraca GitHub w danych użytkownika)
//     - żądania do API wysyłaj asynchronicznie
//     - pamiętaj o obsłudze błędów
//     - podziel rozwiązanie na moduły

//     Lista endpointów API:
//     - dane użytkownika: https://api.github.com/users/{userName}
//         - np https://api.github.com/users/octocat
//     - repozytoria użytkownika: https://api.github.com/users/{username}/repos
//         - np https://api.github.com/users/octocat/repos
//     - pogoda: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q={name}
//         - np https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=Białystok

// przykładowym wywołanie: node 05app.js martawas "Show followers"
//                    lub: node 05app.js martawas

const userLogin = process.argv[2];
const getUser = require("./user");
const getRepos = require("./repos");
const getWeather = require("./weather");

const getUserData = async () => {
  try {
    const user = await getUser(userLogin);
    console.log(`Nazwa użytkownika: ${user.name}`);
    if (user.name && process.argv[3] == "Show followers") {
      console.log(`Ilość obserwujących: ${user.followers}`);
    }
    getReposData();
    getWeatherData(user.location);
  } catch (error) {
    console.log("Error: " + error.message);
  }
};

const getReposData = async () => {
  try {
    const repos = await getRepos(userLogin);
    console.log(`Ilość repozytoriów: ${repos.length}`);
    if (repos.length) {
      repos.forEach((repo) => console.log(repo.name));
    }
  } catch (error) {
    console.log("Error: " + error.message);
  }
};

const getWeatherData = async (location) => {
  if (location) {
    try {
      const weather = await getWeather(location);
      console.log(`Pogoda: ${weather.weather[0].main}`);
      console.log(`Szczegóły pogody: ${weather.weather[0].description}`);
    } catch (error) {
      console.log("Error: " + error.message);
    }
  } else {
    console.log("Użytkownik nie podał lokalizacji");
  }
};

getUserData();
