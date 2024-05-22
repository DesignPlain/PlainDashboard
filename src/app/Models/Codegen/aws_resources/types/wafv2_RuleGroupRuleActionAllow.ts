import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_RuleGroupRuleActionAllowCustomRequestHandling,
  wafv2_RuleGroupRuleActionAllowCustomRequestHandling_GetTypes,
} from "./wafv2_RuleGroupRuleActionAllowCustomRequestHandling";

export interface wafv2_RuleGroupRuleActionAllow {
  // Defines custom handling for the web request. See Custom Request Handling below for details.
  customRequestHandling?: wafv2_RuleGroupRuleActionAllowCustomRequestHandling;
}

export function wafv2_RuleGroupRuleActionAllow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customRequestHandling",
      "Defines custom handling for the web request. See Custom Request Handling below for details.",
      wafv2_RuleGroupRuleActionAllowCustomRequestHandling_GetTypes(),
      false,
      false,
    ),
  ];
}
