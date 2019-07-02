import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.h1`
	color: purple;
`;

class Message extends React.Component {
	render() {
		return <StyledMessage>Hello, { this.props.name }</StyledMessage>;
	}
}
export default Message;
