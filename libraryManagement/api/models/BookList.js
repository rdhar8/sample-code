/**
 * BookList.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

BookList = {

  tableName: 'booklist',


  attributes: {
    id: {type: 'number', required: true, unique: true, columnName: 'bookid'},
    booktitle: {type: 'string', maxLength: 50, required: true},
    authorname: {type: 'string', maxLength: 30},
    genre: {type: 'string', maxLength: 20},
    issuestatus: {type: 'boolean', required: true},
    userid: {type: 'number', allowNull: true}
  },

  datastore: 'postgresqlDB',

};

module.exports = BookList;

