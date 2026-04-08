import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <Link to={`/book/${book.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
};

export default BookCard;