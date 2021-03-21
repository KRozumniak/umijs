import { connect } from "umi";

function BookDelete(props: any) {
  const { bookList = [] } = props;

  const deleteBookHandler = () => {
    props.deleteBook(bookList.list._id)
  }

  return (
    <div>
      <button onClick={deleteBookHandler}>
        Delete Book
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
