import React from "react";
import { Dialog, Typography } from "@material-ui/core";

const SingleSpellModal = ({ isOpen, setOpen, spell }) => {
  const handleClose = () => setOpen && setOpen(false);
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      {spell.name}
    </Dialog>
  );
};

export default SingleSpellModal;
