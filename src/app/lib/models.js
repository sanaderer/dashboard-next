import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true,
        min: 3, 
        max: 10,
    },
    title: {
        type: String,
        required: true,
        min: 3, 
        max: 20,
    },
    description: {
        type: String,
        required: true,
        min: 3, 
        max: 100,
    }, 
    details: {
        type: String,
        required: true,
        min: 3, 
        max: 1000,
    },
    img: {
        type: String,
    },
}, {timestamps: true});

export const Blog = mongoose.models.blogSchema || mongoose.model('Blog', blogSchema);