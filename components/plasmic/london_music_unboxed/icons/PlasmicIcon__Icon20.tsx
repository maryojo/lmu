/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
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
          "M10 2 9 3H4v2h16V3h-5l-1-1zM5 7v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7zm3 2h2v11H8zm6 0h2v11h-2z"
        }
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
