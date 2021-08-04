import classes from "../../styles.scss";

export default function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
