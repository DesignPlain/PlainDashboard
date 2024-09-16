import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SubnetGroupArgs {
  // Description for the cache subnet group. Defaults to "Managed by Pulumi".
  description?: string;

  // Name for the cache subnet group. ElastiCache converts this name to lowercase.
  name?: string;

  // List of VPC Subnet IDs for the cache subnet group
  subnetIds?: Array<string>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class SubnetGroup extends DS_Resource {
  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group.
  public vpcId?: string;

  //
  public arn?: string;

  // Description for the cache subnet group. Defaults to "Managed by Pulumi".
  public description?: string;

  // Name for the cache subnet group. ElastiCache converts this name to lowercase.
  public name?: string;

  // List of VPC Subnet IDs for the cache subnet group
  public subnetIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name for the cache subnet group. ElastiCache converts this name to lowercase.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'subnetIds',
        'List of VPC Subnet IDs for the cache subnet group',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description for the cache subnet group. Defaults to "Managed by Pulumi".',
        () => [],
        false,
        false,
      ),
    ];
  }
}
