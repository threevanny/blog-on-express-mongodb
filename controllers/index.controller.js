const indexCtrl = {};

const Blogpost = require('../models/Blogpost');
const User = require('../models/User');

indexCtrl.renderIndex = (req, res, next) => {
  res.render('index', { title: 'Blog' });
};

indexCtrl.renderArticles = () => {

};

indexCtrl.renderAbout = () => {

};

module.exports = indexCtrl;