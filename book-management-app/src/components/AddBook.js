import React from "react";
import BookForm from './BooksForm';

const AddBook = () => {
    const handleOnSubmit = (book) => {
        console.log(book);
    }

    return (
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}

export default AddBook;
