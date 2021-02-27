import styles from "../index.less";
import { connect } from "umi";
import { useEffect } from "react";
import BookCreate from './BookCreate';
import { Button } from 'antd';
import BookModal from "@/pages/book/BookModal";

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
        booklist.map((el: any) => <li key={el._id}>
          {el.name} - {el.createdAt} -
          <Button type='ghost' onClick={() => props.deleteBook(el._id)}>
            Delete
          </Button>
          <BookModal key={el._id} id={el._id}/>
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
