import { AuthorizationPolicyRuleDestinationHttpHeaderMatch } from "./AuthorizationPolicyRuleDestinationHttpHeaderMatch";

export interface AuthorizationPolicyRuleDestination {
  // List of destination ports to match. At least one port should match.
  Ports?: Array<number>;

  // List of host names to match. Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.-") or a suffix match (example "-.myorg.com") or a presence (any) match "-".
  Hosts?: Array<string>;

  /*
Match against key:value pair in http header. Provides a flexible match based on HTTP headers, for potentially advanced use cases. At least one header should match.
Avoid using header matches to make authorization decisions unless there is a strong guarantee that requests arrive through a trusted client or proxy.
Structure is documented below.
*/
  HttpHeaderMatch?: AuthorizationPolicyRuleDestinationHttpHeaderMatch;

  // A list of HTTP methods to match. At least one method should match. Should not be set for gRPC services.
  Methods?: Array<string>;
}
