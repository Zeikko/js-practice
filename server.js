import express from 'express'
import path from 'path'
import ReactDOMServer from 'react-dom/server'
import App from './client/containers/App'
import React from 'react'

const app = express()

app.get('/bundle.js', (req, res) => {
  res.header('Content-Type', 'text/javascript')
  res.sendFile(__dirname + '/public/bundle.js')
})

function render(html, initialState) {
  return `
<html>
	<head>
	  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
	</head>
	<body>
	  <div id="content">${html}</div>
	  <script type="text/javascript">
	  	window.initialState = ${JSON.stringify(initialState)}
	  </script>
	  <script type="text/javascript" src="/bundle.js"></script>
	</body>
</html>
`
}

const articles = [{
  title: 'Test Article 1'
}, {
  title: 'Test Article 2'
}, {
  title: 'Test Article 3'
}]

app.get('/', (req, res) => {
	const initialState = {
		articles
	}
  const html = ReactDOMServer.renderToString( < App articles={articles} /> )
  res.send(render(html, initialState))
})

app.get('/articles', (req, res) => {
  res.json(articles)
})

var server = app.listen(3000, () => {
  console.log('Practice server is up')
})
