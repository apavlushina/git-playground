// const https = require("https")

// https
//   .get("https://swapi.co/api/films/1/", resp => {
//     let data = ""
//     resp.on("data", chunk => {
//       data += chunk
//     })
//     resp.on("end", () => {
//       console.log(JSON.parse(data))
//     })
//   })
//   .on("error", err => {
//     console.log("Error: " + err.message)
//   })


const superagent = require('superagent')

superagent
    .get("https://swapi.co/api/people/2/") // make request
    .then(res => {
        console.log(res.body) // json data is available from res.body
    })
    .catch(err => {
        console.log(err)
    });