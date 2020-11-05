console.log("fetch api ==============");

const URL = "https://ghibliapi.herokuapp.com/people";
const PEOPLE_NAME = document.querySelector(".people-name");

PEOPLE_NAME.innerHTML = "<p>Loading...</p>";

fetch(URL)
    .then(response => response.json())
    .then(people => PEOPLE_NAME.innerHTML = listOfNames(people));


function listOfNames(people) {
    const NAMES = people.map(person => {
        return `<li>${person.name}</li>`
    }).join("\n");
    return `<ul>${NAMES}</ul>`;
}

