@app
cage-movies 

@http
get /
post /movies/:movieID
post /downvote
post /upvote

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
