import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    content: {
      margin: "1rem",
      width: "50vw",

    },
  })
);

interface Props {
  open: boolean;
  handleClose: (string) => void;
  children;
  dialogTitle: string;
}

const CustomDialog = ({ open, handleClose, children, dialogTitle }: Props) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      classes={{ paper: classes.content,root:classes.root }}
    >
      <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText></DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
