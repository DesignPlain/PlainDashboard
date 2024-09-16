import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  athena_WorkgroupConfiguration,
  athena_WorkgroupConfiguration_GetTypes,
} from '../types/athena_WorkgroupConfiguration';

export interface WorkgroupArgs {
  // Key-value map of resource tags for the workgroup. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block with various settings for the workgroup. Documented below.
  configuration?: athena_WorkgroupConfiguration;

  // Description of the workgroup.
  description?: string;

  // Option to delete the workgroup and its contents even if the workgroup contains any named queries.
  forceDestroy?: boolean;

  // Name of the workgroup.
  name?: string;

  // State of the workgroup. Valid values are `DISABLED` or `ENABLED`. Defaults to `ENABLED`.
  state?: string;
}
export class Workgroup extends DS_Resource {
  // Description of the workgroup.
  public description?: string;

  // Option to delete the workgroup and its contents even if the workgroup contains any named queries.
  public forceDestroy?: boolean;

  // Name of the workgroup.
  public name?: string;

  // State of the workgroup. Valid values are `DISABLED` or `ENABLED`. Defaults to `ENABLED`.
  public state?: string;

  // Key-value map of resource tags for the workgroup. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the workgroup
  public arn?: string;

  // Configuration block with various settings for the workgroup. Documented below.
  public configuration?: athena_WorkgroupConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags for the workgroup. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'configuration',
        'Configuration block with various settings for the workgroup. Documented below.',
        () => athena_WorkgroupConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the workgroup.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceDestroy',
        'Option to delete the workgroup and its contents even if the workgroup contains any named queries.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the workgroup.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'state',
        'State of the workgroup. Valid values are `DISABLED` or `ENABLED`. Defaults to `ENABLED`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
