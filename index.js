// const _ = require("lodash");
//
// let randomText = "aLi kUrnIawaN";
//
// randomText = _.toLower(randomText); //Lower Case COnverted
//
// randomText = _.startCase(randomText); //Convert Depannya Huruf Besar
//
// console.log(randomText);

//RAMDA

// const addOne = require("ramnda");
// const addTwo = addOne.add(1, 2);
// console.log(addTwo);

const http = require("http")

const HOST = "localhost"
const PORT = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end("Hello Server")
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOST, err => {
  if (err) {
    return console.log("Something bad happened", err)
  }

  console.log(`Server is listening on ${HOST}:${PORT}`)
})
