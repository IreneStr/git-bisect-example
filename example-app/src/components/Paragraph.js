import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
	color: green;
	font-size: 30px;
`;

class Paragraph extends React.Component {
	render() {
		return <StyledParagraph>{ this.props.text }</StyledParagraph>;
	}
}
export default Paragraph;
