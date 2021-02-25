import styles from "./index.less";
import { connect } from "umi";

function IndexPage(props: any) {
  const count = 5;
  return (
    <div>
      <h1 className={styles.title}>User index </h1>
      <h3>
        <button onClick={props.minusOne}>Minus</button>
        {props.count}
        <button onClick={props.plusOne}>Plus</button>
      </h3>
      {
        props.tasks.map(el =>
        <li key={el.id}>
          {el.task}
        </li>)
      };
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  count: state.Count.count,
  tasks: state.Count.tasks
});

const mapDispatchToProps = (dispatch: any) => ({
  plusOne: () => dispatch({ type: "Count/plusOne" }),
  minusOne: () => dispatch({ type: "Count/minusOne" })
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
