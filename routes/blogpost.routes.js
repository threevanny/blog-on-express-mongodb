const express = require('express');
const router = express.Router();

const {
  renderFormBlogpost,
  createBlogspost,
  updateBlogspost,
  deleteBlogspost
} = require('../controllers/blogpost.controller')

router.get('/article/create', renderFormBlogpost);
router.post('/article/create', createBlogspost);
router.post('/article/update/:id', updateBlogspost);
router.post('/article/delete/:id', deleteBlogspost);

module.exports = router;
