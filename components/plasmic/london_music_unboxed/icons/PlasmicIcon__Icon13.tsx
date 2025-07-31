/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon13Icon(props: Icon13IconProps) {
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
          "M9.203 9.186a.2.2 0 0 1-.116-.174.19.19 0 0 1 .083-.183 3.735 3.735 0 1 0-4.3 0c.06.04.092.111.083.183a.2.2 0 0 1-.116.174A4.98 4.98 0 0 0 2.04 13.66v2.905c0 .458.372.83.83.83h.938c.215 0 .393.167.407.382l.315 3.61a.63.63 0 0 0 .623.573h3.734a.63.63 0 0 0 .623-.573l.315-3.577a.407.407 0 0 1 .407-.382h.938a.83.83 0 0 0 .83-.83V13.66a4.98 4.98 0 0 0-2.797-4.474M4.945 5.775q0-.287.075-.564a.24.24 0 0 1 .124-.133.2.2 0 0 1 .183 0 4.9 4.9 0 0 0 3.519.597.17.17 0 0 1 .174.05c.05.041.077.102.075.166a2.076 2.076 0 1 1-4.15-.116m5.395 9.545c0 .23-.186.415-.415.415h-5.81a.415.415 0 0 1-.415-.415v-1.66a3.32 3.32 0 0 1 2.216-3.13.18.18 0 0 1 .183 0 .2.2 0 0 1 .091.167v2.316a.83.83 0 0 0 1.66 0v-2.291a.2.2 0 0 1 .091-.166.18.18 0 0 1 .183 0 3.32 3.32 0 0 1 2.216 3.104Z"
        }
        opacity={"1"}
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"nonzero"}
        d={
          "M19.47 2.04h-7.885a.83.83 0 0 0 0 1.66h7.885a.83.83 0 0 1 .83.83v10.79a.83.83 0 0 1-.83.83h-4.98a.83.83 0 0 0 0 1.66h4.98a2.49 2.49 0 0 0 2.49-2.49V4.53a2.49 2.49 0 0 0-2.49-2.49"
        }
        opacity={"1"}
      ></path>

      <circle
        cx={"0"}
        cy={"0"}
        r={"1"}
        fill={"currentColor"}
        fillRule={"nonzero"}
        opacity={"1"}
        transform={"matrix(.83 0 0 .83 14.697 6.489)"}
      ></circle>

      <circle
        cx={"0"}
        cy={"0"}
        r={"1"}
        fill={"currentColor"}
        fillRule={"nonzero"}
        opacity={"1"}
        transform={"matrix(.83 0 0 .83 18.017 6.489)"}
      ></circle>

      <circle
        cx={"0"}
        cy={"0"}
        r={"1"}
        fill={"currentColor"}
        fillRule={"nonzero"}
        opacity={"1"}
        transform={"matrix(.83 0 0 .83 14.697 9.394)"}
      ></circle>

      <circle
        cx={"0"}
        cy={"0"}
        r={"1"}
        fill={"currentColor"}
        fillRule={"nonzero"}
        opacity={"1"}
        transform={"matrix(.83 0 0 .83 18.017 9.394)"}
      ></circle>

      <circle
        cx={"0"}
        cy={"0"}
        r={"1"}
        fill={"currentColor"}
        fillRule={"nonzero"}
        opacity={"1"}
        transform={"matrix(.83 0 0 .83 14.697 12.299)"}
      ></circle>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
