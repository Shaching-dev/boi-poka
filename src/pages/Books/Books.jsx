import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";
const Books = ({ data }) => {
  console.log(data);

  const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllBooks(data);
  //       });
  //   }, []);

  //   const bookPromise = fetch("/booksData.json").then((res) => res.json());

  return (
    <div>
      <h3 className="text-4xl font-bold text-center my-3">Books</h3>
      <Suspense fallback={<span>Loading......</span>}>
        <div className="grid grid-cols-1 md:px-10 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {data.map((element) => (
            <Book key={element.bookId} element={element}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
