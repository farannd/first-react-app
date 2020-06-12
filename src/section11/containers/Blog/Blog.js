import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
	return import('./NewPost/NewPost');
});

class Blog extends Component {
	state = {
		auth: true
	};
	render() {
		return (
			<div className="Blog">
				<header>
					<nav className="Nav">
						<ul>
							<li>
								{/* <Link to={{ pathname: '/' }}>Home</Link> */}
								<NavLink
									to={{ pathname: '/posts' }}
									activeClassName="my-active"
									activeStyle={{ color: '#fa923f', textDecoration: 'underline' }}
									exact
								>
									Posts
								</NavLink>
							</li>
							<li>
								{/* <Link to={{ pathname: '/new-post' }}>New Post</Link> */}
								<NavLink to={{ pathname: '/new-post' }}>New Post</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				{/* <Route path="/" exact render={() => <Posts />} />
				<Route path="/new-post" exact render={() => <NewPost />} /> */}
				<Switch>
					{this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
					<Route path="/posts" component={Posts} />
					<Route render={() => <h1>Page Not Found</h1>} />
					{/* <Redirect from="/" to="/posts"/> */}
				</Switch>
			</div>
		);
	}
}

export default Blog;
