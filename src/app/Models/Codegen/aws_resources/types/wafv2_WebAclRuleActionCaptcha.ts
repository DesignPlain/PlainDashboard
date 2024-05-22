import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleActionCaptchaCustomRequestHandling,
  wafv2_WebAclRuleActionCaptchaCustomRequestHandling_GetTypes,
} from "./wafv2_WebAclRuleActionCaptchaCustomRequestHandling";

export interface wafv2_WebAclRuleActionCaptcha {
  // Defines custom handling for the web request. See `custom_request_handling` below for details.
  customRequestHandling?: wafv2_WebAclRuleActionCaptchaCustomRequestHandling;
}

export function wafv2_WebAclRuleActionCaptcha_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customRequestHandling",
      "Defines custom handling for the web request. See `custom_request_handling` below for details.",
      wafv2_WebAclRuleActionCaptchaCustomRequestHandling_GetTypes(),
      false,
      false,
    ),
  ];
}
