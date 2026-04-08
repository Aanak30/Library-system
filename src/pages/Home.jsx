import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

const Home = () => {
  const books = useSelector((state) => state.books.list);

  return (
    <div>
      <h1>Welcome to Library</h1>

      <h2>Categories</h2>
      <ul>
        <li>
          <Link to="/books/Fiction">Fiction</Link>
        </li>
        <li>
          <Link to="/books/Non-Fiction">Non-Fiction</Link>
        </li>
        <li>
          <Link to="/books/Sci-Fi">Sci-Fi</Link>
        </li>
        <li>
          <Link to="/books/Tech">Tech</Link>
        </li>
      </ul>

      <h2>Popular Books</h2>
      <div className="container fade-in">
        <div className="grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
