import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleActionBlockCustomResponse,
  wafv2_WebAclRuleActionBlockCustomResponse_GetTypes,
} from "./wafv2_WebAclRuleActionBlockCustomResponse";

export interface wafv2_WebAclRuleActionBlock {
  // Defines a custom response for the web request. See `custom_response` below for details.
  customResponse?: wafv2_WebAclRuleActionBlockCustomResponse;
}

export function wafv2_WebAclRuleActionBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customResponse",
      "Defines a custom response for the web request. See `custom_response` below for details.",
      wafv2_WebAclRuleActionBlockCustomResponse_GetTypes(),
      false,
      false,
    ),
  ];
}
