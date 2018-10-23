import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import logo from '../images/logo.png';

const Wrapper = styled.div`
	width: 100vw;
	position: absolute;
	top: 0;
	height: 84px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	z-index: 3;
`;

const LogoImage = styled.img`
	height: auto;
	width: 60px;
	margin: 11px 16px;
	:hover {
		cursor: pointer;
	}
`;

class Heading extends Component {
	render() {
		return (
			<Wrapper>
				<Box>
					<LogoImage src={logo} alt="ass" />
				</Box>
				<Box mr={3}>{this.props.children}</Box>
			</Wrapper>
		);
	}
}

export default Heading;
