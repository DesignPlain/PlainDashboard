import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange,
  finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange_GetTypes,
} from "./finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange";
import {
  finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode,
  finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode_GetTypes,
} from "./finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode";

export interface finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration {
  // Indicates whether to `allow` or `deny` the traffic that matches the rule.
  ruleAction?: string;

  // Rule number for the entry. All the network ACL entries are processed in ascending order by rule number.
  ruleNumber?: number;

  // The IPv4 network range to allow or deny, in CIDR notation. The specified CIDR block is modified to its canonical form. For example, `100.68.0.18/18` will be converted to `100.68.0.0/18`.
  cidrBlock?: string;

  // Defines the ICMP protocol that consists of the ICMP type and code. Defined below.
  icmpTypeCode?: finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode;

  // Range of ports the rule applies to. Defined below.
  portRange?: finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange;

  // Protocol number. A value of `1` means all the protocols.
  protocol?: string;
}

export function finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "portRange",
      "Range of ports the rule applies to. Defined below.",
      () =>
        finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "Protocol number. A value of `1` means all the protocols.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ruleAction",
      "Indicates whether to `allow` or `deny` the traffic that matches the rule.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ruleNumber",
      "Rule number for the entry. All the network ACL entries are processed in ascending order by rule number.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cidrBlock",
      "The IPv4 network range to allow or deny, in CIDR notation. The specified CIDR block is modified to its canonical form. For example, `100.68.0.18/18` will be converted to `100.68.0.0/18`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "icmpTypeCode",
      "Defines the ICMP protocol that consists of the ICMP type and code. Defined below.",
      () =>
        finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode_GetTypes(),
      false,
      false,
    ),
  ];
}
