function getPerson () {
    fetch("https://swapi.co/api/people/2/") // make the request
    .then(response => response.json()) // convert response to json
    .then(myJson => { // display data in the browser
        document.body.innerHTML =
        JSON.stringify(myJson, null, " ")
    })

}

//getPerson()


