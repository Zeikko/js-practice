import React from 'react'

export default class Header extends React.Component {
	render() {
		return <header>
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <a className="navbar-brand" href="#">JS Practice Site</a>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav">
				      	<li><a href="#">Blog</a></li>
				      </ul>
			      </div>
				</div>
			</nav>
			<h1></h1>
		</header>
	}
}