import { Fragment } from "react";
import classes from "./DeleteModal.module.css";

const Modal = (props) => {
  return (
    <Fragment>
      <div className={classes.deleteContainer} onClick={props.onDelete}>
        <span className={classes.delete}>Delete reply</span>
      </div>
    </Fragment>
  );
};

const DeleteModal = (props) => {
  return (
    <Fragment>
      <Modal onDelete={props.onClick} />
    </Fragment>
  );
};

export default DeleteModal;
