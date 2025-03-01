import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true 
        },
        published: {
            type: String,
            required: true 
        }
    
},  {timestamps: true});

const Book = mongoose.model('Book', bookSchema)

export default Book;