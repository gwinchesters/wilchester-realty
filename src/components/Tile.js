/* External Dependencies */
import React from "react";
import PropTypes from "prop-types";

const Tile = ({ type, isVertical, keyVal, children }) => {
  const vert = isVertical ? "is-vertical" : "";
  const classValue = "tile " + vert + " " + type;
  return (
    <div className={classValue} key={keyVal}>
      {children}
    </div>
  );
};

Tile.propTypes = {
  type: PropTypes.string,
  isVertical: PropTypes.bool,
  keyVal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any
};

export default Tile;
