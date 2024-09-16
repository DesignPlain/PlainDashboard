import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  emrserverless_ApplicationNetworkConfiguration,
  emrserverless_ApplicationNetworkConfiguration_GetTypes,
} from '../types/emrserverless_ApplicationNetworkConfiguration';
import {
  emrserverless_ApplicationAutoStartConfiguration,
  emrserverless_ApplicationAutoStartConfiguration_GetTypes,
} from '../types/emrserverless_ApplicationAutoStartConfiguration';
import {
  emrserverless_ApplicationInitialCapacity,
  emrserverless_ApplicationInitialCapacity_GetTypes,
} from '../types/emrserverless_ApplicationInitialCapacity';
import {
  emrserverless_ApplicationInteractiveConfiguration,
  emrserverless_ApplicationInteractiveConfiguration_GetTypes,
} from '../types/emrserverless_ApplicationInteractiveConfiguration';
import {
  emrserverless_ApplicationAutoStopConfiguration,
  emrserverless_ApplicationAutoStopConfiguration_GetTypes,
} from '../types/emrserverless_ApplicationAutoStopConfiguration';
import {
  emrserverless_ApplicationImageConfiguration,
  emrserverless_ApplicationImageConfiguration_GetTypes,
} from '../types/emrserverless_ApplicationImageConfiguration';
import {
  emrserverless_ApplicationMaximumCapacity,
  emrserverless_ApplicationMaximumCapacity_GetTypes,
} from '../types/emrserverless_ApplicationMaximumCapacity';

export interface ApplicationArgs {
  // The maximum capacity to allocate when the application is created. This is cumulative across all workers at any given point in time, not just when an application is created. No new resources will be created once any one of the defined limits is hit.
  maximumCapacity?: emrserverless_ApplicationMaximumCapacity;

  // The network configuration for customer VPC connectivity.
  networkConfiguration?: emrserverless_ApplicationNetworkConfiguration;

  // The EMR release version associated with the application.
  releaseLabel?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The type of application you want to start, such as `spark` or `hive`.
  type?: string;

  // The CPU architecture of an application. Valid values are `ARM64` or `X86_64`. Default value is `X86_64`.
  architecture?: string;

  // The configuration for an application to automatically start on job submission.
  autoStartConfiguration?: emrserverless_ApplicationAutoStartConfiguration;

  // The capacity to initialize when the application is created.
  initialCapacities?: Array<emrserverless_ApplicationInitialCapacity>;

  // Enables the interactive use cases to use when running an application.
  interactiveConfiguration?: emrserverless_ApplicationInteractiveConfiguration;

  // The name of the application.
  name?: string;

  // The configuration for an application to automatically stop after a certain amount of time being idle.
  autoStopConfiguration?: emrserverless_ApplicationAutoStopConfiguration;

  // The image configuration applied to all worker types.
  imageConfiguration?: emrserverless_ApplicationImageConfiguration;
}
export class Application extends DS_Resource {
  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The configuration for an application to automatically start on job submission.
  public autoStartConfiguration?: emrserverless_ApplicationAutoStartConfiguration;

  // The maximum capacity to allocate when the application is created. This is cumulative across all workers at any given point in time, not just when an application is created. No new resources will be created once any one of the defined limits is hit.
  public maximumCapacity?: emrserverless_ApplicationMaximumCapacity;

  // The name of the application.
  public name?: string;

  // The EMR release version associated with the application.
  public releaseLabel?: string;

  // ARN of the cluster.
  public arn?: string;

  // The image configuration applied to all worker types.
  public imageConfiguration?: emrserverless_ApplicationImageConfiguration;

  // Enables the interactive use cases to use when running an application.
  public interactiveConfiguration?: emrserverless_ApplicationInteractiveConfiguration;

  // The network configuration for customer VPC connectivity.
  public networkConfiguration?: emrserverless_ApplicationNetworkConfiguration;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The type of application you want to start, such as `spark` or `hive`.
  public type?: string;

  // The CPU architecture of an application. Valid values are `ARM64` or `X86_64`. Default value is `X86_64`.
  public architecture?: string;

  // The configuration for an application to automatically stop after a certain amount of time being idle.
  public autoStopConfiguration?: emrserverless_ApplicationAutoStopConfiguration;

  // The capacity to initialize when the application is created.
  public initialCapacities?: Array<emrserverless_ApplicationInitialCapacity>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'maximumCapacity',
        'The maximum capacity to allocate when the application is created. This is cumulative across all workers at any given point in time, not just when an application is created. No new resources will be created once any one of the defined limits is hit.',
        () => emrserverless_ApplicationMaximumCapacity_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'releaseLabel',
        'The EMR release version associated with the application.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The type of application you want to start, such as `spark` or `hive`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'architecture',
        'The CPU architecture of an application. Valid values are `ARM64` or `X86_64`. Default value is `X86_64`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'interactiveConfiguration',
        'Enables the interactive use cases to use when running an application.',
        () => emrserverless_ApplicationInteractiveConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the application.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'autoStopConfiguration',
        'The configuration for an application to automatically stop after a certain amount of time being idle.',
        () => emrserverless_ApplicationAutoStopConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'networkConfiguration',
        'The network configuration for customer VPC connectivity.',
        () => emrserverless_ApplicationNetworkConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'autoStartConfiguration',
        'The configuration for an application to automatically start on job submission.',
        () => emrserverless_ApplicationAutoStartConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'initialCapacities',
        'The capacity to initialize when the application is created.',
        () => emrserverless_ApplicationInitialCapacity_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'imageConfiguration',
        'The image configuration applied to all worker types.',
        () => emrserverless_ApplicationImageConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
