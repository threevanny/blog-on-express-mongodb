const express = require('express');
const router = express.Router();

const {
  renderFormBlogpost,
  createBlogpost,
  updateBlogpost,
  deleteBlogpost
} = require('../controllers/blogpost.controller')

router.get('/article/create', renderFormBlogpost);
router.post('/article/create', createBlogpost);
router.post('/article/update/:id', updateBlogpost);
router.post('/article/delete/:id', deleteBlogpost);

module.exports = router;
