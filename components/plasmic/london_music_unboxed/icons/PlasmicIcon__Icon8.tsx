/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
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
          "M12 2.025c-.58 0-1.05.47-1.05 1.05v2.1H3.6c-.58 0-1.05.47-1.05 1.05v14.7c0 .58.47 1.05 1.05 1.05h16.8c.58 0 1.05-.47 1.05-1.05V3.075c0-.58-.47-1.05-1.05-1.05zm1.05 2.1h6.3v2.1h-4.2v2.1h4.2v7.35h-4.2v2.1h4.2v2.1h-6.3zm-8.4 3.15h6.3v2.1h-4.2v2.1h4.2v4.2h-4.2v2.1h4.2v2.1h-6.3z"
        }
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
