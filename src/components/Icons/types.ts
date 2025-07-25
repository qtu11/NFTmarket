import React from "react";

export type IconSvg = 'menu';

export type DataIcons = {
    [key in IconSvg]: React.JSX.Element;
  }