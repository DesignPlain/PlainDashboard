import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AutoScalingConfigurationVersionArgs {
  // Name of the auto scaling configuration.
  autoScalingConfigurationName?: string;

  // Maximal number of concurrent requests that you want an instance to process. When the number of concurrent requests goes over this limit, App Runner scales up your service.
  maxConcurrency?: number;

  // Maximal number of instances that App Runner provisions for your service.
  maxSize?: number;

  // Minimal number of instances that App Runner provisions for your service.
  minSize?: number;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class AutoScalingConfigurationVersion extends DS_Resource {
  // The revision of this auto scaling configuration.
  public autoScalingConfigurationRevision?: number;

  //
  public isDefault?: boolean;

  // Maximal number of instances that App Runner provisions for your service.
  public maxSize?: number;

  // Current state of the auto scaling configuration. An INACTIVE configuration revision has been deleted and can't be used. It is permanently removed some time after deletion.
  public status?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of this auto scaling configuration version.
  public arn?: string;

  // Name of the auto scaling configuration.
  public autoScalingConfigurationName?: string;

  //
  public hasAssociatedService?: boolean;

  // Whether the auto scaling configuration has the highest `auto_scaling_configuration_revision` among all configurations that share the same `auto_scaling_configuration_name`.
  public latest?: boolean;

  // Maximal number of concurrent requests that you want an instance to process. When the number of concurrent requests goes over this limit, App Runner scales up your service.
  public maxConcurrency?: number;

  // Minimal number of instances that App Runner provisions for your service.
  public minSize?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'autoScalingConfigurationName',
        'Name of the auto scaling configuration.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxConcurrency',
        'Maximal number of concurrent requests that you want an instance to process. When the number of concurrent requests goes over this limit, App Runner scales up your service.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxSize',
        'Maximal number of instances that App Runner provisions for your service.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'minSize',
        'Minimal number of instances that App Runner provisions for your service.',
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
