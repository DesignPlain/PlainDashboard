import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleActionCountCustomRequestHandling,
  wafv2_WebAclRuleActionCountCustomRequestHandling_GetTypes,
} from "./wafv2_WebAclRuleActionCountCustomRequestHandling";

export interface wafv2_WebAclRuleActionCount {
  // Defines custom handling for the web request. See `custom_request_handling` below for details.
  customRequestHandling?: wafv2_WebAclRuleActionCountCustomRequestHandling;
}

export function wafv2_WebAclRuleActionCount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customRequestHandling",
      "Defines custom handling for the web request. See `custom_request_handling` below for details.",
      wafv2_WebAclRuleActionCountCustomRequestHandling_GetTypes(),
      false,
      false,
    ),
  ];
}
