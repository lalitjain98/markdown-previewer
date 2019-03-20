import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

const Header = (props) => {
	return (
		<Row
			className="justify-content-center"
			style={{ backgroundImage:"linear-gradient(to left,#B2DFDB, #fff)", color: "#004D40", borderBottom:"1px solid #55f"}}>
			<Col xs={12}>
				<h2 className="mx-auto text-center">Markdown Previewer</h2>
			</Col>
		</Row>
	);
};

export default Header;
