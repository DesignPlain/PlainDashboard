import { RegionSecurityPolicyRuleNetworkMatchUserDefinedField } from "./RegionSecurityPolicyRuleNetworkMatchUserDefinedField";

export interface RegionSecurityPolicyRuleNetworkMatch {
  // Source port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
  SrcPorts?: Array<string>;

  // Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.
  SrcRegionCodes?: Array<string>;

  /*
User-defined fields. Each element names a defined field and lists the matching values for that field.
Structure is documented below.
*/
  UserDefinedFields?: Array<RegionSecurityPolicyRuleNetworkMatchUserDefinedField>;

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
}
