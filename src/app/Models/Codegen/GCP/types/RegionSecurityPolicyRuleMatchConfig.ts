export interface RegionSecurityPolicyRuleMatchConfig {
  // CIDR IP address range. Maximum number of srcIpRanges allowed is 10.
  SrcIpRanges?: Array<string>;
}
