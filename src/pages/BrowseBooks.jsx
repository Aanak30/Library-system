import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BookCard from "../components/BookCard";

const BrowseBooks = () => {
  const { category } = useParams(); // gets category from URL
  const books = useSelector((state) => state.books.list);

  const [search, setSearch] = useState("");

  // FILTER BY CATEGORY
  let filteredBooks = books;

  if (category) {
    filteredBooks = books.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase(),
    );
  }

  //  SEARCH FILTER
  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <h1>Browse Books {category ? `- ${category}` : ""}</h1>

      {/*  SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* BOOK LIST */}
      <div className="grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
