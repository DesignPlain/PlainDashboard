import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader,
  Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader_GetTypes,
} from "./Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader";
import {
  Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam,
  Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam_GetTypes,
} from "./Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam";
import {
  Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri,
  Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri_GetTypes,
} from "./Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri";
import {
  Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky,
  Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky_GetTypes,
} from "./Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky";

export interface Compute_SecurityPolicyRulePreconfiguredWafConfigExclusion {
  /*
A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. If omitted, it refers to all the rule IDs under the WAF rule set.

<a name="nested_field_params"></a>The `request_header`, `request_cookie`, `request_uri` and `request_query_param` blocks support:
*/
  TargetRuleIds?: Array<string>;

  // Target WAF rule set to apply the preconfigured WAF exclusion.
  TargetRuleSet?: string;

  // Request cookie whose value will be excluded from inspection during preconfigured WAF evaluation. Structure is documented below.
  RequestCookies?: Array<Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky>;

  // Request header whose value will be excluded from inspection during preconfigured WAF evaluation. Structure is documented below.
  RequestHeaders?: Array<Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader>;

  // Request URI from the request line to be excluded from inspection during preconfigured WAF evaluation. When specifying this field, the query or fragment part should be excluded. Structure is documented below.
  RequestQueryParams?: Array<Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam>;

  // Request query parameter whose value will be excluded from inspection during preconfigured WAF evaluation. Note that the parameter can be in the query string or in the POST body. Structure is documented below.
  RequestUris?: Array<Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri>;
}

export function Compute_SecurityPolicyRulePreconfiguredWafConfigExclusion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "TargetRuleIds",
      'A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. If omitted, it refers to all the rule IDs under the WAF rule set.\n\n<a name="nested_field_params"></a>The `request_header`, `request_cookie`, `request_uri` and `request_query_param` blocks support:',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TargetRuleSet",
      "Target WAF rule set to apply the preconfigured WAF exclusion.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RequestCookies",
      "Request cookie whose value will be excluded from inspection during preconfigured WAF evaluation. Structure is documented below.",
      Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RequestHeaders",
      "Request header whose value will be excluded from inspection during preconfigured WAF evaluation. Structure is documented below.",
      Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RequestQueryParams",
      "Request URI from the request line to be excluded from inspection during preconfigured WAF evaluation. When specifying this field, the query or fragment part should be excluded. Structure is documented below.",
      Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RequestUris",
      "Request query parameter whose value will be excluded from inspection during preconfigured WAF evaluation. Note that the parameter can be in the query string or in the POST body. Structure is documented below.",
      Compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri_GetTypes(),
      false,
      false,
    ),
  ];
}
