import express from 'express';
import { addPost, deletePostById, getPostById, getPosts, patchPostById, updatePostById } from '../services/post.service.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await getPosts();
    res.status(200).send(posts);
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const post = await getPostById(id);
    res.status(200).send(post);
})

router.delete('/', async (req, res) => {
    const { id } = req.body;
    await deletePostById(id);
    res.status(200).send({message: `Post with id: ${id} deleted.`});
})

router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const newPost = await addPost(title, content);
    res.status(200).send(newPost);
})

router.put('/', async (req, res) => {
    const { id, title, content } = req.body;
    const updatedPost = await updatePostById(id, title, content);
    res.status(200).send(updatedPost);
})

router.patch('/', async (req, res) => {
    const { id, title, content } = req.body;
    const updatedPost = await patchPostById(id, title, content);
    res.status(200).send(updatedPost);
})
export { router };