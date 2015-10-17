import request from 'superagent'

export function getArticles(callback) {
	request
	.get('articles')
	.end(callback)
}