import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_SecurityGroupEgress {
  // Start port (or ICMP type number if protocol is `icmp`)
  fromPort?: number;

  // List of IPv6 CIDR blocks.
  ipv6CidrBlocks?: Array<string>;

  // List of Prefix List IDs.
  prefixListIds?: Array<string>;

  // Protocol. If you select a protocol of `-1` (semantically equivalent to `all`, which is not a valid value here), you must specify a `from_port` and `to_port` equal to 0. The supported values are defined in the `IpProtocol` argument in the [IpPermission](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IpPermission.html) API reference.
  protocol?: string;

  // List of security groups. A group name can be used relative to the default VPC. Otherwise, group ID.
  securityGroups?: Array<string>;

  // List of CIDR blocks.
  cidrBlocks?: Array<string>;

  // Description of this egress rule.
  description?: string;

  // Whether the security group itself will be added as a source to this egress rule.
  self?: boolean;

  /*
End range port (or ICMP code if protocol is `icmp`).

The following arguments are optional:

> --Note-- Although `cidr_blocks`, `ipv6_cidr_blocks`, `prefix_list_ids`, and `security_groups` are all marked as optional, you _must_ provide one of them in order to configure the destination of the traffic.
*/
  toPort?: number;
}

export function ec2_SecurityGroupEgress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "List of security groups. A group name can be used relative to the default VPC. Otherwise, group ID.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cidrBlocks",
      "List of CIDR blocks.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "self",
      "Whether the security group itself will be added as a source to this egress rule.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "fromPort",
      "Start port (or ICMP type number if protocol is `icmp`)",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipv6CidrBlocks",
      "List of IPv6 CIDR blocks.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "prefixListIds",
      "List of Prefix List IDs.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "Protocol. If you select a protocol of `-1` (semantically equivalent to `all`, which is not a valid value here), you must specify a `from_port` and `to_port` equal to 0. The supported values are defined in the `IpProtocol` argument in the [IpPermission](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IpPermission.html) API reference.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of this egress rule.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "toPort",
      "End range port (or ICMP code if protocol is `icmp`).\n\nThe following arguments are optional:\n\n> **Note** Although `cidr_blocks`, `ipv6_cidr_blocks`, `prefix_list_ids`, and `security_groups` are all marked as optional, you _must_ provide one of them in order to configure the destination of the traffic.",
      () => [],
      true,
      false,
    ),
  ];
}
