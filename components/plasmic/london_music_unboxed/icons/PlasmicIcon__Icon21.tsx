/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon21Icon(props: Icon21IconProps) {
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

      <path fill={"none"} d={"M0 0h24v24H0z"} opacity={"1"}></path>

      <circle
        cx={"0"}
        cy={"0"}
        r={"9"}
        fill={"none"}
        stroke={"currentColor"}
        strokeDasharray={"none"}
        strokeDashoffset={"0"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"4"}
        strokeWidth={"2"}
        opacity={"1"}
        transform={"translate(12 12)"}
      ></circle>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeDasharray={"none"}
        strokeDashoffset={"0"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"4"}
        strokeWidth={"2"}
        d={"M9 12h6m-3-3v6"}
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */
