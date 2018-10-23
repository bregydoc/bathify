import React, { Component } from 'react';
import Heading from './components/Heading';
import styled from 'styled-components';
import heroImage from './images/heroimage.png';
import Button from './components/Button';

import step1 from './images/step1.png';
import step2 from './images/step2.png';
import step3 from './images/step3.png';

const Body = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: 33.3% 33.3% 33.3%;
	grid-template-columns: 50% 50%;
`;

const LogoHero = styled.div`
	grid-column: 2 / 3;
	grid-row: 1 / 4;
	padding-right: 50px;
`;

const Hero = styled.div`
	grid-column: 1 / 2;
	grid-row: 2 / 3;

	padding: 20px 50px;
	display: block;
`;

const Introducing = styled.div`
	font-family: 'Rubik', sans-serif;
	font-weight: 400;
	color: #4e4e4e;
	font-size: 42px;
	display: flex;
`;

const Bold = styled.div`
	font-family: 'Rubik', sans-serif;
	font-weight: 700;
	color: #56e6b1;
	margin-left: 8px;
`;

const SubLines = styled.div`
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	color: #4e4e4e;
	font-size: 24px;
	display: flex;
	width: 80%;
	margin-top: 8px;
`;

const Cite = styled.div`
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	font-style: italic;
	color: #4e4e4e;
	font-size: 18px;
	display: flex;
	width: 70%;
	margin-top: 32px;
`;

const CallToAction = styled.div`
	grid-column: 1 / 2;
	grid-row: 3 / 4;

	padding: 0 60px;
	display: flex;
	flex-flow: column;
	justify-content: space-around;
`;

const StepsWrapper = styled.div`
	width: 100%;
	height: 100%;
	/* background-color: red; */
	grid-column: 1 / 3;
	grid-row-start: 4;
`;

const EasyTitle = styled.div`
	font-family: 'Rubik', sans-serif;
	font-weight: 700;
	color: #56e6b1;
	font-size: 32px;
	margin-top: 8px;
	text-align: center;
`;

const Resume = styled.div`
	font-family: 'Rubik', sans-serif;
	font-weight: 400;
	color: #505050;
	font-size: 18px;
	margin-top: 20px;
	padding: 0 14vw;
	text-align: center;
`;

const StepScaffold = styled.div`
	display: flex;
	padding: 0 8vw;
	justify-content: space-around;
	text-align: center;
	margin-top: 80px;
`;
const Step = styled.div`
	flex: 1;
`;

const StepText = styled.div`
	font-family: 'Rubik', sans-serif;
	font-weight: 400;
	color: #505050;
	font-size: 16px;
	margin-top: 20px;
	margin-bottom: 50px;
	text-align: center;
`;

class App extends Component {
	render() {
		return (
			<div>
				<Heading>{/* <h1>Hello World</h1> */}</Heading>

				<Body>
					<LogoHero>
						<img
							src={heroImage}
							alt=""
							style={{
								position: 'relative',
								top: '50%',
								transform: 'translateY(-50%)'
							}}
						/>
					</LogoHero>
					<Hero>
						<Introducing>
							Introducing
							<Bold>Bathify,</Bold>
						</Introducing>
						<SubLines>
							your new tool to help your employees in their diary
							labor.
						</SubLines>
						<Cite>
							With Bathify you can make more efficent your
							company.
						</Cite>
					</Hero>
					<CallToAction>
						{/* → */}

						{/* <Button>SIGN UP FOR THE BETA </Button> */}
					</CallToAction>
					<StepsWrapper>
						<EasyTitle>Bathify is easy to use</EasyTitle>
						<Resume>
							For many of us, our very first experience of
							learning about the celestial bodies begins when we
							saw our first full moon in the sky. It is truly a
							magnificent view.
						</Resume>
						<StepScaffold>
							<Step>
								<img
									src={step1}
									alt=""
									style={{ width: 'auto', height: '208px' }}
								/>
								<StepText>Do you need something?</StepText>
							</Step>
							<Step>
								<img
									src={step2}
									alt=""
									style={{ width: 'auto', height: '208px' }}
								/>
								<StepText>Only push and alert it!</StepText>
							</Step>
							<Step>
								<img
									src={step3}
									alt=""
									style={{ width: 'auto', height: '208px' }}
								/>
								<StepText>Wait and be happy</StepText>
							</Step>
						</StepScaffold>
					</StepsWrapper>
				</Body>
			</div>
		);
	}
}

export default App;
