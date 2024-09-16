import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_DefaultNetworkAclEgress,
  ec2_DefaultNetworkAclEgress_GetTypes,
} from '../types/ec2_DefaultNetworkAclEgress';
import {
  ec2_DefaultNetworkAclIngress,
  ec2_DefaultNetworkAclIngress_GetTypes,
} from '../types/ec2_DefaultNetworkAclIngress';

export interface DefaultNetworkAclArgs {
  /*
Network ACL ID to manage. This attribute is exported from `aws.ec2.Vpc`, or manually found via the AWS Console.

The following arguments are optional:
*/
  defaultNetworkAclId?: string;

  // Configuration block for an egress rule. Detailed below.
  egress?: Array<ec2_DefaultNetworkAclEgress>;

  // Configuration block for an ingress rule. Detailed below.
  ingress?: Array<ec2_DefaultNetworkAclIngress>;

  // List of Subnet IDs to apply the ACL to. See the notes above on Managing Subnets in the Default Network ACL
  subnetIds?: Array<string>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class DefaultNetworkAcl extends DS_Resource {
  // ARN of the Default Network ACL
  public arn?: string;

  /*
Network ACL ID to manage. This attribute is exported from `aws.ec2.Vpc`, or manually found via the AWS Console.

The following arguments are optional:
*/
  public defaultNetworkAclId?: string;

  // Configuration block for an ingress rule. Detailed below.
  public ingress?: Array<ec2_DefaultNetworkAclIngress>;

  // ID of the associated VPC
  public vpcId?: string;

  // Configuration block for an egress rule. Detailed below.
  public egress?: Array<ec2_DefaultNetworkAclEgress>;

  // ID of the AWS account that owns the Default Network ACL
  public ownerId?: string;

  // List of Subnet IDs to apply the ACL to. See the notes above on Managing Subnets in the Default Network ACL
  public subnetIds?: Array<string>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'defaultNetworkAclId',
        'Network ACL ID to manage. This attribute is exported from `aws.ec2.Vpc`, or manually found via the AWS Console.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'egress',
        'Configuration block for an egress rule. Detailed below.',
        () => ec2_DefaultNetworkAclEgress_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ingress',
        'Configuration block for an ingress rule. Detailed below.',
        () => ec2_DefaultNetworkAclIngress_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'subnetIds',
        'List of Subnet IDs to apply the ACL to. See the notes above on Managing Subnets in the Default Network ACL',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
