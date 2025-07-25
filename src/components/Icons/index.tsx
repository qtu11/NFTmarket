import Svg, { G, Path } from "react-native-svg";
import { DataIcons, IconSvg } from "./types";
import React from "react";

interface IconsProps {
    name: IconSvg;
    width?: number;
    height?: number;
    color?: string;
  }

const SvgIcons: DataIcons = {
    menu: <Svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M4 6l16 0" /><Path d="M4 12l16 0" /><Path d="M4 18l16 0" /></Svg> 
}

const Icons: React.FC<IconsProps> = ({ name, width, height, color }) => {
    return React.cloneElement(SvgIcons[name], {
      width,
      height,
      color,
    });
  };
  
  export default Icons;