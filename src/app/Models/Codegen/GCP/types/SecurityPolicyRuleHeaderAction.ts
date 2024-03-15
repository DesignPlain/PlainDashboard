import { SecurityPolicyRuleHeaderActionRequestHeadersToAdd } from "./SecurityPolicyRuleHeaderActionRequestHeadersToAdd";

export interface SecurityPolicyRuleHeaderAction {
  // The list of request headers to add or overwrite if they're already present. Structure is documented below.
  RequestHeadersToAdds?: Array<SecurityPolicyRuleHeaderActionRequestHeadersToAdd>;
}
