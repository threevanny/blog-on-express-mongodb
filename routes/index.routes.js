const express = require('express');
const router = express.Router();

const {
  renderIndex,
  renderArticles,
  renderAbout
} = require('../controllers/index.controller');
const { render } = require('pug');

/* GET home page. */
router.get('/', renderIndex);
router.get('/articles', renderArticles);
router.get('/about', renderAbout);

module.exports = router;