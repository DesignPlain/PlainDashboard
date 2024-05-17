import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_NetworkFirewallPolicyRuleMatchLayer4Config,
  Compute_NetworkFirewallPolicyRuleMatchLayer4Config_GetTypes,
} from "./Compute_NetworkFirewallPolicyRuleMatchLayer4Config";
import {
  Compute_NetworkFirewallPolicyRuleMatchSrcSecureTag,
  Compute_NetworkFirewallPolicyRuleMatchSrcSecureTag_GetTypes,
} from "./Compute_NetworkFirewallPolicyRuleMatchSrcSecureTag";

export interface Compute_NetworkFirewallPolicyRuleMatch {
  // Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. Destination address groups is only supported in Egress rules.
  DestAddressGroups?: Array<string>;

  // Domain names that will be used to match against the resolved domain name of destination of traffic. Can only be specified if DIRECTION is egress.
  DestFqdns?: Array<string>;

  // The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is egress.
  DestRegionCodes?: Array<string>;

  // Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. Source address groups is only supported in Ingress rules.
  SrcAddressGroups?: Array<string>;

  // Domain names that will be used to match against the resolved domain name of source of traffic. Can only be specified if DIRECTION is ingress.
  SrcFqdns?: Array<string>;

  // CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.
  DestIpRanges?: Array<string>;

  // Name of the Google Cloud Threat Intelligence list.
  DestThreatIntelligences?: Array<string>;

  // Pairs of IP protocols and ports that the rule should match.
  Layer4Configs?: Array<Compute_NetworkFirewallPolicyRuleMatchLayer4Config>;

  // CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.
  SrcIpRanges?: Array<string>;

  // The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is ingress.
  SrcRegionCodes?: Array<string>;

  // List of secure tag values, which should be matched at the source of the traffic. For INGRESS rule, if all the <code>srcSecureTag</code> are INEFFECTIVE, and there is no <code>srcIpRange</code>, this rule will be ignored. Maximum number of source tag values allowed is 256.
  SrcSecureTags?: Array<Compute_NetworkFirewallPolicyRuleMatchSrcSecureTag>;

  /*
Name of the Google Cloud Threat Intelligence list.

The `layer4_configs` block supports:
*/
  SrcThreatIntelligences?: Array<string>;
}

export function Compute_NetworkFirewallPolicyRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SrcSecureTags",
      "List of secure tag values, which should be matched at the source of the traffic. For INGRESS rule, if all the <code>srcSecureTag</code> are INEFFECTIVE, and there is no <code>srcIpRange</code>, this rule will be ignored. Maximum number of source tag values allowed is 256.",
      Compute_NetworkFirewallPolicyRuleMatchSrcSecureTag_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DestRegionCodes",
      "The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is egress.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SrcAddressGroups",
      "Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. Source address groups is only supported in Ingress rules.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DestThreatIntelligences",
      "Name of the Google Cloud Threat Intelligence list.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SrcIpRanges",
      "CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SrcRegionCodes",
      "The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is ingress.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SrcThreatIntelligences",
      "Name of the Google Cloud Threat Intelligence list.\n\nThe `layer4_configs` block supports:",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DestAddressGroups",
      "Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. Destination address groups is only supported in Egress rules.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DestFqdns",
      "Domain names that will be used to match against the resolved domain name of destination of traffic. Can only be specified if DIRECTION is egress.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SrcFqdns",
      "Domain names that will be used to match against the resolved domain name of source of traffic. Can only be specified if DIRECTION is ingress.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DestIpRanges",
      "CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Layer4Configs",
      "Pairs of IP protocols and ports that the rule should match.",
      Compute_NetworkFirewallPolicyRuleMatchLayer4Config_GetTypes(),
      true,
      false,
    ),
  ];
}
