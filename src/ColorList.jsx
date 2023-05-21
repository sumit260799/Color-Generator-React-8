import React from "react";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";
function ColorList({ colors }) {
  return (
    <div className="colr">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </div>
  );
}

export default ColorList;
