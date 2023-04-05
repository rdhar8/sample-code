/**
 * BookListController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  returnAll: async (req, res) => {
    let limitPage = 7;
    let skipPage = 0;
    if (typeof req.query.limit !== 'undefined') {
      limitPage = req.query.limit;
    }
    if (typeof req.query.skip !== 'undefined') {
      skipPage = req.query.skip;
    }
    let books = await BookList.find({ limit: limitPage, skip: skipPage }).sort('id ASC');
    let count = await BookList.count({});
    if (books.length > 0) {
      return res.json({ list: books, count: count });
    }
    return res.badRequest('books not found');
  },

  reserveID: async (req, res) => {
    var bookid = req.param('id');
    var user = req.param('userid');
    let book = await BookList.update({ id: bookid }).set( { issuestatus: true, userid: user }).fetch();
    if (book.length > 0) {
      let updatedBook = await BookList.find({ id: bookid });
      return res.send(updatedBook);
    }
    return res.badRequest(`book with id ${bookid} not found`);
  },

  returnID: async (req, res) => {
    var bookid = req.param('id');
    let book = await BookList.update({ id: bookid }).set( { issuestatus: false, userid: null }).fetch();
    if (book.length > 0) {
      let updatedBook = await BookList.find({ id: bookid });
      return res.send(updatedBook);
    }
    return res.badRequest(`book with id ${bookid} not found`);
  }
};

