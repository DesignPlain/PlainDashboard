import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_RuleGroupRuleActionCountCustomRequestHandling,
  wafv2_RuleGroupRuleActionCountCustomRequestHandling_GetTypes,
} from "./wafv2_RuleGroupRuleActionCountCustomRequestHandling";

export interface wafv2_RuleGroupRuleActionCount {
  // Defines custom handling for the web request. See Custom Request Handling below for details.
  customRequestHandling?: wafv2_RuleGroupRuleActionCountCustomRequestHandling;
}

export function wafv2_RuleGroupRuleActionCount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customRequestHandling",
      "Defines custom handling for the web request. See Custom Request Handling below for details.",
      () => wafv2_RuleGroupRuleActionCountCustomRequestHandling_GetTypes(),
      false,
      false,
    ),
  ];
}
