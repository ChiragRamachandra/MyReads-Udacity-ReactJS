import React, { Fragment } from 'react';

const Book = ({ title, author, url, onChangeHandler, id, state }) => {
	return (
		<Fragment>
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: 'url(' + url + ')'
						}}
					/>
					<div className="book-shelf-changer">
						<select id={id} onChange={onChangeHandler} defaultValue={state}>
							<option value="move" disabled>
								Move to...
							</option>
							<option value="none">None</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
						</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{author}</div>
			</div>
		</Fragment>
	);
};

export default Book;
