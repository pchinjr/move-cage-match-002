let arc = require('@architect/functions')
let data = require('@begin/data')


exports.handler = async function http(req) {
  let result = await data.get({ table: "movies" })

  let element = result.map(movie).join('')

  function movie(obj) {
    return `
    ${obj.title} : ${obj.key} votes: ${obj.votes}
    <form action="/upvote" method=post>
    <input type=hidden name=movieId value=${obj.key}>
    <button>Upvote</button>
    </form>
    <form action="/downvote" method=post>
    <input type=hidden name=movieId value=${obj.key}>
    <button>Downvote</button>
    </form>
    `
  }

  let html = `<h1> Praise Cage </h1>
   <div>${element}</div>
   `

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: html
  }
}