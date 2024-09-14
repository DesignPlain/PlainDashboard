import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_RuleGroupRuleActionCaptchaCustomRequestHandling,
  wafv2_RuleGroupRuleActionCaptchaCustomRequestHandling_GetTypes,
} from "./wafv2_RuleGroupRuleActionCaptchaCustomRequestHandling";

export interface wafv2_RuleGroupRuleActionCaptcha {
  // Defines custom handling for the web request. See Custom Request Handling below for details.
  customRequestHandling?: wafv2_RuleGroupRuleActionCaptchaCustomRequestHandling;
}

export function wafv2_RuleGroupRuleActionCaptcha_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customRequestHandling",
      "Defines custom handling for the web request. See Custom Request Handling below for details.",
      () => wafv2_RuleGroupRuleActionCaptchaCustomRequestHandling_GetTypes(),
      false,
      false,
    ),
  ];
}
