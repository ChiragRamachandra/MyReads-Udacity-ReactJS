import React, { Fragment } from 'react';
import Book from './Book';

const BookShelf = ({ title, bookArray, onChangeHandler }) => {
	let bookComponent = null;

	if (bookArray) {
		bookComponent = bookArray.map((book) => {
			return (
				<li key={book.id}>
					<Book
						id={book.id}
						url={book.imageLinks.thumbnail}
						title={book.title}
						author={book.authors}
						onChangeHandler={onChangeHandler}
						state={book.shelf}
					/>
				</li>
			);
		});
	}
	return (
		<Fragment>
			<div className="bookshelf">
				<h2 className="bookshelf-title">{title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">{bookComponent}</ol>
				</div>
			</div>
		</Fragment>
	);
};

export default BookShelf;
