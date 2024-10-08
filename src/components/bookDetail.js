// Filename - components/book-detail.js

import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return (
				<div>
					<h3>Select a book to get started.</h3>
				</div>
			);
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook,
	};
}

export default connect(mapStateToProps)(BookDetail);
