import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionSecurityPolicyRuleNetworkMatchUserDefinedField,
  compute_RegionSecurityPolicyRuleNetworkMatchUserDefinedField_GetTypes,
} from "./compute_RegionSecurityPolicyRuleNetworkMatchUserDefinedField";

export interface compute_RegionSecurityPolicyRuleNetworkMatch {
  /*
User-defined fields. Each element names a defined field and lists the matching values for that field.
Structure is documented below.
*/
  userDefinedFields?: Array<compute_RegionSecurityPolicyRuleNetworkMatchUserDefinedField>;

  // Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.
  destIpRanges?: Array<string>;

  // Destination port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
  destPorts?: Array<string>;

  // IPv4 protocol / IPv6 next header (after extension headers). Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".
  ipProtocols?: Array<string>;

  // BGP Autonomous System Number associated with the source IP address.
  srcAsns?: Array<number>;

  // Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.
  srcIpRanges?: Array<string>;

  // Source port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
  srcPorts?: Array<string>;

  // Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.
  srcRegionCodes?: Array<string>;
}

export function compute_RegionSecurityPolicyRuleNetworkMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "destIpRanges",
      "Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destPorts",
      'Destination port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipProtocols",
      'IPv4 protocol / IPv6 next header (after extension headers). Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "srcAsns",
      "BGP Autonomous System Number associated with the source IP address.",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "srcIpRanges",
      "Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "srcPorts",
      'Source port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "srcRegionCodes",
      "Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "userDefinedFields",
      "User-defined fields. Each element names a defined field and lists the matching values for that field.\nStructure is documented below.",
      compute_RegionSecurityPolicyRuleNetworkMatchUserDefinedField_GetTypes(),
      false,
      false,
    ),
  ];
}
