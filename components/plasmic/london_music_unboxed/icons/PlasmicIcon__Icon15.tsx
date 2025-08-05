/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
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
          "M2.815 1.98a.83.83 0 0 0-.835.835v18.37c0 .463.372.835.835.835h18.37a.83.83 0 0 0 .835-.835V2.815a.83.83 0 0 0-.835-.835h-6.68a.83.83 0 0 0-.835.835V5.32h-3.34V2.815a.83.83 0 0 0-.835-.835Zm.835 1.67h5.01v1.67H5.32v1.67h3.34v10.02H5.32v1.67h3.34v1.67H3.65Zm11.69 0h5.01v1.67h-3.34v1.67h3.34v10.02h-3.34v1.67h3.34v1.67h-5.01Zm-5.01 3.34h3.34v1.67H12v1.67h1.67v6.68H12v1.67h1.67v1.67h-3.34Z"
        }
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
