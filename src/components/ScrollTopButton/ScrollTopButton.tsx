import React from "react";

import DoubleArrowOutlinedIcon from "@material-ui/icons/DoubleArrowOutlined";
import { Tooltip, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./ScrollTopButton.scss";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(200deg, #8080ff 10%, #4dff4d 100%)",
    borderRadius: 100,
    padding: 15,
    opacity: 100,
  },
});

const ScrollTopButton = (): JSX.Element => {
  const scrollButtonStyles = useStyles();

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="ScrollTopButton">
      <Tooltip
        title="Scroll to top"
        placement="top"
        aria-label="Scroll to top"
        leaveDelay={500}
      >
        <Paper
          className={`ScrollTopButton__paper ${scrollButtonStyles.root}`}
          square={false}
          variant="outlined"
        >
          <DoubleArrowOutlinedIcon fontSize="large" onClick={scrollToTop} />
        </Paper>
      </Tooltip>
    </div>
  );
};

export default ScrollTopButton;
