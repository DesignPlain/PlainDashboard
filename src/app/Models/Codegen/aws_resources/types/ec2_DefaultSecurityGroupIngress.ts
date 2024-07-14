import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_DefaultSecurityGroupIngress {
  // List of IPv6 CIDR blocks.
  ipv6CidrBlocks?: Array<string>;

  // List of prefix list IDs (for allowing access to VPC endpoints)
  prefixListIds?: Array<string>;

  // Protocol. If you select a protocol of "-1" (semantically equivalent to `all`, which is not a valid value here), you must specify a `from_port` and `to_port` equal to `0`. If not `icmp`, `tcp`, `udp`, or `-1` use the [protocol number](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).
  protocol?: string;

  // List of security groups. A group name can be used relative to the default VPC. Otherwise, group ID.
  securityGroups?: Array<string>;

  // End range port (or ICMP code if protocol is `icmp`).
  toPort?: number;

  // List of CIDR blocks.
  cidrBlocks?: Array<string>;

  // Description of this rule.
  description?: string;

  // Start port (or ICMP type number if protocol is `icmp`)
  fromPort?: number;

  // Whether the security group itself will be added as a source to this egress rule.
  self?: boolean;
}

export function ec2_DefaultSecurityGroupIngress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "List of security groups. A group name can be used relative to the default VPC. Otherwise, group ID.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "toPort",
      "End range port (or ICMP code if protocol is `icmp`).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cidrBlocks",
      "List of CIDR blocks.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of this rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "fromPort",
      "Start port (or ICMP type number if protocol is `icmp`)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipv6CidrBlocks",
      "List of IPv6 CIDR blocks.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      'Protocol. If you select a protocol of "-1" (semantically equivalent to `all`, which is not a valid value here), you must specify a `from_port` and `to_port` equal to `0`. If not `icmp`, `tcp`, `udp`, or `-1` use the [protocol number](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "prefixListIds",
      "List of prefix list IDs (for allowing access to VPC endpoints)",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "self",
      "Whether the security group itself will be added as a source to this egress rule.",
      [],
      false,
      false,
    ),
  ];
}
