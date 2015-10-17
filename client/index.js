import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

ReactDOM.render(
	<App articles={initialState.articles}></App>,
	document.getElementById('content')
);