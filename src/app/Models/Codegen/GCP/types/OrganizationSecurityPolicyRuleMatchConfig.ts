import { OrganizationSecurityPolicyRuleMatchConfigLayer4Config } from "./OrganizationSecurityPolicyRuleMatchConfigLayer4Config";

export interface OrganizationSecurityPolicyRuleMatchConfig {
  /*
Destination IP address range in CIDR format. Required for
EGRESS rules.
*/
  DestIpRanges?: Array<string>;

  /*
Pairs of IP protocols and ports that the rule should match.
Structure is documented below.


<a name="nested_layer4_config"></a>The `layer4_config` block supports:
*/
  Layer4Configs?: Array<OrganizationSecurityPolicyRuleMatchConfigLayer4Config>;

  /*
Source IP address range in CIDR format. Required for
INGRESS rules.
*/
  SrcIpRanges?: Array<string>;
}
