let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(route)

async function route(req) {
  let movieId = req.body.movieId
  let table = "movies"
  let decr = await data.decr({ table, key: movieId, prop: "votes" })
  console.log("votes decremented to", decr)
  return {
    statusCode: 301,
    location: '/'
  }
}