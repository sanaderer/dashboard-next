import { Blog } from '../lib/models';
import { connectToDatabase } from './utils';

export const fetchBlogs = async () => {
    try {
        connectToDatabase();
        const blogs = await Blog.find();
        return blogs
    } catch(err) {
        console.log(err);
        throw new Error('Failed to fetch blogs');
    }
}