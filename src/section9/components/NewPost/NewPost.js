import React, { Component } from 'react';

import './NewPost.css';
import axios from '../../axios';

class NewPost extends Component {
	state = {
		title: '',
		body: '',
		author: 'Nadiyah'
	};

	//axios post berfungsi untuk mengirimkan resource ke suatu origin
	newPostHandler = () => {
		const data = {
			title: this.state.title,
			body: this.state.body,
			author: this.state.author
		};
		axios.post('/posts', data).then((response) => {
			console.log(response);
		});
	};

	render() {
		return (
			<div className="NewPost">
				<h1>Add a Post</h1>
				<label>Title</label>
				<input
					type="text"
					value={this.state.title}
					onChange={(event) => this.setState({ title: event.target.value })}
				/>
				<label>body</label>
				<textarea
					rows="4"
					value={this.state.body}
					onChange={(event) => this.setState({ body: event.target.value })}
				/>
				<label>Author</label>
				<select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
					<option value="Nadiyah">Nadiyah</option>
					<option value="Zhafirah">Zhafirah</option>
				</select>
				<button onClick={this.newPostHandler}>Add Post</button>
			</div>
		);
	}
}

export default NewPost;
