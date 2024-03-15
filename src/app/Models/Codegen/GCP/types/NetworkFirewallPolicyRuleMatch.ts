import { NetworkFirewallPolicyRuleMatchLayer4Config } from "./NetworkFirewallPolicyRuleMatchLayer4Config";
import { NetworkFirewallPolicyRuleMatchSrcSecureTag } from "./NetworkFirewallPolicyRuleMatchSrcSecureTag";

export interface NetworkFirewallPolicyRuleMatch {
  // Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. Destination address groups is only supported in Egress rules.
  DestAddressGroups?: Array<string>;

  // CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.
  DestIpRanges?: Array<string>;

  // The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is egress.
  DestRegionCodes?: Array<string>;

  // Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. Source address groups is only supported in Ingress rules.
  SrcAddressGroups?: Array<string>;

  // The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is ingress.
  SrcRegionCodes?: Array<string>;

  // List of secure tag values, which should be matched at the source of the traffic. For INGRESS rule, if all the <code>srcSecureTag</code> are INEFFECTIVE, and there is no <code>srcIpRange</code>, this rule will be ignored. Maximum number of source tag values allowed is 256.
  SrcSecureTags?: Array<NetworkFirewallPolicyRuleMatchSrcSecureTag>;

  /*
Name of the Google Cloud Threat Intelligence list.

The `layer4_configs` block supports:
*/
  SrcThreatIntelligences?: Array<string>;

  // Domain names that will be used to match against the resolved domain name of destination of traffic. Can only be specified if DIRECTION is egress.
  DestFqdns?: Array<string>;

  // Name of the Google Cloud Threat Intelligence list.
  DestThreatIntelligences?: Array<string>;

  // Pairs of IP protocols and ports that the rule should match.
  Layer4Configs?: Array<NetworkFirewallPolicyRuleMatchLayer4Config>;

  // Domain names that will be used to match against the resolved domain name of source of traffic. Can only be specified if DIRECTION is ingress.
  SrcFqdns?: Array<string>;

  // CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.
  SrcIpRanges?: Array<string>;
}