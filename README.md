# Movie Store Project

The Movie Store project is a practice project that uses the TMDb (The Movie Database) API to fetch movie data and build a web application for searching, browsing, and managing movie items.

## Technology Stack

- TypeScript
- Vite (A build tool that enhances the development experience)
- Axios (A JavaScript library for making HTTP requests)

## How to Use

1. Clone the project repository:

   ```bash
   git clone git@github.com:Little-BlackCat/movie-store.git
   ```

2. Navigate to the project folder:

   ```bash
   cd movie-store
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory of the project and add your TMDb API key:

   ```env
   VITE_API_KEY=your-api-key-here
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your web browser and go to [http://localhost:5173](http://localhost:5173) to access the Movie Store web application.

## Features

1. **Search Movies**: The web application allows users to search for movies using movie titles. It fetches data from the TMDb API and displays a list of movies based on the search query.

2. **View Movie Details**: Users can click on a movie to view its details, including the title, release year, popularity, genres, vote average, and vote count.

3. **Add Price**: Users can add a price to each movie. This feature is *NOT* yet fully implemented and is a work in progress.

4. **Add to Cart**: Users can add movies to their cart by clicking the "Add to Cart" button. The selected movies are stored in the cart, and their price may be considered for discounts ***(not yet implemented)***.

5. **Apply Discounts**: A feature for applying discounts based on the number of items in the cart is planned but *not yet implemented*.

6. **Persistent Cart**: When users close the website and reopen it, their selected items will still be in the cart. This functionality is implemented using `localStorage`.

7. **Clear Cart**: Users can clear their cart by clicking the "Clear All Cart" button.

8. **Order Movies**: Users can order movies, which triggers a popup showing where to transfer the payment within a one-minute countdown. *This feature is a work in progress*.


## Known Issues and Future Improvements

1. **Add Price and Discounts**: The "Add Price" feature and applying discounts based on the number of items in the cart are not yet implemented but are planned for future updates.

2. **Order Movies**: The feature for ordering movies and the payment popup are still a work in progress.

3. **Enhanced User Interface**: The user interface can be improved to make it more visually appealing and user-friendly.

4. **Code Refactoring**: The project can benefit from further code refactoring and organization.

5. **Error Handling**: Improved error handling and user feedback can be implemented.

## Contributions

Contributions to this project are welcome! If you have ideas, suggestions, or would like to contribute code or documentation, please open an issue or a pull request on the project's GitHub repository.

---