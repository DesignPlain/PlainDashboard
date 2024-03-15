export interface AuthorizationPolicyRuleSource {
  /*
List of peer identities to match for authorization. At least one principal should match. Each peer can be an exact match, or a prefix match (example, "namespace/-") or a suffix match (example, "-/service-account") or a presence match "-".
Authorization based on the principal name without certificate validation (configured by ServerTlsPolicy resource) is considered insecure.
*/
  Principals?: Array<string>;

  /*
List of CIDR ranges to match based on source IP address. At least one IP block should match. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported. Authorization based on source IP alone should be avoided.
The IP addresses of any load balancers or proxies should be considered untrusted.
*/
  IpBlocks?: Array<string>;
}
