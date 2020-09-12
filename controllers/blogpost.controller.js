const blogpostCtrl = {};

const Blogpost = require('../models/Blogpost');

blogpostCtrl.renderFormBlogpost = (req, res, next) => {
  res.render('blogpost_form', { title: 'form blogpost' });
};

blogpostCtrl.createBlogpost = (req, res, next) => {

};

blogpostCtrl.updateBlogpost = (req, res, next) => {

};

blogpostCtrl.deleteBlogpost = (req, res, next) => {

};

module.exports = blogpostCtrl;