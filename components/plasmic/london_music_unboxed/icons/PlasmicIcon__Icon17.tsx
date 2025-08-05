/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon17Icon(props: Icon17IconProps) {
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
          "M18.582 2.028a3.36 3.36 0 0 0-2.384 1L3.232 15.992l-.051.257-.897 4.51-.256 1.204 1.204-.256 4.51-.897.256-.051L20.965 7.793a3.34 3.34 0 0 0 0-4.766 3.36 3.36 0 0 0-2.383-1m0 1.563c.413 0 .83.189 1.23.59.797.797.797 1.662 0 2.46l-.59.563-2.434-2.434.564-.59c.4-.4.816-.59 1.23-.59m-2.947 2.332 2.434 2.434-9.917 9.917a5.6 5.6 0 0 0-2.434-2.434ZM4.667 17.173a3.88 3.88 0 0 1 2.153 2.152l-2.691.538Z"
        }
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
