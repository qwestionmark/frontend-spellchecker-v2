import React from "react";

import DoubleArrowOutlinedIcon from "@material-ui/icons/DoubleArrowOutlined";
import { Tooltip } from "@material-ui/core";
import "./ScrollTopButton";

const ScrollTopButton = (): JSX.Element => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Tooltip
      title="Scroll to top"
      placement="top"
      aria-label="Scroll to top"
      leaveDelay={750}
    >
      <DoubleArrowOutlinedIcon
        className="ScrollTopButton"
        fontSize="large"
        onClick={scrollToTop}
      />
    </Tooltip>
  );
};

export default ScrollTopButton;
