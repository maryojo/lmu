/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
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
          "M4.16 2.2c-1.21 0-2.205.996-2.205 2.205v13.23c0 1.21.996 2.205 2.205 2.205H7.1c.564 0 1.076-.222 1.468-.576.391.354.904.576 1.472.576h1.253a6.3 6.3 0 0 1-.697-1.47h-.556a.736.736 0 0 1-.735-.735V7.345c0-.405.33-.735.735-.735h2.45c.405 0 .735.33.735.735v3.703a6.3 6.3 0 0 1 1.47-.698V4.405c0-.405.33-.735.735-.735h2.94c.405 0 .735.33.735.735v6.125a6.4 6.4 0 0 1 1.47.866V4.405c0-1.216-.99-2.205-2.205-2.205h-2.94c-1.216 0-2.205.99-2.205 2.205v.87a2.2 2.2 0 0 0-.735-.135h-2.45a2.2 2.2 0 0 0-.735.135v-.87c0-1.21-.996-2.205-2.205-2.205zm0 1.47H7.1c.415 0 .735.32.735.735v13.23c0 .415-.32.735-.735.735H4.16a.724.724 0 0 1-.735-.735V4.405c0-.415.32-.735.735-.735m1.459 1.46a.735.735 0 0 0-.724.745v6.86a.735.735 0 1 0 1.47 0v-6.86a.735.735 0 0 0-.746-.746m11.281.01a.735.735 0 0 0-.735.735v4.19c.162-.013.324-.025.49-.025.334 0 .66.034.98.083V5.875a.735.735 0 0 0-.735-.735m-5.88 2.94a.735.735 0 1 0 0 1.47h.49a.735.735 0 1 0 0-1.47zm5.635 2.94a5.39 5.39 0 1 0 0 10.78 5.39 5.39 0 0 0 0-10.78m2.94 2.94a.49.49 0 0 1 .346.836l-3.92 3.92a.49.49 0 0 1-.692 0l-1.96-1.96a.49.49 0 1 1 .692-.692l1.614 1.613 3.574-3.573a.5.5 0 0 1 .346-.144M5.14 15.43a.735.735 0 1 0 0 1.47h.98a.735.735 0 1 0 0-1.47z"
        }
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Icon11Icon;
/* prettier-ignore-end */
