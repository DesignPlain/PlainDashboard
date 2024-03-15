import { SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam } from "./SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam";
import { SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri } from "./SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri";
import { SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky } from "./SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky";
import { SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader } from "./SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader";

export interface SecurityPolicyRulePreconfiguredWafConfigExclusion {
  // Request query parameter whose value will be excluded from inspection during preconfigured WAF evaluation. Note that the parameter can be in the query string or in the POST body. Structure is documented below.
  RequestUris?: Array<SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri>;

  /*
A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. If omitted, it refers to all the rule IDs under the WAF rule set.

<a name="nested_field_params"></a>The `request_header`, `request_cookie`, `request_uri` and `request_query_param` blocks support:
*/
  TargetRuleIds?: Array<string>;

  // Target WAF rule set to apply the preconfigured WAF exclusion.
  TargetRuleSet?: string;

  // Request cookie whose value will be excluded from inspection during preconfigured WAF evaluation. Structure is documented below.
  RequestCookies?: Array<SecurityPolicyRulePreconfiguredWafConfigExclusionRequestCooky>;

  // Request header whose value will be excluded from inspection during preconfigured WAF evaluation. Structure is documented below.
  RequestHeaders?: Array<SecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader>;

  // Request URI from the request line to be excluded from inspection during preconfigured WAF evaluation. When specifying this field, the query or fragment part should be excluded. Structure is documented below.
  RequestQueryParams?: Array<SecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam>;
}
