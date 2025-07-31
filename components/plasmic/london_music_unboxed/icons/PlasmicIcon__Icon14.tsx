/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
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
          "M20.215 2.46h-2.65a1.857 1.857 0 0 0-1.855 1.855v15.37c0 1.023.832 1.855 1.855 1.855h2.65a1.857 1.857 0 0 0 1.855-1.855V4.315a1.857 1.857 0 0 0-1.855-1.855m-2.12 3.445a.795.795 0 1 1 1.59 0v7.95a.795.795 0 1 1-1.59 0zm1.59 12.985h-1.59a.795.795 0 1 1 0-1.59h1.59a.795.795 0 1 1 0 1.59M6.435 2.46h-2.65A1.857 1.857 0 0 0 1.93 4.315v15.37c0 1.023.832 1.855 1.855 1.855h2.65a1.857 1.857 0 0 0 1.855-1.855V4.315A1.857 1.857 0 0 0 6.435 2.46m-2.12 3.445a.795.795 0 1 1 1.59 0v7.95a.795.795 0 1 1-1.59 0zm1.59 12.985h-1.59a.795.795 0 1 1 0-1.59h1.59a.795.795 0 1 1 0 1.59m6.89-13.25h-1.59A1.857 1.857 0 0 0 9.35 7.495v12.19c0 1.023.832 1.855 1.855 1.855h1.59a1.857 1.857 0 0 0 1.855-1.855V7.495a1.857 1.857 0 0 0-1.855-1.855m-.53 13.25h-.53a.795.795 0 1 1 0-1.59h.53a.795.795 0 1 1 0 1.59m0-9.01h-.53a.795.795 0 1 1 0-1.59h.53a.795.795 0 1 1 0 1.59"
        }
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
