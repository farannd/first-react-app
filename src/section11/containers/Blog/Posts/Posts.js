import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
	state = {
		posts: []
	};

	//axios.get adalah http request yang mengambil resource dari suatu origin
	//http request pada react dilakukan pada componentDidMount() dan componentDidUpdate()
	componentDidMount() {
		console.log(this.props); //terdapat properti pendukung yang didapat dari component router
		axios
			.get('/posts')
			.then((response) => {
				const posts = response.data.slice(0, 4);
				const updatedPosts = posts.map((post) => {
					return {
						...post,
						author: 'Nadiyah'
					};
				});
				this.setState({
					posts: updatedPosts
				});
			})
			.catch((error) => {
				this.setState({
					error: true,
					errorMsg: error
				});
			});
	}

	postClickHandler = (id) => {
		this.props.history.push({ pathname: '/posts/' + id });
	};

	render() {
		let posts = <p>{this.state.errorMsg}</p>;
		if (this.state.posts.length === 0) posts = <p> Loading </p>;
		else if (this.state.error) posts = <p>{this.state.errorMsg}</p>;
		else if (!this.state.error && this.state.posts.length > 0) {
			posts = this.state.posts.map((post) => {
				return (
					// <Link to={{ pathname: '/posts' + post.id }} key={post.id}>
					<Post
						key={post.id}
						title={post.title}
						author={post.author}
						clicked={this.postClickHandler.bind(this, post.id)}
					/>
					// </Link>
				);
			});
		}
		return (
			<div>
				<section className="Posts">{posts}</section>
				<Route path={this.props.match.url + '/:id'} component={FullPost} />
			</div>
		);
	}
}

export default Posts;
