/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 43GLDCvnvwFaSntiZWsgtz
// Component: tmqQ5piW84LA

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

import Button from "../../Button"; // plasmic-import: jI-x_NzEFX2Q/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdPassword } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdPassword_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import { useScreenVariants as useScreenVariantsiz19XCyodOuv } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Iz19XCyodOuv/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 43GLDCvnvwFaSntiZWsgtz/projectcss
import sty from "./PlasmicRegister.module.css"; // plasmic-import: tmqQ5piW84LA/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: yZz0P1JDPQwS/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: -jkcn7GwAM4v/icon

createPlasmicElementProxy;

export type PlasmicRegister__VariantMembers = {};
export type PlasmicRegister__VariantsArgs = {};
type VariantPropType = keyof PlasmicRegister__VariantsArgs;
export const PlasmicRegister__VariantProps = new Array<VariantPropType>();

export type PlasmicRegister__ArgsType = {};
type ArgPropType = keyof PlasmicRegister__ArgsType;
export const PlasmicRegister__ArgProps = new Array<ArgPropType>();

export type PlasmicRegister__OverridesType = {
  root?: Flex__<"div">;
  register?: Flex__<"div">;
  section?: Flex__<"section">;
  form?: Flex__<typeof FormWrapper>;
  columns?: Flex__<"div">;
  input?: Flex__<typeof AntdInput>;
  input2?: Flex__<typeof AntdInput>;
  input3?: Flex__<typeof AntdInput>;
  passwordInput?: Flex__<typeof AntdPassword>;
};

export interface DefaultRegisterProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRegister__RenderFunc(props: {
  variants: PlasmicRegister__VariantsArgs;
  args: PlasmicRegister__ArgsType;
  overrides: PlasmicRegister__OverridesType;
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

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "passwordInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdPassword_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

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
            <div className={classNames(projectcss.all, sty.freeBox__lfCnm)}>
              <section
                data-plasmic-name={"section"}
                data-plasmic-override={overrides.section}
                className={classNames(projectcss.all, sty.section)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__kjcDd)}
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
                  className={classNames(sty.img__jn8Ln)}
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
                    sty.h1__uOx4V
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{"Join Us. "}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#55DABE" }}
                    >
                      {"Start"}
                    </span>
                    <React.Fragment>{""}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#FEB241" }}
                    >
                      {" "}
                    </span>
                    <React.Fragment>{"your music journey."}</React.Fragment>
                  </React.Fragment>
                </h1>
              </section>
              <div className={classNames(projectcss.all, sty.freeBox__ysmsD)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__kAjMh)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__gb9Ww)}
                    displayHeight={"33px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/london_music_unboxed/images/image3.png",
                      fullWidth: 1063,
                      fullHeight: 975,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox__pFrpP)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yU2LG
                      )}
                    >
                      {"Already have an account?"}
                    </div>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__zjDfv
                      )}
                      label={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__wsjt3
                          )}
                        >
                          {"Login"}
                        </div>
                      }
                      linkTo={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? `/login`
                          : `/login`
                      }
                    />
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__jL4I)}
                >
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1___6YhQ
                    )}
                  >
                    {"Register"}
                  </h1>
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.form),
                      extendedOnValuesChange: async (...eventArgs: any) => {
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["form", "value"],
                          FormWrapper_Helpers
                        ).apply(null, eventArgs);
                      },
                      formItems: [
                        { label: "Name", name: "name", inputType: "Text" },
                        {
                          label: "Message",
                          name: "message",
                          inputType: "Text Area"
                        }
                      ],
                      labelCol: { span: 8, horizontalOnly: true },
                      layout: "vertical",
                      mode: "advanced",
                      onFinish: async values => {
                        const $steps = {};

                        $steps["signup"] = true
                          ? (() => {
                              const actionArgs = {
                                args: [
                                  (() => {
                                    try {
                                      return $state.form.value.email;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })(),
                                  (() => {
                                    try {
                                      return $state.form.value.password;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })(),
                                  "/login?registered=true",
                                  undefined,
                                  (() => {
                                    try {
                                      return {
                                        userRole: "student",
                                        isOnboarded: false,
                                        firstName: $state.form.value?.firstName,
                                        lastName: $state.form.value?.lastName,
                                        attemptedQuiz: false,
                                        lastQuizStatus: "UNDEFINED",
                                        lastQuizStarted: "UNDEFINED",
                                        lastQuizCompleted: "UNDEFINED"
                                      };
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()
                                ]
                              };
                              return $globalActions[
                                "SupabaseUserGlobalContext.signup"
                              ]?.apply(null, [...actionArgs.args]);
                            })()
                          : undefined;
                        if (
                          $steps["signup"] != null &&
                          typeof $steps["signup"] === "object" &&
                          typeof $steps["signup"].then === "function"
                        ) {
                          $steps["signup"] = await $steps["signup"];
                        }
                      },
                      onIsSubmittingChange: async (...eventArgs: any) => {
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "isSubmitting",
                          ["form", "isSubmitting"],
                          FormWrapper_Helpers
                        ).apply(null, eventArgs);
                      },
                      ref: ref => {
                        $refs["form"] = ref;
                      },
                      requiredMark: false,
                      submitSlot: null,
                      wrapperCol: { span: 16, horizontalOnly: true }
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "form.value"
                        },
                        {
                          name: "isSubmitting",
                          plasmicStateName: "form.isSubmitting"
                        }
                      ],
                      [],
                      FormWrapper_Helpers ?? {},
                      child$Props
                    );

                    return (
                      <FormWrapper
                        data-plasmic-name={"form"}
                        data-plasmic-override={overrides.form}
                        {...child$Props}
                      >
                        <Stack__
                          as={"div"}
                          data-plasmic-name={"columns"}
                          data-plasmic-override={overrides.columns}
                          hasGap={true}
                          className={classNames(projectcss.all, sty.columns)}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__q9OZb
                            )}
                          >
                            <FormItemWrapper
                              className={classNames(
                                "__wab_instance",
                                sty.formField__i5K28
                              )}
                              label={"First Name"}
                              name={"firstName"}
                              rules={[
                                {
                                  ruleType: "required",
                                  message: "First name is required"
                                }
                              ]}
                            >
                              {(() => {
                                const child$Props = {
                                  className: classNames(
                                    "__wab_instance",
                                    sty.input
                                  ),
                                  onChange: async (...eventArgs: any) => {
                                    generateStateOnChangePropForCodeComponents(
                                      $state,
                                      "value",
                                      ["input", "value"],
                                      AntdInput_Helpers
                                    ).apply(null, eventArgs);
                                  },
                                  value: generateStateValueProp($state, [
                                    "input",
                                    "value"
                                  ])
                                };
                                initializeCodeComponentStates(
                                  $state,
                                  [
                                    {
                                      name: "value",
                                      plasmicStateName: "input.value"
                                    }
                                  ],
                                  [],
                                  AntdInput_Helpers ?? {},
                                  child$Props
                                );

                                return (
                                  <AntdInput
                                    data-plasmic-name={"input"}
                                    data-plasmic-override={overrides.input}
                                    {...child$Props}
                                  />
                                );
                              })()}
                            </FormItemWrapper>
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__qjsPs
                            )}
                          >
                            <FormItemWrapper
                              className={classNames(
                                "__wab_instance",
                                sty.formField__jEzdH
                              )}
                              label={"Last Name"}
                              name={"lastName"}
                              rules={[
                                {
                                  ruleType: "required",
                                  message: "Last name is required"
                                }
                              ]}
                            >
                              {(() => {
                                const child$Props = {
                                  className: classNames(
                                    "__wab_instance",
                                    sty.input2
                                  ),
                                  onChange: async (...eventArgs: any) => {
                                    generateStateOnChangePropForCodeComponents(
                                      $state,
                                      "value",
                                      ["input2", "value"],
                                      AntdInput_Helpers
                                    ).apply(null, eventArgs);
                                  },
                                  value: generateStateValueProp($state, [
                                    "input2",
                                    "value"
                                  ])
                                };
                                initializeCodeComponentStates(
                                  $state,
                                  [
                                    {
                                      name: "value",
                                      plasmicStateName: "input2.value"
                                    }
                                  ],
                                  [],
                                  AntdInput_Helpers ?? {},
                                  child$Props
                                );

                                return (
                                  <AntdInput
                                    data-plasmic-name={"input2"}
                                    data-plasmic-override={overrides.input2}
                                    {...child$Props}
                                  />
                                );
                              })()}
                            </FormItemWrapper>
                          </div>
                        </Stack__>
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__s7JgJ
                          )}
                          label={"Email"}
                          name={"email"}
                          rules={[
                            {
                              ruleType: "required",
                              message: "Email address is required"
                            }
                          ]}
                        >
                          {(() => {
                            const child$Props = {
                              className: classNames(
                                "__wab_instance",
                                sty.input3
                              ),
                              onChange: async (...eventArgs: any) => {
                                generateStateOnChangePropForCodeComponents(
                                  $state,
                                  "value",
                                  ["input3", "value"],
                                  AntdInput_Helpers
                                ).apply(null, eventArgs);
                              },
                              value: generateStateValueProp($state, [
                                "input3",
                                "value"
                              ])
                            };
                            initializeCodeComponentStates(
                              $state,
                              [
                                {
                                  name: "value",
                                  plasmicStateName: "input3.value"
                                }
                              ],
                              [],
                              AntdInput_Helpers ?? {},
                              child$Props
                            );

                            return (
                              <AntdInput
                                data-plasmic-name={"input3"}
                                data-plasmic-override={overrides.input3}
                                {...child$Props}
                              />
                            );
                          })()}
                        </FormItemWrapper>
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__nMnLu
                          )}
                          label={"Password"}
                          name={"password"}
                          rules={[
                            {
                              ruleType: "required",
                              message: "Password is required"
                            },

                            {
                              ruleType: "min",
                              length: 6,
                              message: "Password must be at least 6 characters"
                            }
                          ]}
                        >
                          {(() => {
                            const child$Props = {
                              className: classNames(
                                "__wab_instance",
                                sty.passwordInput
                              ),
                              onChange: async (...eventArgs: any) => {
                                generateStateOnChangePropForCodeComponents(
                                  $state,
                                  "value",
                                  ["passwordInput", "value"],
                                  AntdPassword_Helpers
                                ).apply(null, eventArgs);
                              },
                              value: generateStateValueProp($state, [
                                "passwordInput",
                                "value"
                              ])
                            };
                            initializeCodeComponentStates(
                              $state,
                              [
                                {
                                  name: "value",
                                  plasmicStateName: "passwordInput.value"
                                }
                              ],
                              [],
                              AntdPassword_Helpers ?? {},
                              child$Props
                            );

                            return (
                              <AntdPassword
                                data-plasmic-name={"passwordInput"}
                                data-plasmic-override={overrides.passwordInput}
                                {...child$Props}
                              />
                            );
                          })()}
                        </FormItemWrapper>
                        <AntdButton
                          className={classNames(
                            "__wab_instance",
                            sty.button___6Ca
                          )}
                          disabled={(() => {
                            try {
                              return $state.form.isSubmitting;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                          submitsForm={true}
                          type={"primary"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__fwt4B
                            )}
                          >
                            {"Register"}
                          </div>
                        </AntdButton>
                      </FormWrapper>
                    );
                  })()}
                </Stack__>
                <div
                  className={classNames(projectcss.all, sty.freeBox__c5YY0)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "register",
    "section",
    "form",
    "columns",
    "input",
    "input2",
    "input3",
    "passwordInput"
  ],
  register: [
    "register",
    "section",
    "form",
    "columns",
    "input",
    "input2",
    "input3",
    "passwordInput"
  ],
  section: ["section"],
  form: ["form", "columns", "input", "input2", "input3", "passwordInput"],
  columns: ["columns", "input", "input2"],
  input: ["input"],
  input2: ["input2"],
  input3: ["input3"],
  passwordInput: ["passwordInput"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  register: "div";
  section: "section";
  form: typeof FormWrapper;
  columns: "div";
  input: typeof AntdInput;
  input2: typeof AntdInput;
  input3: typeof AntdInput;
  passwordInput: typeof AntdPassword;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRegister__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRegister__VariantsArgs;
    args?: PlasmicRegister__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRegister__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRegister__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicRegister__ArgProps,
          internalVariantPropNames: PlasmicRegister__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRegister__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRegister";
  } else {
    func.displayName = `PlasmicRegister.${nodeName}`;
  }
  return func;
}

export const PlasmicRegister = Object.assign(
  // Top-level PlasmicRegister renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    register: makeNodeComponent("register"),
    section: makeNodeComponent("section"),
    form: makeNodeComponent("form"),
    columns: makeNodeComponent("columns"),
    input: makeNodeComponent("input"),
    input2: makeNodeComponent("input2"),
    input3: makeNodeComponent("input3"),
    passwordInput: makeNodeComponent("passwordInput"),

    // Metadata about props expected for PlasmicRegister
    internalVariantProps: PlasmicRegister__VariantProps,
    internalArgProps: PlasmicRegister__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicRegister;
/* prettier-ignore-end */
