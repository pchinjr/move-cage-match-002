let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(route)

async function route(req) {
  let movieId = req.body.movieId
  let table = "movies"
  let incr = await data.incr({ table, key: movieId, prop: "votes" })
  console.log("votes incremented to", incr)
  return {
    statusCode: 301,
    location: '/'
  }
}