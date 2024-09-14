import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky,
  compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky_GetTypes,
} from "./compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky";
import {
  compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader,
  compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader_GetTypes,
} from "./compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader";
import {
  compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam,
  compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam_GetTypes,
} from "./compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam";
import {
  compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri,
  compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri_GetTypes,
} from "./compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri";

export interface compute_SecurityPolicyRulePreconfiguredWafConfigExclusion {
  /*
A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. If omitted, it refers to all the rule IDs under the WAF rule set.

<a name="nested_field_params"></a>The `request_header`, `request_cookie`, `request_uri` and `request_query_param` blocks support:
*/
  targetRuleIds?: Array<string>;

  // Target WAF rule set to apply the preconfigured WAF exclusion.
  targetRuleSet?: string;

  // Request cookie whose value will be excluded from inspection during preconfigured WAF evaluation. Structure is documented below.
  requestCookies?: Array<compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky>;

  // Request header whose value will be excluded from inspection during preconfigured WAF evaluation. Structure is documented below.
  requestHeaders?: Array<compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader>;

  // Request URI from the request line to be excluded from inspection during preconfigured WAF evaluation. When specifying this field, the query or fragment part should be excluded. Structure is documented below.
  requestQueryParams?: Array<compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam>;

  // Request query parameter whose value will be excluded from inspection during preconfigured WAF evaluation. Note that the parameter can be in the query string or in the POST body. Structure is documented below.
  requestUris?: Array<compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri>;
}

export function compute_SecurityPolicyRulePreconfiguredWafConfigExclusion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "requestQueryParams",
      "Request URI from the request line to be excluded from inspection during preconfigured WAF evaluation. When specifying this field, the query or fragment part should be excluded. Structure is documented below.",
      () =>
        compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "requestUris",
      "Request query parameter whose value will be excluded from inspection during preconfigured WAF evaluation. Note that the parameter can be in the query string or in the POST body. Structure is documented below.",
      () =>
        compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetRuleIds",
      'A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. If omitted, it refers to all the rule IDs under the WAF rule set.\n\n<a name="nested_field_params"></a>The `request_header`, `request_cookie`, `request_uri` and `request_query_param` blocks support:',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetRuleSet",
      "Target WAF rule set to apply the preconfigured WAF exclusion.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "requestCookies",
      "Request cookie whose value will be excluded from inspection during preconfigured WAF evaluation. Structure is documented below.",
      () =>
        compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "requestHeaders",
      "Request header whose value will be excluded from inspection during preconfigured WAF evaluation. Structure is documented below.",
      () =>
        compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
