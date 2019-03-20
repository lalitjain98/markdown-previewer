import React, {Component} from 'react';
import {NavLink, Container, Row, Col} from 'reactstrap';

const Footer = (props) => {
	return (
		<Row
			className="justify-content-center"
			style={{
				backgroundColor: "#004D40",
				color: "#B2DFDB",
				marginTop: "1em",
				padding: "1em"
			}}>
			<Col xs={12}>
				<p className="mx-auto text-center">
					Built using <a target="_blank" href="https://marked.js.org/">Marked.js</a>
				</p>
				<p className="mx-auto text-center">
					Github Repo Link: <a target="_blank" href="https://github.com/lalitjain98/markdown-previewer"> github.com/lalitjain98/markdown-previewer</a>
				</p>
			</Col>
		</Row>
	);
};

export default Footer;
