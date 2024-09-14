import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  orgpolicy_PolicyDryRunSpecRuleCondition,
  orgpolicy_PolicyDryRunSpecRuleCondition_GetTypes,
} from "./orgpolicy_PolicyDryRunSpecRuleCondition";
import {
  orgpolicy_PolicyDryRunSpecRuleValues,
  orgpolicy_PolicyDryRunSpecRuleValues_GetTypes,
} from "./orgpolicy_PolicyDryRunSpecRuleValues";

export interface orgpolicy_PolicyDryRunSpecRule {
  // A condition which determines whether this rule is used in the evaluation of the policy. When set, the `expression` field in the `Expr' must include from 1 to 10 subexpressions, joined by the "||" or "&&" operators. Each subexpression must be of the form "resource.matchTag('/tag_key_short_name, 'tag_value_short_name')". or "resource.matchTagId('tagKeys/key_id', 'tagValues/value_id')". where key_name and value_name are the resource names for Label Keys and Values. These names are available from the Tag Manager Service. An example expression is: "resource.matchTag('123456789/environment, 'prod')". or "resource.matchTagId('tagKeys/123', 'tagValues/456')".
  condition?: orgpolicy_PolicyDryRunSpecRuleCondition;

  // Setting this to `"TRUE"` means that all values are denied. This field can be set only in Policies for list constraints.
  denyAll?: string;

  // If `"TRUE"`, then the `Policy` is enforced. If `"FALSE"`, then any configuration is acceptable. This field can be set only in Policies for boolean constraints.
  enforce?: string;

  // List of values to be used for this PolicyRule. This field can be set only in Policies for list constraints.
  values?: orgpolicy_PolicyDryRunSpecRuleValues;

  // Setting this to `"TRUE"` means that all values are allowed. This field can be set only in Policies for list constraints.
  allowAll?: string;
}

export function orgpolicy_PolicyDryRunSpecRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "denyAll",
      'Setting this to `"TRUE"` means that all values are denied. This field can be set only in Policies for list constraints.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "enforce",
      'If `"TRUE"`, then the `Policy` is enforced. If `"FALSE"`, then any configuration is acceptable. This field can be set only in Policies for boolean constraints.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "values",
      "List of values to be used for this PolicyRule. This field can be set only in Policies for list constraints.",
      () => orgpolicy_PolicyDryRunSpecRuleValues_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "allowAll",
      'Setting this to `"TRUE"` means that all values are allowed. This field can be set only in Policies for list constraints.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "condition",
      "A condition which determines whether this rule is used in the evaluation of the policy. When set, the `expression` field in the `Expr' must include from 1 to 10 subexpressions, joined by the \"||\" or \"&&\" operators. Each subexpression must be of the form \"resource.matchTag('/tag_key_short_name, 'tag_value_short_name')\". or \"resource.matchTagId('tagKeys/key_id', 'tagValues/value_id')\". where key_name and value_name are the resource names for Label Keys and Values. These names are available from the Tag Manager Service. An example expression is: \"resource.matchTag('123456789/environment, 'prod')\". or \"resource.matchTagId('tagKeys/123', 'tagValues/456')\".",
      () => orgpolicy_PolicyDryRunSpecRuleCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
