import React, { Component } from 'react';

// Ant Design React Components
import {
	Input,
	Row
} from 'antd';
const { Search } = Input;

// FIXME: remove this variable
const errorMessage = 'Alpha Numeric Characters Only, Please Search Again';

class Home extends Component {
	state={
		errorMessage: null
	}
	handleSearch = searchQuery => {
		if (this.isAlphaNumeric(searchQuery)) {
			this.setState({ errorMessage: null });
			// searchAuthor(searchQuery);
		} else {
			this.setState({ errorMessage });
		}
	}

	isAlphaNumeric = str => {
		let code, i, len;
		for (i = 0, len = str.length; i < len; i++) {
			code = str.charCodeAt(i);
			if (!(code > 47 && code < 58) && // numeric (0-9)
				!(code > 64 && code < 91) && // upper alpha (A-Z)
				!(code > 96 && code < 123)) { // lower alpha (a-z)
				return false;
			}
		}
		return true;
	};
	render() {
		const { errorMessage } = this.state;
		return (
			<div className='container'>
				<Row className='my-3'>
					<Search placeholder="input author code" enterButton="Search" size="large" onSearch={this.handleSearch} />
					<small className='text-danger'>{errorMessage}</small>
				</Row>
			</div>
		);
	}
}

export default Home;
