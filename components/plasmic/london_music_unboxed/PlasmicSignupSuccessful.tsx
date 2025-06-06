/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 43GLDCvnvwFaSntiZWsgtz
// Component: 4U1b-kLhmXSd

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantsiz19XCyodOuv } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Iz19XCyodOuv/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 43GLDCvnvwFaSntiZWsgtz/projectcss
import sty from "./PlasmicSignupSuccessful.module.css"; // plasmic-import: 4U1b-kLhmXSd/css

createPlasmicElementProxy;

export type PlasmicSignupSuccessful__VariantMembers = {};
export type PlasmicSignupSuccessful__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignupSuccessful__VariantsArgs;
export const PlasmicSignupSuccessful__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSignupSuccessful__ArgsType = {};
type ArgPropType = keyof PlasmicSignupSuccessful__ArgsType;
export const PlasmicSignupSuccessful__ArgProps = new Array<ArgPropType>();

export type PlasmicSignupSuccessful__OverridesType = {
  root?: Flex__<"div">;
  register?: Flex__<"div">;
  section?: Flex__<"section">;
  text?: Flex__<"div">;
};

export interface DefaultSignupSuccessfulProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSignupSuccessful__RenderFunc(props: {
  variants: PlasmicSignupSuccessful__VariantsArgs;
  args: PlasmicSignupSuccessful__ArgsType;
  overrides: PlasmicSignupSuccessful__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsiz19XCyodOuv()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"register"}
            data-plasmic-override={overrides.register}
            className={classNames(projectcss.all, sty.register)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__gnli)}>
              <section
                data-plasmic-name={"section"}
                data-plasmic-override={overrides.section}
                className={classNames(projectcss.all, sty.section)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__a4PDi)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/london_music_unboxed/images/logoExportLmuArtboard2Copy4Png.png",
                    fullWidth: 3438,
                    fullHeight: 1065,
                    aspectRatio: undefined
                  }}
                />

                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__j9H5G)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"43.66%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/london_music_unboxed/images/asset19Png.png",
                    fullWidth: 3468,
                    fullHeight: 2506,
                    aspectRatio: undefined
                  }}
                />

                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__iJkcA
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{"You won't "}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#9C9CE2" }}
                    >
                      {"believe"}
                    </span>
                    <React.Fragment>{" what happens next."}</React.Fragment>
                  </React.Fragment>
                </h1>
              </section>
              <div className={classNames(projectcss.all, sty.freeBox__lxpOw)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__xC4A)}
                >
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1___3MAt
                    )}
                  >
                    {"Your account has been successfully created!!"}
                  </h1>
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {
                      "Check your emaiil to verify your email and then proceed to setup your account"
                    }
                  </div>
                </Stack__>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "register", "section", "text"],
  register: ["register", "section", "text"],
  section: ["section"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  register: "div";
  section: "section";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignupSuccessful__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignupSuccessful__VariantsArgs;
    args?: PlasmicSignupSuccessful__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignupSuccessful__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSignupSuccessful__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSignupSuccessful__ArgProps,
          internalVariantPropNames: PlasmicSignupSuccessful__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignupSuccessful__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignupSuccessful";
  } else {
    func.displayName = `PlasmicSignupSuccessful.${nodeName}`;
  }
  return func;
}

export const PlasmicSignupSuccessful = Object.assign(
  // Top-level PlasmicSignupSuccessful renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    register: makeNodeComponent("register"),
    section: makeNodeComponent("section"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicSignupSuccessful
    internalVariantProps: PlasmicSignupSuccessful__VariantProps,
    internalArgProps: PlasmicSignupSuccessful__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSignupSuccessful;
/* prettier-ignore-end */
