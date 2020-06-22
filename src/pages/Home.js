import React, { Fragment, useEffect, useState } from 'react';
import BookShelf from '../components/BookShelf';
import { getAll, update, get } from '../BooksAPI';
import { Link } from 'react-router-dom';

const Home = () => {
	const [ Books, setBooks ] = useState();

	let currentBooks = null;
	let wantBooks = null;
	let readBooks = null;

	useEffect(() => {
		fetchBooks();
	}, []);

	const fetchBooks = () => {
		getAll().then((data) => {
			setBooks(data);
		});
	};

	if (Books) {
		currentBooks = Books.filter((book) => {
			return book.shelf === 'currentlyReading';
		});
		wantBooks = Books.filter((book) => {
			return book.shelf === 'wantToRead';
		});
		readBooks = Books.filter((book) => {
			return book.shelf === 'read';
		});
	}

	const onChangeHandler = async (event) => {
		event.preventDefault();
		let shelf = event.target.value.toString();
		if (event.target.value === 'none') {
			//dont update
		} else {
			const book = await get(event.target.id);
			await update(book, shelf);
			fetchBooks();
		}
	};

	return (
		<Fragment>
			<div className="app">
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							<BookShelf
								title="Currently Reading"
								bookArray={currentBooks}
								onChangeHandler={onChangeHandler}
							/>
							<BookShelf title="Want To Read" bookArray={wantBooks} onChangeHandler={onChangeHandler} />
							<BookShelf title="Read" bookArray={readBooks} onChangeHandler={onChangeHandler} />
						</div>
					</div>
					<div className="open-search">
						<Link to="/search">
							<button>Search</button>
						</Link>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
