import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SubnetGroupArgs {
  // The name of the neptune subnet group. If omitted, this provider will assign a random, unique name.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // A list of VPC subnet IDs.
  subnetIds?: Array<string>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The description of the neptune subnet group. Defaults to "Managed by Pulumi".
  description?: string;
}
export class SubnetGroup extends DS_Resource {
  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // A list of VPC subnet IDs.
  public subnetIds?: Array<string>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the neptune subnet group.
  public arn?: string;

  // The description of the neptune subnet group. Defaults to "Managed by Pulumi".
  public description?: string;

  // The name of the neptune subnet group. If omitted, this provider will assign a random, unique name.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description of the neptune subnet group. Defaults to "Managed by Pulumi".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the neptune subnet group. If omitted, this provider will assign a random, unique name.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates a unique name beginning with the specified prefix. Conflicts with `name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'subnetIds',
        'A list of VPC subnet IDs.',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
