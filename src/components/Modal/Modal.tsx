import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  header: string;
};

export default function Modal({
  open,
  handleClose,
  children,
  header,
}: ModalProps) {
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>{header}</DialogContentText>
        {children}
      </DialogContent>
    </Dialog>
  );
}
