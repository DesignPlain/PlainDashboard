import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleActionCountCustomRequestHandlingInsertHeader,
  wafv2_WebAclRuleActionCountCustomRequestHandlingInsertHeader_GetTypes,
} from "./wafv2_WebAclRuleActionCountCustomRequestHandlingInsertHeader";

export interface wafv2_WebAclRuleActionCountCustomRequestHandling {
  // The `insert_header` blocks used to define HTTP headers added to the request. See `insert_header` below for details.
  insertHeaders?: Array<wafv2_WebAclRuleActionCountCustomRequestHandlingInsertHeader>;
}

export function wafv2_WebAclRuleActionCountCustomRequestHandling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "insertHeaders",
      "The `insert_header` blocks used to define HTTP headers added to the request. See `insert_header` below for details.",
      () =>
        wafv2_WebAclRuleActionCountCustomRequestHandlingInsertHeader_GetTypes(),
      true,
      false,
    ),
  ];
}
