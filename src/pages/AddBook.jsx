import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!Object.values(form).every(Boolean)) {
      alert("All fields required");
      return;
    }

    dispatch(
      addBook({
        ...form,
        id: Date.now(),
        rating: Number(form.rating),
      })
    );

    navigate("/books");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(e) => setForm({...form, title: e.target.value})}/>
      <input placeholder="Author" onChange={(e) => setForm({...form, author: e.target.value})}/>
      <input placeholder="Category" onChange={(e) => setForm({...form, category: e.target.value})}/>
      <textarea placeholder="Description" onChange={(e) => setForm({...form, description: e.target.value})}/>
      <input type="number" placeholder="Rating" onChange={(e) => setForm({...form, rating: e.target.value})}/>
      
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;