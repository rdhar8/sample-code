import React, { Component } from 'react';
import './BookTable.css';

class BookTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booklist: []
    };
  }
  componentDidMount() {
    this.getBookList = this.getBookList.bind(this);
    this.getBookList();
  }

  getBookList() {
    fetch("http://localhost:1337/api/booklist", { method: "GET" } )
    .then(response => { if (response.ok) { 
      response.json()
      .then(json => { 
        this.setState({ booklist: json });
        console.log(json);
        });
      }
    })
  }

  render () {
    return (
      <div>
        <h1 style={{textAlign: 'center', color: 'darkcyan', fontSize: '45px', marginBottom: '70px'}}>List of Books</h1>
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Name</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Issued Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.booklist.map(book => (
              <tr key = {book.id}>
                <td>{book.id}</td>
                <td>{book.booktitle}</td>
                <td>{book.authorname}</td>
                <td>{book.genre}</td>
                <td>{book.issuestatus.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default BookTable;