/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon22Icon(props: Icon22IconProps) {
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
        fill={"#000"}
        fillRule={"nonzero"}
        d={
          "M12.6 20.2c-4.19 0-7.6-3.41-7.6-7.6S8.41 5 12.6 5s7.6 3.41 7.6 7.6-3.41 7.6-7.6 7.6"
        }
        opacity={".35"}
      ></path>

      <circle
        cx={"0"}
        cy={"0"}
        r={"37"}
        fill={"#60a829"}
        fillRule={"nonzero"}
        opacity={"1"}
        transform={"matrix(.2 0 0 .2 12 12)"}
      ></circle>

      <path
        fill={"#fffeee"}
        fillRule={"nonzero"}
        d={
          "m10.89 15.218-3.306-3.306 1.132-1.132 2.196 2.198 4.396-4.196 1.108 1.154z"
        }
        opacity={"1"}
      ></path>

      <g transform={"matrix(.2 0 0 .2 12 12)"}>
        <linearGradient
          id={"a"}
          x1={"42.834"}
          x2={"56.945"}
          y1={"11.124"}
          y2={"87.679"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop offset={".4%"} stopColor={"#ffe8c7"} stopOpacity={"1"}></stop>

          <stop offset={"34.9%"} stopColor={"#f9d4a0"} stopOpacity={"1"}></stop>

          <stop offset={"100%"} stopColor={"#ebab4d"} stopOpacity={"1"}></stop>
        </linearGradient>

        <path
          fill={"url(#a)"}
          fillRule={"nonzero"}
          d={
            "M50 88c-20.953 0-38-17.047-38-38s17.047-38 38-38 38 17.047 38 38-17.047 38-38 38m0-74c-19.851 0-36 16.149-36 36s16.149 36 36 36 36-16.149 36-36-16.149-36-36-36m-5.55 53.086a1 1 0 0 1-.707-.293L27.214 50.266a.997.997 0 0 1 0-1.414l5.657-5.657a1 1 0 0 1 1.414 0L44.581 53.49l21.268-20.3a1 1 0 0 1 1.412.031l5.54 5.771a.996.996 0 0 1-.032 1.415L45.141 66.809a1 1 0 0 1-.691.277M29.335 49.559l15.131 15.129 26.197-25.033-4.155-4.328L45.255 55.61a1 1 0 0 1-1.397-.017l-10.28-10.278z"
          }
          opacity={"1"}
          transform={"translate(-50 -50)"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon22Icon;
/* prettier-ignore-end */
