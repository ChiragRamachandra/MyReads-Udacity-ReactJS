import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { search, update, get, getAll } from '../BooksAPI';
import Book from '../components/Book';

const Search = () => {
	const [ query, setQuery ] = useState('');
	const [ books, setBooks ] = useState();
	const [ allBooks, setAllBooks ] = useState();
	let bookComponent = null;

	useEffect(() => {
		fetchBooks();
	}, []);

	const fetchBooks = () => {
		getAll().then((data) => {
			setAllBooks(data);
		});
	};

	const onSearchHandler = async (event) => {
		event.preventDefault();
		setQuery(event.target.value);
		if (query) {
			const res = await search(query);
			setBooks(res);
		}
	};

	const onChangeHandler = async (event) => {
		event.preventDefault();
		let shelf = event.target.value.toString();
		if (event.target.value === 'none') {
			//dont update
		} else {
			const book = await get(event.target.id);
			await update(book, shelf);
		}
	};

	if (books !== 'undefined' && books != null && books.length != null && books.length > 0) {
		bookComponent = books.map((book) => {
			allBooks.map((allBook) => {
				if (allBook.id === book.id) {
					book.shelf = allBook.shelf;
				}
				return allBook;
			});

			if (book.imageLinks) {
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
			}

			return (
				<li key={book.id}>
					<Book
						id={book.id}
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
			<div className="app">
				<div className="search-books">
					<div className="search-books-bar">
						<Link to="/">
							<button className="close-search">Close</button>
						</Link>

						<div className="search-books-input-wrapper">
							<input type="text" onChange={onSearchHandler} placeholder="Search by title or author" />
						</div>
					</div>
					<div className="search-books-results">
						<ol className="books-grid">{bookComponent}</ol>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Search;
