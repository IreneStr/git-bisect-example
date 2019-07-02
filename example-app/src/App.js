import React, { Fragment } from 'react';
import './App.css';
import Message from './components/Message';
import Paragraph from "./components/Paragraph";
import Button from "./components/Button";

function App() {
	return (
		<Fragment>
			<Message name={ "Yoast devs" }/>
			<Paragraph text={ "This is a presentation about git bisect." }/>
			<Paragraph text={ "Git bisect can come in very handy." }/>
			<Paragraph text={ "How many steps will it take to find the faulty commit?" }/>
			<Button>Click me!</Button>
			<Paragraph text={ "That's a fake button ^" }/>
		</Fragment>

	);
}

export default App;
