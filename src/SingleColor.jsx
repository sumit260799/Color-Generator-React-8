import React from "react";
import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  const { hex, weight } = color;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy color to clipboard");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };

  return (
    <article
      className={index > 13 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <div className="mt-12 font-normal tracking-wide">
        <p className="percent-value">{weight}%</p>
        <p className="color-value">#{hex}</p>
      </div>
    </article>
  );
}

export default SingleColor;
