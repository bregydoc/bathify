import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	background: #5a8bd2;
	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
	padding: 16px 24px;
	width: fit-content;
	color: white;
	font-family: 'Rubik', sans-serif;
	font-weight: 400;
	border-radius: 50px;
	font-size: 16px;
	transition: 0.3s;

	:hover {
		cursor: pointer;
		box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.22);
		transform: translateY(-2px);
	}
`;

class Button extends Component {
	render() {
		return <Wrapper>{this.props.children}</Wrapper>;
	}
}

export default Button;
