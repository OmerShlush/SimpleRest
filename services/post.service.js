import { randomBytes } from 'crypto';

const posts = {};


const getPosts = async () => {
    return posts;
}

const deletePostById = async (id) => {
    delete posts[id];
    return true;
}

const addPost = async (title, content) => {
    const id = randomBytes(4).toString('hex');
    posts[id] = {
        id, title, content
    }
    return posts[id];
}

const getPostById = async (id) => {
    return posts[id];
}

const updatePostById = async (id, title, content) => {
    posts[id] = {
        id, title, content
    }
    return posts[id];
}

const patchPostById = async (id, title, content) => {
    if(!title) title = posts[id].title;
    if(!content) content = posts[id].content;
    posts[id] = {
        id, title, content
    }
    return posts[id];
}
export { getPosts, deletePostById, addPost, getPostById, updatePostById, patchPostById };