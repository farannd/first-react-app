import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				error: false
			};

			//karena withErrorHandler merupakan HOC maka tidak bisa menggunakan componentDidMount()
			//yang dimana bekerja setelah semua child component nya selesai. sehingga handler nya tidak akan bekerja
			//oleh karena itu menggunakan componentWillMount() yang dapat diganti dg constructor
			this.reqInterceptor = axios.interceptors.request.use((req) => {
				this.setState({ error: false });
				return req;
			});
			this.resInterceptor = axios.interceptors.response.use(
				(res) => res,
				(error) => {
					this.setState({ error: error.message });
				}
			);
		}

		//berguna untuk menghapus interceptor shg tidak membebankan memory saat menggunakan HOC ini
		componentWillUnmount() {
			console.log('component will unmount');
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}

		showErrorHandler = () => {
			this.setState({ error: false });
		};

		render() {
			const props = { ...this.props };
			return (
				<Aux>
					<Modal show={this.state.error} cancelModal={this.showErrorHandler}>
						{this.state.error ? this.state.error : null}
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
