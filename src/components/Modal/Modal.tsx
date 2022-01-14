import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

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
      <DialogContent>
        <DialogContentText>{header}</DialogContentText>
        {children}
      </DialogContent>
    </Dialog>
  );
}
