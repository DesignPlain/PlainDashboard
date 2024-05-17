import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionNetworkFirewallPolicyRuleMatchLayer4Config {
  // The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (`tcp`, `udp`, `icmp`, `esp`, `ah`, `ipip`, `sctp`), or the IP protocol number.
  IpProtocol?: string;

  /*
An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port. Example inputs include: ``.

- - -
*/
  Ports?: Array<string>;
}

export function Compute_RegionNetworkFirewallPolicyRuleMatchLayer4Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IpProtocol",
      "The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (`tcp`, `udp`, `icmp`, `esp`, `ah`, `ipip`, `sctp`), or the IP protocol number.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ports",
      "An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port. Example inputs include: ``.\n\n- - -",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
