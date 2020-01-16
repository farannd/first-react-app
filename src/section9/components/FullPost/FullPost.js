import React, { Component } from 'react';

import './FullPost.css';
import axios from '../../axios';

class FullPost extends Component {
	state = {
		post: null
	};

	//penulisan http request dalam react app dilakukan pada method componentDidMount() ataupun componentDidUpdate()
	componentDidUpdate() {
		if (this.props.id) {
			if (!this.state.post || (this.state.post && this.state.post.id !== this.props.id)) {
				axios.get('/posts/' + this.props.id).then((response) => {
					console.log(response.data);
					this.setState({
						post: response.data
					});
				});
			}
		}
	}

	//axios.delete untuk mengirimkan request untuk menghapus resource ke suatu origin
	deletePostHandler = () => {
		axios.delete('/posts/' + this.props.id).then((response) => {
			console.log(response);
		});
	};

	render() {
		let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
		if (this.props.id) post = <p style={{ textAlign: 'center' }}>Loading</p>;
		if (this.state.post) {
			post = (
				<div className="FullPost">
					<h1>{this.state.post.title}</h1>
					<p>{this.state.post.body}</p>
					<div className="Edit">
						<button className="Delete" onClick={this.deletePostHandler}>
							Delete
						</button>
					</div>
				</div>
			);
		}
		return post;
	}
}

export default FullPost;
