import React, { Fragment } from 'react';
import './App.css';
import Message from './components/Message';
import Paragraph from "./components/Paragraph";

function App() {
	return (
		<Fragment>
			<Message name={ "Yoast devs" }/>
			<Paragraph text={ "This is a presentation about git bisect." }/>
		</Fragment>

	);
}

export default App;
