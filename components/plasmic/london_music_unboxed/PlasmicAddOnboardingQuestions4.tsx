/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 43GLDCvnvwFaSntiZWsgtz
// Component: Rgp-m8eUJXH4

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import PageLayout from "../../PageLayout"; // plasmic-import: NXXR6Sd3NRz9/component
import Button from "../../Button"; // plasmic-import: jI-x_NzEFX2Q/component
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/SchemaForm";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import Unauthorized from "../../Unauthorized"; // plasmic-import: ZnrbZI7AiPSe/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 43GLDCvnvwFaSntiZWsgtz/projectcss
import sty from "./PlasmicAddOnboardingQuestions4.module.css"; // plasmic-import: Rgp-m8eUJXH4/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: yZz0P1JDPQwS/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: -jkcn7GwAM4v/icon

createPlasmicElementProxy;

export type PlasmicAddOnboardingQuestions4__VariantMembers = {};
export type PlasmicAddOnboardingQuestions4__VariantsArgs = {};
type VariantPropType = keyof PlasmicAddOnboardingQuestions4__VariantsArgs;
export const PlasmicAddOnboardingQuestions4__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAddOnboardingQuestions4__ArgsType = {};
type ArgPropType = keyof PlasmicAddOnboardingQuestions4__ArgsType;
export const PlasmicAddOnboardingQuestions4__ArgProps =
  new Array<ArgPropType>();

export type PlasmicAddOnboardingQuestions4__OverridesType = {
  root?: Flex__<typeof PageLayout>;
  h5?: Flex__<"h5">;
  allQuizzesTable?: Flex__<typeof RichTable>;
  modal?: Flex__<typeof AntdModal>;
  form2?: Flex__<typeof FormWrapper>;
  section?: Flex__<"section">;
  unauthorized?: Flex__<typeof Unauthorized>;
};

export interface DefaultAddOnboardingQuestions4Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAddOnboardingQuestions4__RenderFunc(props: {
  variants: PlasmicAddOnboardingQuestions4__VariantsArgs;
  args: PlasmicAddOnboardingQuestions4__ArgsType;
  overrides: PlasmicAddOnboardingQuestions4__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "allQuizzesTable.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "allQuizzesTable.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "allQuizzesTable.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "allQuizzesTable.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKeys", RichTable_Helpers)
      },
      {
        path: "form2.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form2",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form2.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form2",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "fullFormValues",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "selectedQuizInfo",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return null;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
      },
      {
        path: "selectedRowId",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return null;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    getOnboardingQuizzes: usePlasmicDataOp(() => {
      return {
        sourceId: "6C2N6jYLs31t3Z2ygT9rD6",
        opId: "4853205b-c7e6-4fad-90f8-e9c574f6b3d4",
        userArgs: {},
        cacheKey: `plasmic.$.4853205b-c7e6-4fad-90f8-e9c574f6b3d4.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <PageLayout
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames("__wab_instance", sty.root)}
        >
          <DataCtxReader__>
            {$ctx => (
              <React.Fragment>
                {(() => {
                  try {
                    return (
                      $ctx?.SupabaseUser?.user !== null &&
                      $ctx?.SupabaseUser?.user?.user_metadata.userRole ===
                        "admin"
                    );
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })() ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__hjnLy)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__cG63X)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__bIpZl
                        )}
                      >
                        <h5
                          data-plasmic-name={"h5"}
                          data-plasmic-override={overrides.h5}
                          className={classNames(
                            projectcss.all,
                            projectcss.h5,
                            projectcss.__wab_text,
                            sty.h5
                          )}
                        >
                          {"Onboarding Quiz"}
                        </h5>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__uwmlT
                          )}
                        >
                          {"Enter some text"}
                        </div>
                      </div>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__qE2YI
                        )}
                        label={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__qhokz
                            )}
                          >
                            {"Add New Quiz"}
                          </div>
                        }
                        onClick={async event => {
                          const $steps = {};

                          $steps["updateModalOpen"] = true
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["modal", "open"]
                                  },
                                  operation: 0,
                                  value: true
                                };
                                return (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
                                  if (!variable) {
                                    return;
                                  }
                                  const { objRoot, variablePath } = variable;

                                  $stateSet(objRoot, variablePath, value);
                                  return value;
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["updateModalOpen"] != null &&
                            typeof $steps["updateModalOpen"] === "object" &&
                            typeof $steps["updateModalOpen"].then === "function"
                          ) {
                            $steps["updateModalOpen"] = await $steps[
                              "updateModalOpen"
                            ];
                          }
                        }}
                      />
                    </div>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__z2Hyy)}
                    >
                      {(() => {
                        const child$Props = {
                          canSelectRows: "click",
                          className: classNames(
                            "__wab_instance",
                            sty.allQuizzesTable
                          ),
                          data: (() => {
                            try {
                              return $queries.getOnboardingQuizzes;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })(),
                          defaultSize: "large",
                          fields: (() => {
                            const __composite = [
                              {
                                key: "id",
                                fieldId: "id",
                                isHidden: null,
                                expr: null
                              },
                              { key: "title", fieldId: "title", title: null },
                              {
                                key: "instrument_type",
                                fieldId: "instrument_type",
                                title: null
                              },
                              { key: "level", fieldId: "level", title: null },
                              {
                                key: "question_count",
                                fieldId: "question_count",
                                title: null
                              }
                            ];
                            __composite["0"]["isHidden"] = true;
                            __composite["0"]["expr"] = (
                              currentItem,
                              currentValue
                            ) => {
                              return $queries.getOnboardingQuizzes.data[0].id;
                            };
                            __composite["1"]["title"] = "Quiz Title";
                            __composite["2"]["title"] = "Instrument Type";
                            __composite["3"]["title"] = "Quiz Level";
                            __composite["4"]["title"] = "No. of Questions";
                            return __composite;
                          })(),

                          hideColumnPicker: true,
                          hideDensity: true,
                          hideExports: true,
                          hideSearch: true,
                          hideSelectionBar: true,
                          onRowClick: async (rowKey, row, event) => {
                            const $steps = {};
                          },
                          onRowSelectionChanged: async (...eventArgs: any) => {
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "selectedRowKey",
                              ["allQuizzesTable", "selectedRowKey"],
                              RichTable_Helpers
                            ).apply(null, eventArgs);
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "selectedRow",
                              ["allQuizzesTable", "selectedRow"],
                              RichTable_Helpers
                            ).apply(null, eventArgs);
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "selectedRows",
                              ["allQuizzesTable", "selectedRows"],
                              RichTable_Helpers
                            ).apply(null, eventArgs);
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "selectedRowKeys",
                              ["allQuizzesTable", "selectedRowKeys"],
                              RichTable_Helpers
                            ).apply(null, eventArgs);
                          },
                          pagination: false,
                          rowKey: "id",
                          scopeClassName: sty["allQuizzesTable__instance"],
                          selectedRowKey: generateStateValueProp($state, [
                            "allQuizzesTable",
                            "selectedRowKey"
                          ]),
                          selectedRowKeys: generateStateValueProp($state, [
                            "allQuizzesTable",
                            "selectedRowKeys"
                          ]),
                          themeResetClassName: classNames(
                            projectcss.root_reset,
                            projectcss.root_reset_tags,
                            projectcss.plasmic_default_styles,
                            projectcss.plasmic_mixins,
                            projectcss.plasmic_tokens,
                            plasmic_antd_5_hostless_css.plasmic_tokens,
                            plasmic_plasmic_rich_components_css.plasmic_tokens
                          )
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "selectedRowKey",
                              plasmicStateName: "allQuizzesTable.selectedRowKey"
                            },
                            {
                              name: "selectedRow",
                              plasmicStateName: "allQuizzesTable.selectedRow"
                            },
                            {
                              name: "selectedRows",
                              plasmicStateName: "allQuizzesTable.selectedRows"
                            },
                            {
                              name: "selectedRowKeys",
                              plasmicStateName:
                                "allQuizzesTable.selectedRowKeys"
                            }
                          ],
                          [],
                          RichTable_Helpers ?? {},
                          child$Props
                        );

                        return (
                          <RichTable
                            data-plasmic-name={"allQuizzesTable"}
                            data-plasmic-override={overrides.allQuizzesTable}
                            {...child$Props}
                          />
                        );
                      })()}
                      {(() => {
                        try {
                          return (
                            $state.allQuizzesTable.selectedRow !== undefined &&
                            $state.allQuizzesTable.selectedRow !== null
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return true;
                          }
                          throw e;
                        }
                      })() ? (
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__dmX2M
                          )}
                        />
                      ) : null}
                    </Stack__>
                    <AntdModal
                      data-plasmic-name={"modal"}
                      data-plasmic-override={overrides.modal}
                      className={classNames("__wab_instance", sty.modal)}
                      defaultStylesClassName={classNames(
                        projectcss.root_reset,
                        projectcss.plasmic_default_styles,
                        projectcss.plasmic_mixins,
                        projectcss.plasmic_tokens,
                        plasmic_antd_5_hostless_css.plasmic_tokens,
                        plasmic_plasmic_rich_components_css.plasmic_tokens
                      )}
                      hideFooter={true}
                      modalScopeClassName={sty["modal__modal"]}
                      onOpenChange={async (...eventArgs: any) => {
                        generateStateOnChangeProp($state, [
                          "modal",
                          "open"
                        ]).apply(null, eventArgs);
                      }}
                      open={generateStateValueProp($state, ["modal", "open"])}
                      title={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__eNg6G
                          )}
                        >
                          {"Add New Quiz"}
                        </div>
                      }
                      trigger={null}
                    >
                      {(() => {
                        const child$Props = {
                          className: classNames("__wab_instance", sty.form2),
                          data: {
                            sourceId: "6C2N6jYLs31t3Z2ygT9rD6",
                            opId: "33891d7b-e265-4db9-b18f-f2fcf84bf7f4",
                            userArgs: {},
                            cacheKey: `plasmic.$.${(() => {
                              try {
                                return "getSchema";
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "";
                                }
                                throw e;
                              }
                            })()}.$.33891d7b-e265-4db9-b18f-f2fcf84bf7f4.$.`,
                            invalidatedKeys: null,
                            roleId: null
                          },
                          dataFormItems: (() => {
                            const __composite = [
                              {
                                key: "id",
                                inputType: "Text",
                                fieldId: "id",
                                label: "id",
                                name: "id",
                                hidden: null
                              },
                              {
                                key: "title",
                                inputType: "Text",
                                fieldId: "title",
                                label: "title",
                                name: "title"
                              },
                              {
                                key: "instrument_type",
                                inputType: null,
                                fieldId: "instrument_type",
                                label: null,
                                name: "instrument_type",
                                options: null
                              },
                              {
                                key: "level",
                                inputType: null,
                                fieldId: "level",
                                label: "level",
                                name: "level",
                                options: null
                              },
                              {
                                key: "question_count",
                                inputType: "Number",
                                fieldId: "question_count",
                                label: "question_count",
                                name: "question_count",
                                hidden: null
                              }
                            ];
                            __composite["0"]["hidden"] = true;
                            __composite["2"]["inputType"] = "Select";
                            __composite["2"]["label"] = "Instrument Type";
                            __composite["2"]["options"] = (() => {
                              const __composite = [
                                { type: "option", label: null, value: null },
                                { type: "option", label: null, value: null },
                                { type: "option", label: null, value: null }
                              ];
                              __composite["0"]["label"] = "Voice";
                              __composite["0"]["value"] = "VOICE";
                              __composite["1"]["label"] = "Guitar";
                              __composite["1"]["value"] = "GUITAR";
                              __composite["2"]["label"] = "Strings";
                              __composite["2"]["value"] = "STRINGS";
                              return __composite;
                            })();
                            __composite["3"]["inputType"] = "Select";
                            __composite["3"]["options"] = (() => {
                              const __composite = [
                                { type: "option", label: null, value: null },
                                { type: "option", label: null, value: null },
                                { type: "option", label: null, value: null }
                              ];
                              __composite["0"]["label"] = "Beginner";
                              __composite["0"]["value"] = "BEGINNER";
                              __composite["1"]["label"] = "Skilled";
                              __composite["1"]["value"] = "SKILLED";
                              __composite["2"]["label"] = "Novice";
                              __composite["2"]["value"] = "NOVICE";
                              return __composite;
                            })();
                            __composite["4"]["hidden"] = true;
                            return __composite;
                          })(),

                          extendedOnValuesChange: async (...eventArgs: any) => {
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "value",
                              ["form2", "value"],
                              FormWrapper_Helpers
                            ).apply(null, eventArgs);
                          },
                          formItems: [],
                          labelCol: { span: 8, horizontalOnly: true },
                          layout: "vertical",
                          mode: "simplified",
                          onFinish: async values => {
                            const $steps = {};

                            $steps["defaultSubmit"] = true
                              ? (() => {
                                  const actionArgs = {
                                    dataOp: {
                                      sourceId: "6C2N6jYLs31t3Z2ygT9rD6",
                                      opId: "63a79c7c-ccc3-4405-bd40-1d4056bf34a1",
                                      userArgs: {
                                        variables: [$state.form2.value]
                                      },
                                      cacheKey: null,
                                      invalidatedKeys: ["plasmic_refresh_all"],
                                      roleId: null
                                    }
                                  };
                                  return (async ({
                                    dataOp,
                                    continueOnError
                                  }) => {
                                    try {
                                      const response =
                                        await executePlasmicDataOp(dataOp, {
                                          userAuthToken:
                                            dataSourcesCtx?.userAuthToken,
                                          user: dataSourcesCtx?.user
                                        });
                                      await plasmicInvalidate(
                                        dataOp.invalidatedKeys
                                      );
                                      return response;
                                    } catch (e) {
                                      if (!continueOnError) {
                                        throw e;
                                      }
                                      return e;
                                    }
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["defaultSubmit"] != null &&
                              typeof $steps["defaultSubmit"] === "object" &&
                              typeof $steps["defaultSubmit"].then === "function"
                            ) {
                              $steps["defaultSubmit"] = await $steps[
                                "defaultSubmit"
                              ];
                            }
                          },
                          onIsSubmittingChange: async (...eventArgs: any) => {
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "isSubmitting",
                              ["form2", "isSubmitting"],
                              FormWrapper_Helpers
                            ).apply(null, eventArgs);
                          },
                          ref: ref => {
                            $refs["form2"] = ref;
                          },
                          submitSlot: (
                            <AntdButton
                              className={classNames(
                                "__wab_instance",
                                sty.button__fjsvC
                              )}
                              submitsForm={true}
                              type={"primary"}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__aNMg
                                )}
                              >
                                {"Submit"}
                              </div>
                            </AntdButton>
                          ),
                          wrapperCol: { span: 16, horizontalOnly: true }
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "value",
                              plasmicStateName: "form2.value"
                            },
                            {
                              name: "isSubmitting",
                              plasmicStateName: "form2.isSubmitting"
                            }
                          ],
                          [],
                          FormWrapper_Helpers ?? {},
                          child$Props
                        );

                        return (
                          <FormWrapper
                            data-plasmic-name={"form2"}
                            data-plasmic-override={overrides.form2}
                            {...child$Props}
                          />
                        );
                      })()}
                    </AntdModal>
                  </div>
                ) : null}
                {(() => {
                  try {
                    return (
                      $ctx.SupabaseUser.user &&
                      $ctx.SupabaseUser.user.user_metadata.userRole !== "admin"
                    );
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })() ? (
                  <section
                    data-plasmic-name={"section"}
                    data-plasmic-override={overrides.section}
                    className={classNames(projectcss.all, sty.section)}
                  >
                    <Unauthorized
                      data-plasmic-name={"unauthorized"}
                      data-plasmic-override={overrides.unauthorized}
                      className={classNames("__wab_instance", sty.unauthorized)}
                    />
                  </section>
                ) : null}
              </React.Fragment>
            )}
          </DataCtxReader__>
        </PageLayout>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "h5",
    "allQuizzesTable",
    "modal",
    "form2",
    "section",
    "unauthorized"
  ],
  h5: ["h5"],
  allQuizzesTable: ["allQuizzesTable"],
  modal: ["modal", "form2"],
  form2: ["form2"],
  section: ["section", "unauthorized"],
  unauthorized: ["unauthorized"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof PageLayout;
  h5: "h5";
  allQuizzesTable: typeof RichTable;
  modal: typeof AntdModal;
  form2: typeof FormWrapper;
  section: "section";
  unauthorized: typeof Unauthorized;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddOnboardingQuestions4__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAddOnboardingQuestions4__VariantsArgs;
    args?: PlasmicAddOnboardingQuestions4__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAddOnboardingQuestions4__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAddOnboardingQuestions4__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAddOnboardingQuestions4__ArgProps,
          internalVariantPropNames: PlasmicAddOnboardingQuestions4__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAddOnboardingQuestions4__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAddOnboardingQuestions4";
  } else {
    func.displayName = `PlasmicAddOnboardingQuestions4.${nodeName}`;
  }
  return func;
}

export const PlasmicAddOnboardingQuestions4 = Object.assign(
  // Top-level PlasmicAddOnboardingQuestions4 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h5: makeNodeComponent("h5"),
    allQuizzesTable: makeNodeComponent("allQuizzesTable"),
    modal: makeNodeComponent("modal"),
    form2: makeNodeComponent("form2"),
    section: makeNodeComponent("section"),
    unauthorized: makeNodeComponent("unauthorized"),

    // Metadata about props expected for PlasmicAddOnboardingQuestions4
    internalVariantProps: PlasmicAddOnboardingQuestions4__VariantProps,
    internalArgProps: PlasmicAddOnboardingQuestions4__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAddOnboardingQuestions4;
/* prettier-ignore-end */
