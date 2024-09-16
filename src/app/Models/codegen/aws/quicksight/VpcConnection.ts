import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_VpcConnectionTimeouts,
  quicksight_VpcConnectionTimeouts_GetTypes,
} from '../types/quicksight_VpcConnectionTimeouts';

export interface VpcConnectionArgs {
  // The IAM role to associate with the VPC connection.
  roleArn?: string;

  /*
A list of subnet IDs for the VPC connection.

The following arguments are optional:
*/
  subnetIds?: Array<string>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID of the VPC connection.
  vpcConnectionId?: string;

  // AWS account ID.
  awsAccountId?: string;

  // The display name for the VPC connection.
  name?: string;

  // A list of security group IDs for the VPC connection.
  securityGroupIds?: Array<string>;

  //
  timeouts?: quicksight_VpcConnectionTimeouts;

  // A list of IP addresses of DNS resolver endpoints for the VPC connection.
  dnsResolvers?: Array<string>;
}
export class VpcConnection extends DS_Resource {
  /*
A list of subnet IDs for the VPC connection.

The following arguments are optional:
*/
  public subnetIds?: Array<string>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The IAM role to associate with the VPC connection.
  public roleArn?: string;

  // A list of security group IDs for the VPC connection.
  public securityGroupIds?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the VPC connection.
  public arn?: string;

  // The availability status of the VPC connection. Valid values are `AVAILABLE`, `UNAVAILABLE` or `PARTIALLY_AVAILABLE`.
  public availabilityStatus?: string;

  // AWS account ID.
  public awsAccountId?: string;

  // A list of IP addresses of DNS resolver endpoints for the VPC connection.
  public dnsResolvers?: Array<string>;

  // The display name for the VPC connection.
  public name?: string;

  //
  public timeouts?: quicksight_VpcConnectionTimeouts;

  // The ID of the VPC connection.
  public vpcConnectionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpcConnectionId',
        'The ID of the VPC connection.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'awsAccountId',
        'AWS account ID.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'dnsResolvers',
        'A list of IP addresses of DNS resolver endpoints for the VPC connection.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'The IAM role to associate with the VPC connection.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'subnetIds',
        'A list of subnet IDs for the VPC connection.\n\nThe following arguments are optional:',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The display name for the VPC connection.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'securityGroupIds',
        'A list of security group IDs for the VPC connection.',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => quicksight_VpcConnectionTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
