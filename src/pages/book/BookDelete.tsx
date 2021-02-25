import styles from "../index.less";
import { connect } from "umi";

function BookDelete(props: any) {

  const { bookList = [] } = props;

  return (
    <div>
      <button onClick={() => props.deleteBook(bookList.list._id)}>
        Delete
      </button>
    </div>
  );
}
  const mapStateToProps = (state: any) => ({
    booklist: state.Book.list,
  });

const mapDispatchToProps = (dispatch: any) => ({
  deleteBook: (bookId: any) => dispatch({ type: "Book/deleteBook", payload: bookId }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDelete);
