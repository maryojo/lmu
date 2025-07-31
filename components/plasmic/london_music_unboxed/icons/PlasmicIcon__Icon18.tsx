/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
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
        fill={"currentColor"}
        fillRule={"nonzero"}
        d={
          "M1.99 1.99v20.02h20.02V6.17l-.256-.284-3.64-3.64-.284-.256Zm1.82 1.82h2.73v5.46h10.92V4.208l2.73 2.73V20.19h-1.82V12H5.63v8.19H3.81Zm4.55 0H12v1.82h1.82V3.81h1.82v3.64H8.36Zm-.91 10.01h9.1v6.37h-9.1Z"
        }
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
