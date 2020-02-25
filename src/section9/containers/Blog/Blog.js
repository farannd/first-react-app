import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component {
	state = {
		posts: [],
		postSelectorId: null,
		error: false,
		errorMsg: null
	};

	//axios.get adalah http request yang mengambil resource dari suatu origin
	//http request pada react dilakukan pada componentDidMount() dan componentDidUpdate()
	componentDidMount() {
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
		this.setState({
			postSelectorId: id
		});
	};

	render() {
		let posts = <p>{this.state.errorMsg}</p>;
		if (this.state.posts.length === 0) posts = <p> Loading </p>;
		else if (!this.state.error && this.state.posts.length > 0) {
			posts = this.state.posts.map((post) => {
				return (
					<Post
						key={post.id}
						title={post.title}
						author={post.author}
						clicked={this.postClickHandler.bind(this, post.id)}
					/>
				);
			});
		}
		return (
			<div>
				<section className="Posts">{posts}</section>
				<section>
					<FullPost id={this.state.postSelectorId} />
				</section>
				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
