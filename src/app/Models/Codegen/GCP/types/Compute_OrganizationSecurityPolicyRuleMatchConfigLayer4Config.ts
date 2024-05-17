import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_OrganizationSecurityPolicyRuleMatchConfigLayer4Config {
  /*
The IP protocol to which this rule applies. The protocol
type is required when creating a firewall rule.
This value can either be one of the following well
known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
or the IP protocol number.
*/
  IpProtocol?: string;

  /*
An optional list of ports to which this rule applies. This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

- - -
*/
  Ports?: Array<string>;
}

export function Compute_OrganizationSecurityPolicyRuleMatchConfigLayer4Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IpProtocol",
      "The IP protocol to which this rule applies. The protocol\ntype is required when creating a firewall rule.\nThis value can either be one of the following well\nknown protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),\nor the IP protocol number.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ports",
      'An optional list of ports to which this rule applies. This field\nis only applicable for UDP or TCP protocol. Each entry must be\neither an integer or a range. If not specified, this rule\napplies to connections through any port.\nExample inputs include: ["22"], ["80","443"], and\n["12345-12349"].\n\n- - -',
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
