import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Orgpolicy_PolicyDryRunSpecRuleCondition,
  Orgpolicy_PolicyDryRunSpecRuleCondition_GetTypes,
} from "./Orgpolicy_PolicyDryRunSpecRuleCondition";
import {
  Orgpolicy_PolicyDryRunSpecRuleValues,
  Orgpolicy_PolicyDryRunSpecRuleValues_GetTypes,
} from "./Orgpolicy_PolicyDryRunSpecRuleValues";

export interface Orgpolicy_PolicyDryRunSpecRule {
  // Setting this to `"TRUE"` means that all values are allowed. This field can be set only in Policies for list constraints.
  AllowAll?: string;

  // A condition which determines whether this rule is used in the evaluation of the policy. When set, the `expression` field in the `Expr' must include from 1 to 10 subexpressions, joined by the "||" or "&&" operators. Each subexpression must be of the form "resource.matchTag('/tag_key_short_name, 'tag_value_short_name')". or "resource.matchTagId('tagKeys/key_id', 'tagValues/value_id')". where key_name and value_name are the resource names for Label Keys and Values. These names are available from the Tag Manager Service. An example expression is: "resource.matchTag('123456789/environment, 'prod')". or "resource.matchTagId('tagKeys/123', 'tagValues/456')".
  Condition?: Orgpolicy_PolicyDryRunSpecRuleCondition;

  // Setting this to `"TRUE"` means that all values are denied. This field can be set only in Policies for list constraints.
  DenyAll?: string;

  // If `"TRUE"`, then the `Policy` is enforced. If `"FALSE"`, then any configuration is acceptable. This field can be set only in Policies for boolean constraints.
  Enforce?: string;

  // List of values to be used for this PolicyRule. This field can be set only in Policies for list constraints.
  Values?: Orgpolicy_PolicyDryRunSpecRuleValues;
}

export function Orgpolicy_PolicyDryRunSpecRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AllowAll",
      'Setting this to `"TRUE"` means that all values are allowed. This field can be set only in Policies for list constraints.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Condition",
      "A condition which determines whether this rule is used in the evaluation of the policy. When set, the `expression` field in the `Expr' must include from 1 to 10 subexpressions, joined by the \"||\" or \"&&\" operators. Each subexpression must be of the form \"resource.matchTag('/tag_key_short_name, 'tag_value_short_name')\". or \"resource.matchTagId('tagKeys/key_id', 'tagValues/value_id')\". where key_name and value_name are the resource names for Label Keys and Values. These names are available from the Tag Manager Service. An example expression is: \"resource.matchTag('123456789/environment, 'prod')\". or \"resource.matchTagId('tagKeys/123', 'tagValues/456')\".",
      Orgpolicy_PolicyDryRunSpecRuleCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DenyAll",
      'Setting this to `"TRUE"` means that all values are denied. This field can be set only in Policies for list constraints.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Enforce",
      'If `"TRUE"`, then the `Policy` is enforced. If `"FALSE"`, then any configuration is acceptable. This field can be set only in Policies for boolean constraints.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Values",
      "List of values to be used for this PolicyRule. This field can be set only in Policies for list constraints.",
      Orgpolicy_PolicyDryRunSpecRuleValues_GetTypes(),
      false,
      false,
    ),
  ];
}
