import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_FirewallPolicyRuleMatchLayer4Config,
  compute_FirewallPolicyRuleMatchLayer4Config_GetTypes,
} from './compute_FirewallPolicyRuleMatchLayer4Config';

export interface compute_FirewallPolicyRuleMatch {
  // CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 256.
  destIpRanges?: Array<string>;

  // The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is egress.
  destRegionCodes?: Array<string>;

  // Name of the Google Cloud Threat Intelligence list.
  destThreatIntelligences?: Array<string>;

  // Pairs of IP protocols and ports that the rule should match.
  layer4Configs?: Array<compute_FirewallPolicyRuleMatchLayer4Config>;

  // Domain names that will be used to match against the resolved domain name of source of traffic. Can only be specified if DIRECTION is ingress.
  srcFqdns?: Array<string>;

  // CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 256.
  srcIpRanges?: Array<string>;

  // The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is ingress.
  srcRegionCodes?: Array<string>;

  /*
Name of the Google Cloud Threat Intelligence list.

The `layer4_configs` block supports:
*/
  srcThreatIntelligences?: Array<string>;

  // Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. Destination address groups is only supported in Egress rules.
  destAddressGroups?: Array<string>;

  // Domain names that will be used to match against the resolved domain name of destination of traffic. Can only be specified if DIRECTION is egress.
  destFqdns?: Array<string>;

  // Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. Source address groups is only supported in Ingress rules.
  srcAddressGroups?: Array<string>;
}

export function compute_FirewallPolicyRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'destRegionCodes',
      'The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is egress.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'layer4Configs',
      'Pairs of IP protocols and ports that the rule should match.',
      () => compute_FirewallPolicyRuleMatchLayer4Config_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'srcFqdns',
      'Domain names that will be used to match against the resolved domain name of source of traffic. Can only be specified if DIRECTION is ingress.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'srcIpRanges',
      'CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 256.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'srcRegionCodes',
      'The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is ingress.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'srcAddressGroups',
      'Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. Source address groups is only supported in Ingress rules.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'destIpRanges',
      'CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 256.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'destThreatIntelligences',
      'Name of the Google Cloud Threat Intelligence list.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'srcThreatIntelligences',
      'Name of the Google Cloud Threat Intelligence list.\n\nThe `layer4_configs` block supports:',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'destAddressGroups',
      'Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. Destination address groups is only supported in Egress rules.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'destFqdns',
      'Domain names that will be used to match against the resolved domain name of destination of traffic. Can only be specified if DIRECTION is egress.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
