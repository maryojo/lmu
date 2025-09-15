/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon23Icon(props: Icon23IconProps) {
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
          "M11.707 15.707a.997.997 0 0 1-1.414 0l-4-4a.999.999 0 1 1 1.414-1.414L11 13.586l8.35-8.35A9.96 9.96 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.94 9.94 0 0 0-1.438-5.148z"
        }
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Icon23Icon;
/* prettier-ignore-end */
