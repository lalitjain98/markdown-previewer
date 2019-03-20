import React, {Component} from 'react';
import {Container,  Row, Col, Modal, ModalBody, ModalHeader} from 'reactstrap';

import marked from 'marked';

class Main extends Component{

	constructor(props){
		super(props);
		let initialInput="# Welcome to my React Markdown Previewer!\n" +
			"\n" +
			"## This is a sub-heading...\n" +
			"### And here's some other cool stuff:\n" +
			"  \n" +
			"Heres some code, `<div></div>`, between 2 backticks.\n" +
			"\n" +
			"```\n" +
			"// this is multi-line code:\n" +
			"\n" +
			"function anotherExample(firstLine, lastLine) {\n" +
			"  if (firstLine == '```' && lastLine == '```') {\n" +
			"    return multiLineCode;\n" +
			"  }\n" +
			"}\n" +
			"```\n" +
			"  \n" +
			"You can also make text **bold**... whoa!\n" +
			"Or _italic_.\n" +
			"Or... wait for it... **_both!_**\n" +
			"And feel free to go crazy ~~crossing stuff out~~.\n" +
			"\n" +
			"There's also [links](https://www.freecodecamp.com), and\n" +
			"> Block Quotes!\n" +
			"\n" +
			"And if you want to get really crazy, even tables:\n" +
			"\n" +
			"Wild Header | Crazy Header | Another Header?\n" +
			"------------ | ------------- | ------------- \n" +
			"Your content can | be here, and it | can be here....\n" +
			"And here. | Okay. | I think we get it.\n" +
			"\n" +
			"- And of course there are lists.\n" +
			"  - Some are bulleted.\n" +
			"     - With different indentation levels.\n" +
			"        - That look like this.\n" +
			"\n" +
			"\n" +
			"1. And there are numbererd lists too.\n" +
			"1. Use just 1s if you want! \n" +
			"1. But the list goes on...\n" +
			"- Even if you use dashes or asterisks.\n" +
			"* And last but not least, let's not forget embedded images:\n" +
			"\n" +
			"![React Logo w/ Text](https://goo.gl/Umyytc)\n";
		this.state = {
			input : initialInput,
			showModal: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.setPreview = this.setPreview.bind(this);
		// this.toggleModal = this.toggleModal.bind(this);
	}

	handleChange(event){
		this.setState({
			input: event.target.value
		});
	}

	// toggleModal(){
	// 	this.setState({
	// 		showModal: !this.state.showModal
	// 	});
	// }

	/*
	<Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
					<ModalHeader>
						<h2>Preview</h2>
					</ModalHeader>
					<ModalBody>
						<div dangerouslySetInnerHTML={this.setPreview()}>
						</div>
					</ModalBody>
				</Modal>
	*/

	render() {

		let styles = {
			mainContainer: {
				marginTop: "1em",
				padding: "1em",
				minHeight: "80%"
				// position: "absolute",
				// overflow: "scroll"
			},
			sectionHeading: {
				border: "1px solid #aaa",
				borderRadius: "5px",
				margin: "0.5em 0em",
				padding: "0.25em 0.5em"
			},
			editorContainer: {
				display: "block",
				border: "1px solid #aaa",
				borderTop: "0px",
				borderRadius: "5px",
				//padding: "0.5em 0em"
				// height: "100%"
			},
			editor: {
				 minHeight: "100%",
				 // width: "100%"
			},
			previewContainer: {
				display: "block",
				height: "100%",
				width: "100%",
				border: "1px solid #aaa",
				borderRadius: "5px",
				padding: "0.5em",
				marginRight: "1em",
				whiteSpace: "no-wrap",
				overflowX: "scroll",
			},
			preview: {
				padding: "0.5em 0em",
			}
		};

		return (
			//<Container fluid>

				<Row className="justify-content-center" style={styles.mainContainer}>
					<Col xs={12} lg={6}>
						<h3 className="text-dark" style={styles.sectionHeading}>Editor</h3>
						<div className="editor-container" style={styles.editorContainer}>
							<textarea
								className="form-text form-control"
								id="editor"
								style={styles.editor}
								rows={10}
								value={this.state.input}
								onChange={this.handleChange}></textarea>
						</div>
					</Col>

					<Col xs={12} lg={6}>
						<h3 className="text-dark" style={styles.sectionHeading}>Preview</h3>
						{/*<div className="d-flex justify-content-between">*/}
							{/*<h3 className="p-2 text-dark" style={{border: "1px solid #aaa", borderRadius: "5px"}}>Preview</h3>*/}
							{/*<button onClick={this.toggleModal}><span className="fa fa-3x fa-expand"></span></button>*/}
						{/*</div>*/}
						<div>
							<div className="preview-container" style={styles.previewContainer} id="preview" dangerouslySetInnerHTML={this.setPreview()}>
							</div>
						</div>
					</Col>

				</Row>
			//</Container>
		);
	}

	setPreview() {
		return {__html: marked(this.state.input, {breaks: true})}
	}
}

export default Main;