import React from 'react'
import Header from '../components/Header'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

export default class App extends React.Component {
	render() {
		console.log(this.props)
		const { articles } = this.props
		return <div>
			<Header></Header>
			<Blog articles={articles}></Blog>
			<Footer></Footer>
		</div>
	}
}