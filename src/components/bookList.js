import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";
import BookDetail from "./bookDetail";
 
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <div
                    className="item"
                    key={book.title}
                    onClick={() =>
                        this.props.selectBook(book)
                    }
                >
                    {book.title}
                </div>
            );
        });
    }
 
    render() {
        return (
            <div className="container">
                <div className="books">
                    {this.renderList()}
                </div>
                <div className="description">
                    <BookDetail />
                </div>
            </div>
        );
    }
}
 
function mapStateToProps(state) {
    return {
        books: state.books,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            selectBook: selectBook,
        },
        dispatch
    );
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookList);