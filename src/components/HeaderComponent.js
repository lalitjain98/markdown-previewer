import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

const Header = (props) => {
	return (
		<Row
			className="justify-content-center"
			style={{
				padding: "1em",
				backgroundColor:"#004D40",
				color: "#B2DFDB",
			}}>
			<Col xs={12}>
				<h2 className="mx-auto text-center">Markdown Previewer</h2>
			</Col>
		</Row>
	);
};

export default Header;
