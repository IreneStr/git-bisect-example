import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	color: purple;
	height: 64px;
	font-size: 24px;
	background: green;
	border-radius: 50%;
`;

class Button extends React.Component {
	render() {
		return <StyledButton>{this.props.children}</StyledButton>;
	}
}
export default Button;
