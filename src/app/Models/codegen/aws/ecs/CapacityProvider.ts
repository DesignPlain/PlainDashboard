import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ecs_CapacityProviderAutoScalingGroupProvider,
  ecs_CapacityProviderAutoScalingGroupProvider_GetTypes,
} from '../types/ecs_CapacityProviderAutoScalingGroupProvider';

export interface CapacityProviderArgs {
  // Configuration block for the provider for the ECS auto scaling group. Detailed below.
  autoScalingGroupProvider?: ecs_CapacityProviderAutoScalingGroupProvider;

  // Name of the capacity provider.
  name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class CapacityProvider extends DS_Resource {
  // Configuration block for the provider for the ECS auto scaling group. Detailed below.
  public autoScalingGroupProvider?: ecs_CapacityProviderAutoScalingGroupProvider;

  // Name of the capacity provider.
  public name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN that identifies the capacity provider.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'autoScalingGroupProvider',
        'Configuration block for the provider for the ECS auto scaling group. Detailed below.',
        () => ecs_CapacityProviderAutoScalingGroupProvider_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the capacity provider.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
