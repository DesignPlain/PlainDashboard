import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkAclRuleArgs {
  // The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.
  ruleNumber?: number;

  // The to port to match.
  toPort?: number;

  // Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet). Default `false`.
  egress?: boolean;

  // The from port to match.
  fromPort?: number;

  /*
ICMP protocol: The ICMP code. Required if specifying ICMP for the protocolE.g., -1

> --NOTE:-- If the value of `protocol` is `-1` or `all`, the `from_port` and `to_port` values will be ignored and the rule will apply to all ports.

> --NOTE:-- If the value of `icmp_type` is `-1` (which results in a wildcard ICMP type), the `icmp_code` must also be set to `-1` (wildcard ICMP code).

> Note: For more information on ICMP types and codes, see here: https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml
*/
  icmpCode?: number;

  // ICMP protocol: The ICMP type. Required if specifying ICMP for the protocolE.g., -1
  icmpType?: number;

  // The IPv6 CIDR block to allow or deny.
  ipv6CidrBlock?: string;

  // The protocol. A value of -1 means all protocols.
  protocol?: string;

  // The network range to allow or deny, in CIDR notation (for example 172.16.0.0/24 ).
  cidrBlock?: string;

  // The ID of the network ACL.
  networkAclId?: string;

  // Indicates whether to allow or deny the traffic that matches the rule. Accepted values: `allow` | `deny`
  ruleAction?: string;
}
export class NetworkAclRule extends Resource {
  // The network range to allow or deny, in CIDR notation (for example 172.16.0.0/24 ).
  public cidrBlock?: string;

  // Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet). Default `false`.
  public egress?: boolean;

  /*
ICMP protocol: The ICMP code. Required if specifying ICMP for the protocolE.g., -1

> --NOTE:-- If the value of `protocol` is `-1` or `all`, the `from_port` and `to_port` values will be ignored and the rule will apply to all ports.

> --NOTE:-- If the value of `icmp_type` is `-1` (which results in a wildcard ICMP type), the `icmp_code` must also be set to `-1` (wildcard ICMP code).

> Note: For more information on ICMP types and codes, see here: https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml
*/
  public icmpCode?: number;

  // ICMP protocol: The ICMP type. Required if specifying ICMP for the protocolE.g., -1
  public icmpType?: number;

  // The IPv6 CIDR block to allow or deny.
  public ipv6CidrBlock?: string;

  // The ID of the network ACL.
  public networkAclId?: string;

  // The to port to match.
  public toPort?: number;

  // The from port to match.
  public fromPort?: number;

  // The protocol. A value of -1 means all protocols.
  public protocol?: string;

  // Indicates whether to allow or deny the traffic that matches the rule. Accepted values: `allow` | `deny`
  public ruleAction?: string;

  // The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.
  public ruleNumber?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "icmpCode",
        "ICMP protocol: The ICMP code. Required if specifying ICMP for the protocolE.g., -1\n\n> **NOTE:** If the value of `protocol` is `-1` or `all`, the `from_port` and `to_port` values will be ignored and the rule will apply to all ports.\n\n> **NOTE:** If the value of `icmp_type` is `-1` (which results in a wildcard ICMP type), the `icmp_code` must also be set to `-1` (wildcard ICMP code).\n\n> Note: For more information on ICMP types and codes, see here: https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "icmpType",
        "ICMP protocol: The ICMP type. Required if specifying ICMP for the protocolE.g., -1",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipv6CidrBlock",
        "The IPv6 CIDR block to allow or deny.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cidrBlock",
        "The network range to allow or deny, in CIDR notation (for example 172.16.0.0/24 ).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ruleAction",
        "Indicates whether to allow or deny the traffic that matches the rule. Accepted values: `allow` | `deny`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ruleNumber",
        "The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "toPort",
        "The to port to match.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "egress",
        "Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet). Default `false`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "fromPort",
        "The from port to match.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "The protocol. A value of -1 means all protocols.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkAclId",
        "The ID of the network ACL.",
        [],
        true,
        true,
      ),
    ];
  }
}
