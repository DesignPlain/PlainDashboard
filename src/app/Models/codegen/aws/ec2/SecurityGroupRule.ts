import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SecurityGroupRuleArgs {
  // Protocol. If not icmp, icmpv6, tcp, udp, or all use the [protocol number](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)
  protocol?: string;

  // End port (or ICMP code if protocol is "icmp").
  toPort?: number;

  /*
Type of rule being created. Valid options are `ingress` (inbound)
or `egress` (outbound).

The following arguments are optional:

> --Note-- Although `cidr_blocks`, `ipv6_cidr_blocks`, `prefix_list_ids`, and `source_security_group_id` are all marked as optional, you _must_ provide one of them in order to configure the source of the traffic.
*/
  type?: string;

  // List of CIDR blocks. Cannot be specified with `source_security_group_id` or `self`.
  cidrBlocks?: Array<string>;

  // Start port (or ICMP type number if protocol is "icmp" or "icmpv6").
  fromPort?: number;

  // List of Prefix List IDs.
  prefixListIds?: Array<string>;

  // Security group to apply this rule to.
  securityGroupId?: string;

  // Whether the security group itself will be added as a source to this ingress rule. Cannot be specified with `cidr_blocks`, `ipv6_cidr_blocks`, or `source_security_group_id`.
  self?: boolean;

  // Security group id to allow access to/from, depending on the `type`. Cannot be specified with `cidr_blocks`, `ipv6_cidr_blocks`, or `self`.
  sourceSecurityGroupId?: string;

  // Description of the rule.
  description?: string;

  // List of IPv6 CIDR blocks. Cannot be specified with `source_security_group_id` or `self`.
  ipv6CidrBlocks?: Array<string>;
}
export class SecurityGroupRule extends DS_Resource {
  // List of CIDR blocks. Cannot be specified with `source_security_group_id` or `self`.
  public cidrBlocks?: Array<string>;

  // Description of the rule.
  public description?: string;

  // If the `aws.ec2.SecurityGroupRule` resource has a single source or destination then this is the AWS Security Group Rule resource ID. Otherwise it is empty.
  public securityGroupRuleId?: string;

  // Security group id to allow access to/from, depending on the `type`. Cannot be specified with `cidr_blocks`, `ipv6_cidr_blocks`, or `self`.
  public sourceSecurityGroupId?: string;

  // Start port (or ICMP type number if protocol is "icmp" or "icmpv6").
  public fromPort?: number;

  // List of IPv6 CIDR blocks. Cannot be specified with `source_security_group_id` or `self`.
  public ipv6CidrBlocks?: Array<string>;

  // List of Prefix List IDs.
  public prefixListIds?: Array<string>;

  // Protocol. If not icmp, icmpv6, tcp, udp, or all use the [protocol number](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)
  public protocol?: string;

  // Security group to apply this rule to.
  public securityGroupId?: string;

  // Whether the security group itself will be added as a source to this ingress rule. Cannot be specified with `cidr_blocks`, `ipv6_cidr_blocks`, or `source_security_group_id`.
  public self?: boolean;

  // End port (or ICMP code if protocol is "icmp").
  public toPort?: number;

  /*
Type of rule being created. Valid options are `ingress` (inbound)
or `egress` (outbound).

The following arguments are optional:

> --Note-- Although `cidr_blocks`, `ipv6_cidr_blocks`, `prefix_list_ids`, and `source_security_group_id` are all marked as optional, you _must_ provide one of them in order to configure the source of the traffic.
*/
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "Protocol. If not icmp, icmpv6, tcp, udp, or all use the [protocol number](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cidrBlocks",
        "List of CIDR blocks. Cannot be specified with `source_security_group_id` or `self`.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "prefixListIds",
        "List of Prefix List IDs.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "self",
        "Whether the security group itself will be added as a source to this ingress rule. Cannot be specified with `cidr_blocks`, `ipv6_cidr_blocks`, or `source_security_group_id`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the rule.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ipv6CidrBlocks",
        "List of IPv6 CIDR blocks. Cannot be specified with `source_security_group_id` or `self`.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "toPort",
        'End port (or ICMP code if protocol is "icmp").',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of rule being created. Valid options are `ingress` (inbound)\nor `egress` (outbound).\n\nThe following arguments are optional:\n\n> **Note** Although `cidr_blocks`, `ipv6_cidr_blocks`, `prefix_list_ids`, and `source_security_group_id` are all marked as optional, you _must_ provide one of them in order to configure the source of the traffic.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "fromPort",
        'Start port (or ICMP type number if protocol is "icmp" or "icmpv6").',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityGroupId",
        "Security group to apply this rule to.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceSecurityGroupId",
        "Security group id to allow access to/from, depending on the `type`. Cannot be specified with `cidr_blocks`, `ipv6_cidr_blocks`, or `self`.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
