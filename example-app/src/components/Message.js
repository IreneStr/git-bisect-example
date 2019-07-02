import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.h1`
	color: purple;
	font-size: 72px;
`;

class Message extends React.Component {
	render() {
		return <StyledMessage>Hello, { this.props.groupName }!</StyledMessage>;
	}
}
export default Message;
