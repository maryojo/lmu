/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
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
          "M10.34 2.04c-.434 0-.879.152-1.193.467-.315.314-.467.759-.467 1.193v.83H3.7v1.66h.83v13.28a2.503 2.503 0 0 0 2.49 2.49h9.96a2.503 2.503 0 0 0 2.49-2.49V6.19h.83V4.53h-4.98V3.7c0-.434-.152-.879-.467-1.193-.314-.315-.759-.467-1.193-.467Zm0 1.66h3.32v.83h-3.32ZM6.19 6.19h11.62v13.28c0 .46-.37.83-.83.83H7.02c-.46 0-.83-.37-.83-.83Zm1.66 2.49v9.13h1.66V8.68Zm3.32 0v9.13h1.66V8.68Zm3.32 0v9.13h1.66V8.68Z"
        }
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
