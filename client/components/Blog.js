import React from 'react'

export default class Blog extends React.Component {
	render() {
		const { articles } = this.props 
		return <div className="container">
			<h1>Blog</h1>
			{articles.map(article => <div key={article.title}>{article.title}</div>)}
		</div>
	}
}