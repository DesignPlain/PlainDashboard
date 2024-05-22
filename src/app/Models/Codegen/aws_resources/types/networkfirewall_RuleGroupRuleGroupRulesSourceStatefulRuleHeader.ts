import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleHeader {
  // The destination IP address or address range to inspect for, in CIDR notation. To match with any address, specify `ANY`.
  destination?: string;

  // The destination port to inspect for. To match with any address, specify `ANY`.
  destinationPort?: string;

  // The direction of traffic flow to inspect. Valid values: `ANY` or `FORWARD`.
  direction?: string;

  // The protocol to inspect. Valid values: `IP`, `TCP`, `UDP`, `ICMP`, `HTTP`, `FTP`, `TLS`, `SMB`, `DNS`, `DCERPC`, `SSH`, `SMTP`, `IMAP`, `MSN`, `KRB5`, `IKEV2`, `TFTP`, `NTP`, `DHCP`.
  protocol?: string;

  // The source IP address or address range for, in CIDR notation. To match with any address, specify `ANY`.
  source?: string;

  // The source port to inspect for. To match with any address, specify `ANY`.
  sourcePort?: string;
}

export function networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destination",
      "The destination IP address or address range to inspect for, in CIDR notation. To match with any address, specify `ANY`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "destinationPort",
      "The destination port to inspect for. To match with any address, specify `ANY`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "direction",
      "The direction of traffic flow to inspect. Valid values: `ANY` or `FORWARD`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "The protocol to inspect. Valid values: `IP`, `TCP`, `UDP`, `ICMP`, `HTTP`, `FTP`, `TLS`, `SMB`, `DNS`, `DCERPC`, `SSH`, `SMTP`, `IMAP`, `MSN`, `KRB5`, `IKEV2`, `TFTP`, `NTP`, `DHCP`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "The source IP address or address range for, in CIDR notation. To match with any address, specify `ANY`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourcePort",
      "The source port to inspect for. To match with any address, specify `ANY`.",
      [],
      true,
      false,
    ),
  ];
}
