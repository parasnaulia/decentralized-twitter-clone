import React from "react";
import { useState } from "react";
import "./SidebarOption.css";

function SidebarOption({ text, Icon, onPress, href }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>
        <a href={href} target="_blank" className="anchor">
          {text}
        </a>
      </h2>
    </div>
  );
}

export default SidebarOption;
