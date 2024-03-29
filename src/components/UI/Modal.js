import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

//Material UI Dialog
export const MUIDialog = ({
  rootClass,
  dialogClass,
  open,
  onClose,
  children,
  title,
}) => {
  const handleClose = () => {
    onClose(!open);
  };

  return (
    <Dialog
      classes={{ root: rootClass, paper: dialogClass }}
      onClose={handleClose}
      open={open}
      slotProps={{
        backdrop: {
          sx: {
            background: `repeating-linear-gradient(
              -45deg,
              rgba(0,0,0,0.5),
              rgba(0,0,0,0.5) 5px,
              rgba(0,0,0,0.4) 5px,
              rgba(0,0,0,0.6) 20px
            )`,
          },
        },
      }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      {children}
    </Dialog>
  );
};

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes["modal-content"]}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop {...props} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
