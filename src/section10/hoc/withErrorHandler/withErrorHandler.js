import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders';

const withErrorHandler = (WrappedComponent) => {
	return class extends Component {
		state = {
			error: null
		};

		componentDidMount() {
			axios.interceptors.request.use(
				(req) => {
					this.setState({ error: null });
					return req;
				},
				(error) => {
					this.setState({ error: error });
					return Promise.reject(error);
				}
			);
			axios.interceptors.response.use(
				(res) => res,
				(error) => {
					this.setState({ error: error });
					return Promise.reject(error);
				}
			);
		}

		showErrorHandler = () => {
			this.setState({ error: null });
		};

		render() {
			const props = { ...this.props };
			console.log(props);
			return (
				<Aux>
					<Modal show={this.state.error} cancelModal={this.state.showErrorHandler}>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					{/* kegunaan attribue ..this.props adalah untuk mentransfer atau meneruskan semua prop yg diterima kepada
					wrapped component saat dipanggil agar props dapat digunakan */}
					<WrappedComponent {...this.props}> Semangat Farand {props.testProps} </WrappedComponent>
				</Aux>
			);
		}
	};
};

export default withErrorHandler;
