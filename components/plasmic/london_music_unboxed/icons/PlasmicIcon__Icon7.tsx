/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"524.56 464.38 190.89 171.24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M715.444 470.071v105.672c0 5.892-3.008 11.336-7.89 14.281l-57.301 34.57-8.582 5.182c-6.34 3.828-13.533 5.844-20.855 5.844-7.317 0-14.504-2.012-20.841-5.835l-8.604-5.19-58.926-35.553c-4.882-2.945-7.889-8.389-7.889-14.281v-104.69c0-3.143 2.438-5.691 5.445-5.691h80.1c3.007 0 5.445 2.548 5.445 5.691v148.832c0 3.143 2.438 5.691 5.445 5.691s5.445-2.548 5.445-5.691V470.071c0-3.143 2.438-5.691 5.445-5.691h78.117c3.007 0 5.445 2.548 5.445 5.691Z"
        }
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
