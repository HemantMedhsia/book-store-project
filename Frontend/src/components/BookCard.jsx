import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css'; // Importing the CSS file

const BookCard = ({ book, role }) => {
    const { name, author, imageUrl, Url } = book;

    return (
        <div className='book-card'>
            <img src={imageUrl} alt={name} className='book-image' />
            <div className="book-details">
                <h3 className="book-title">{name}</h3>
                <p className="book-author">Written By, {author}</p>
            </div>
            <a href={Url} target='_parent' className='btn-open'>Open</a>
            {role === "admin" && (
                <div className="book-actions">
                    <Link to={`/book/${book._id}`} className='btn-link btn-edit'>Edit</Link>
                    <Link to={`/delete/${book._id}`} className='btn-link btn-delete'>Delete</Link>
                </div>
            )}
        </div>
    );
};

export default BookCard;
