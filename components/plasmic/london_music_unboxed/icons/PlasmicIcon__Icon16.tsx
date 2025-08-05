/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeDasharray={"none"}
        strokeDashoffset={"0"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"4"}
        strokeWidth={"1.245"}
        d={
          "M11.378 12.925h1.072v3.206l3.665-3.206h3.94c.709 0 1.283-.575 1.282-1.284V3.95a1.28 1.28 0 0 0-1.282-1.286H8.514A1.28 1.28 0 0 0 7.227 3.95v5.354"
        }
        opacity={"1"}
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeDasharray={"none"}
        strokeDashoffset={"0"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"4"}
        strokeWidth={"1.245"}
        d={"M12.697 10.548V5.235l4.416 2.656z"}
        opacity={"1"}
      ></path>

      <circle
        cx={"0"}
        cy={"0"}
        r={"3"}
        fill={"none"}
        stroke={"currentColor"}
        strokeDasharray={"none"}
        strokeDashoffset={"0"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"4"}
        strokeWidth={"1.5"}
        opacity={"1"}
        transform={"matrix(.83 0 0 .83 6.397 13.867)"}
      ></circle>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeDasharray={"none"}
        strokeDashoffset={"0"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"4"}
        strokeWidth={"1.245"}
        d={"M10.133 21.338a3.735 3.735 0 0 0-7.47 0"}
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
