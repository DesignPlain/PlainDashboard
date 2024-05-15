import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionSecurityPolicyRuleNetworkMatchUserDefinedField,
  Compute_RegionSecurityPolicyRuleNetworkMatchUserDefinedField_GetTypes,
} from "./Compute_RegionSecurityPolicyRuleNetworkMatchUserDefinedField";

export interface Compute_RegionSecurityPolicyRuleNetworkMatch {
  // Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.
  SrcRegionCodes?: Array<string>;

  /*
User-defined fields. Each element names a defined field and lists the matching values for that field.
Structure is documented below.
*/
  UserDefinedFields?: Array<Compute_RegionSecurityPolicyRuleNetworkMatchUserDefinedField>;

  // Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.
  DestIpRanges?: Array<string>;

  // Destination port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
  DestPorts?: Array<string>;

  // IPv4 protocol / IPv6 next header (after extension headers). Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".
  IpProtocols?: Array<string>;

  // BGP Autonomous System Number associated with the source IP address.
  SrcAsns?: Array<number>;

  // Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.
  SrcIpRanges?: Array<string>;

  // Source port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
  SrcPorts?: Array<string>;
}

export function Compute_RegionSecurityPolicyRuleNetworkMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "DestPorts",
      'Destination port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IpProtocols",
      'IPv4 protocol / IPv6 next header (after extension headers). Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SrcAsns",
      "BGP Autonomous System Number associated with the source IP address.",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SrcIpRanges",
      "Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SrcPorts",
      'Source port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SrcRegionCodes",
      "Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UserDefinedFields",
      "User-defined fields. Each element names a defined field and lists the matching values for that field.\nStructure is documented below.",
      Compute_RegionSecurityPolicyRuleNetworkMatchUserDefinedField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DestIpRanges",
      "Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
