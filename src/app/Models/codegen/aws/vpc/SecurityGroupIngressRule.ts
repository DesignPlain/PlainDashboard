import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SecurityGroupIngressRuleArgs {
  // The source IPv4 CIDR range.
  cidrIpv4?: string;

  // The security group rule description.
  description?: string;

  // The IP protocol name or number. Use `-1` to specify all protocols. Note that if `ip_protocol` is set to `-1`, it translates to all protocols, all port ranges, and `from_port` and `to_port` values should not be defined.
  ipProtocol?: string;

  // The source security group that is referenced in the rule.
  referencedSecurityGroupId?: string;

  // The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.
  toPort?: number;

  // The source IPv6 CIDR range.
  cidrIpv6?: string;

  // The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type.
  fromPort?: number;

  // The ID of the source prefix list.
  prefixListId?: string;

  // The ID of the security group.
  securityGroupId?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class SecurityGroupIngressRule extends DS_Resource {
  // The ID of the security group.
  public securityGroupId?: string;

  // The ID of the security group rule.
  public securityGroupRuleId?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the security group rule.
  public arn?: string;

  // The source IPv4 CIDR range.
  public cidrIpv4?: string;

  // The security group rule description.
  public description?: string;

  // The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type.
  public fromPort?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.
  public toPort?: number;

  // The source IPv6 CIDR range.
  public cidrIpv6?: string;

  // The IP protocol name or number. Use `-1` to specify all protocols. Note that if `ip_protocol` is set to `-1`, it translates to all protocols, all port ranges, and `from_port` and `to_port` values should not be defined.
  public ipProtocol?: string;

  // The ID of the source prefix list.
  public prefixListId?: string;

  // The source security group that is referenced in the rule.
  public referencedSecurityGroupId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'cidrIpv4',
        'The source IPv4 CIDR range.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The security group rule description.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipProtocol',
        'The IP protocol name or number. Use `-1` to specify all protocols. Note that if `ip_protocol` is set to `-1`, it translates to all protocols, all port ranges, and `from_port` and `to_port` values should not be defined.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'referencedSecurityGroupId',
        'The source security group that is referenced in the rule.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'fromPort',
        'The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'toPort',
        'The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'cidrIpv6',
        'The source IPv6 CIDR range.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'prefixListId',
        'The ID of the source prefix list.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'securityGroupId',
        'The ID of the security group.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
