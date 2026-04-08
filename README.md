# 📚 Online Library System

A modern **React + Redux Toolkit** based web application that allows users to browse, search, and manage a collection of books.

---

## 🚀 Features

### 🏠 Home Page

* Displays a welcome message
* Shows book categories (Fiction, Non-Fiction, Sci-Fi, etc.)
* Highlights popular books in card format

### 📖 Browse Books

* View all books in the library
* Filter books by category using dynamic routing (`/books/:category`)
* Search books by **title or author**

### 📄 Book Details

* View complete details of a selected book
* Includes title, author, description, and rating
* Easy navigation back to browse page

### ➕ Add Book

* Add new books using a form
* Form validation for required fields
* Uses **Redux Toolkit** for state management
* Newly added book appears at the top

### ❌ 404 Page

* Handles invalid routes
* Displays incorrect URL
* Provides link to return to Home page

---

## 🛠️ Tech Stack

* React (Vite)
* Redux Toolkit
* React Router DOM
* CSS (Custom Styling)

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── BookCard.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── BrowseBooks.jsx
 │    ├── BookDetails.jsx
 │    ├── AddBook.jsx
 │    ├── NotFound.jsx
 ├── redux/
 │    ├── store.js
 │    ├── booksSlice.js
 ├── data/
 │    ├── books.js
 ├── App.jsx
 ├── main.jsx
 ├── App.css
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR-USERNAME/library-system.git
cd library-system
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the project

```
npm run dev
```

---

## 🌐 Routing Overview

| Route              | Description              |
| ------------------ | ------------------------ |
| `/`                | Home Page                |
| `/books`           | Browse all books         |
| `/books/:category` | Filter books by category |
| `/book/:id`        | View book details        |
| `/add`             | Add new book             |
| `*`                | 404 Page                 |

---

## 📌 Key Functionalities

* Dynamic routing using React Router
* Global state management using Redux Toolkit
* Search and filter logic
* Form handling with validation
* Clean UI with responsive design

---

## 🎯 Future Improvements

* Add book images
* Implement pagination
* Add user authentication
* Store data using backend/API
* Add dark/light theme toggle

---
