# My Reads - Udacity Project


Requirements: 
npm

How to Run:
Download or Clone the Repository.
Run npm install to install the project dependencies.
Run the app using npm start.
App can be seen at: localhost:3000 (most of the times unless you want to change the port).

Backend Server
To simplify your development process, we've been provided with a backend server for you to develop against. The provided file BooksAPI.js contains the methods you will need to perform necessary operations on the backend:

getAll
update
search
getAll
Method Signature:

getAll()
Returns a Promise which resolves to a JSON object containing a collection of book objects.
This collection represents the books currently in the bookshelves in your app.
update
Method Signature:

update(book, shelf)
book: <Object> containing at minimum an id attribute
shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
Returns a Promise which resolves to a JSON object containing the response data of the POST request
search
Method Signature:

search(query)
query: <String>
Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

Search Terms:
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

To Deploy the package to Git hub Pages:

go to package.json and add: "homepage": "https://myusername.github.io/my-app",
npm install --save gh-pages
Add these 2 in scripts "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build" }
npm run deploy
Incase you run into errors for npm run deploy. Use via the GitHub Terminal.

Also try: rm -rf node_modules/gh-pages/.cache

so that the cache is cleared.

Note: Useful resource to display github pages https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
