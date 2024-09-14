import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_RuleGroupRuleActionBlockCustomResponseResponseHeader,
  wafv2_RuleGroupRuleActionBlockCustomResponseResponseHeader_GetTypes,
} from "./wafv2_RuleGroupRuleActionBlockCustomResponseResponseHeader";

export interface wafv2_RuleGroupRuleActionBlockCustomResponse {
  // References the response body that you want AWS WAF to return to the web request client. This must reference a `key` defined in a `custom_response_body` block of this resource.
  customResponseBodyKey?: string;

  // The HTTP status code to return to the client.
  responseCode?: number;

  // The `response_header` blocks used to define the HTTP response headers added to the response. See Custom HTTP Header below for details.
  responseHeaders?: Array<wafv2_RuleGroupRuleActionBlockCustomResponseResponseHeader>;
}

export function wafv2_RuleGroupRuleActionBlockCustomResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "customResponseBodyKey",
      "References the response body that you want AWS WAF to return to the web request client. This must reference a `key` defined in a `custom_response_body` block of this resource.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "responseCode",
      "The HTTP status code to return to the client.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "responseHeaders",
      "The `response_header` blocks used to define the HTTP response headers added to the response. See Custom HTTP Header below for details.",
      () =>
        wafv2_RuleGroupRuleActionBlockCustomResponseResponseHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
