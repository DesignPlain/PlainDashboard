import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleActionAllowCustomRequestHandlingInsertHeader,
  wafv2_WebAclRuleActionAllowCustomRequestHandlingInsertHeader_GetTypes,
} from "./wafv2_WebAclRuleActionAllowCustomRequestHandlingInsertHeader";

export interface wafv2_WebAclRuleActionAllowCustomRequestHandling {
  // The `insert_header` blocks used to define HTTP headers added to the request. See `insert_header` below for details.
  insertHeaders?: Array<wafv2_WebAclRuleActionAllowCustomRequestHandlingInsertHeader>;
}

export function wafv2_WebAclRuleActionAllowCustomRequestHandling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "insertHeaders",
      "The `insert_header` blocks used to define HTTP headers added to the request. See `insert_header` below for details.",
      () =>
        wafv2_WebAclRuleActionAllowCustomRequestHandlingInsertHeader_GetTypes(),
      true,
      false,
    ),
  ];
}
