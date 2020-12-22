let data = require('@begin/data')
let arc = require('@architect/functions')

exports.handler = arc.http.async(route)

async function route(req) {

  console.log(req.body)

  await data.set({
    table: 'movies',
    key: req.pathParameters.movieID,
    votes: 0,
    title: req.body.title
  })
  return {
    statusCode: 301,
    location: '/'
  }
}