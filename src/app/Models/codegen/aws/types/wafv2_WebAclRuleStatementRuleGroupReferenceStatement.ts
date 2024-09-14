import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverride,
  wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverride_GetTypes,
} from "./wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverride";

export interface wafv2_WebAclRuleStatementRuleGroupReferenceStatement {
  // The Amazon Resource Name (ARN) of the `aws.wafv2.RuleGroup` resource.
  arn?: string;

  // Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change. See `rule_action_override` below for details.
  ruleActionOverrides?: Array<wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverride>;
}

export function wafv2_WebAclRuleStatementRuleGroupReferenceStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the `aws.wafv2.RuleGroup` resource.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ruleActionOverrides",
      "Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change. See `rule_action_override` below for details.",
      () =>
        wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverride_GetTypes(),
      false,
      false,
    ),
  ];
}
