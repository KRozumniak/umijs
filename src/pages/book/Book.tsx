import styles from "../index.less";
import { connect } from "umi";
import { useEffect } from "react";
import BookCreate from './BookCreate';
import BookDelete from "@/pages/book/BookDelete";

function Book(props: any) {

  const { booklist = [] } = props;

  useEffect(() => {
    props.getBooks();
  }, []);

  return (
    <div>
      <BookCreate />
      <h1>Books</h1>
      {
        booklist.map(el => <li key={el._id}>
          {el.name} - {el.createdAt} -
          <button onClick={() => props.deleteBook(el._id)}>
            Delete
          </button>
        </li>)
      }
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  booklist: state.Book.list,
});

const mapDispatchToProps = (dispatch: any) => ({
  getBooks: () => dispatch({ type: "Book/getBooks" }),
  deleteBook: (bookId: any) => dispatch({ type: "Book/deleteBook", payload: bookId }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
