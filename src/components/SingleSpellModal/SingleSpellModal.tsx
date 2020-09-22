import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@material-ui/core";

const SingleSpellModal = ({ isOpen, setOpen, spell }) => {
  const {
    name,
    casting_time,
    classes,
    components,
    desc,
    duration,
    level,
    material,
    range,
    ritual,
    school,
    subclasses,
  } = spell;
  const handleClose = () => setOpen(false);
  return Object.keys(spell).length ? (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{name}</DialogTitle>
      <DialogContent>
        <Typography>{desc.join("\n")}</Typography>
        <Typography>
          Classes: {classes.map((elem) => elem.name).join(" & ")}
        </Typography>
        <Typography>Level{level}</Typography>
        <Typography>Range: {range}</Typography>
        <Typography>Casting Time: {casting_time}</Typography>
        <Typography>Duration: {duration}</Typography>
        <Typography>Ritual: {ritual ? "True" : "False"}</Typography>
        <Typography>School: {school.name}</Typography>
        <Typography>Material: {material}</Typography>
        <Typography>Components: {components.join(", ")}</Typography>
      </DialogContent>
    </Dialog>
  ) : null;
};

export default SingleSpellModal;
