import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  m2_EnvironmentTimeouts,
  m2_EnvironmentTimeouts_GetTypes,
} from '../types/m2_EnvironmentTimeouts';
import {
  m2_EnvironmentHighAvailabilityConfig,
  m2_EnvironmentHighAvailabilityConfig_GetTypes,
} from '../types/m2_EnvironmentHighAvailabilityConfig';
import {
  m2_EnvironmentStorageConfiguration,
  m2_EnvironmentStorageConfiguration_GetTypes,
} from '../types/m2_EnvironmentStorageConfiguration';

export interface EnvironmentArgs {
  //
  applyChangesDuringMaintenanceWindow?: boolean;

  // Engine type must be `microfocus` or `bluage`.
  engineType?: string;

  // The specific version of the engine for the Environment.
  engineVersion?: string;

  // Allow applications deployed to this environment to be publicly accessible.
  publiclyAccessible?: boolean;

  // List of security group ids.
  securityGroupIds?: Array<string>;

  // Force update the environment even if applications are running.
  forceUpdate?: boolean;

  // Name of the runtime environment. Must be unique within the account.
  name?: string;

  // Configures the maintenance window that you want for the runtime environment. The maintenance window must have the format `ddd:hh24:mi-ddd:hh24:mi` and must be less than 24 hours. If not provided a random value will be used.
  preferredMaintenanceWindow?: string;

  //
  timeouts?: m2_EnvironmentTimeouts;

  // List of subnet ids to deploy environment to.
  subnetIds?: Array<string>;

  // Key-value tags for the place index. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  description?: string;

  //
  highAvailabilityConfig?: m2_EnvironmentHighAvailabilityConfig;

  /*
M2 Instance Type.

The following arguments are optional:
*/
  instanceType?: string;

  // ARN of the KMS key to use for the Environment.
  kmsKeyId?: string;

  //
  storageConfiguration?: m2_EnvironmentStorageConfiguration;
}
export class Environment extends DS_Resource {
  //
  public description?: string;

  // Engine type must be `microfocus` or `bluage`.
  public engineType?: string;

  // The specific version of the engine for the Environment.
  public engineVersion?: string;

  // Force update the environment even if applications are running.
  public forceUpdate?: boolean;

  // ARN of the load balancer created by the Environment.
  public loadBalancerArn?: string;

  //
  public timeouts?: m2_EnvironmentTimeouts;

  // The id of the Environment.
  public environmentId?: string;

  /*
M2 Instance Type.

The following arguments are optional:
*/
  public instanceType?: string;

  // ARN of the KMS key to use for the Environment.
  public kmsKeyId?: string;

  // Name of the runtime environment. Must be unique within the account.
  public name?: string;

  // Configures the maintenance window that you want for the runtime environment. The maintenance window must have the format `ddd:hh24:mi-ddd:hh24:mi` and must be less than 24 hours. If not provided a random value will be used.
  public preferredMaintenanceWindow?: string;

  // ARN of the Environment.
  public arn?: string;

  // Allow applications deployed to this environment to be publicly accessible.
  public publiclyAccessible?: boolean;

  // List of security group ids.
  public securityGroupIds?: Array<string>;

  //
  public storageConfiguration?: m2_EnvironmentStorageConfiguration;

  // Key-value tags for the place index. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  //
  public applyChangesDuringMaintenanceWindow?: boolean;

  //
  public highAvailabilityConfig?: m2_EnvironmentHighAvailabilityConfig;

  // List of subnet ids to deploy environment to.
  public subnetIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'instanceType',
        'M2 Instance Type.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'storageConfiguration',
        '',
        () => m2_EnvironmentStorageConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'applyChangesDuringMaintenanceWindow',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'securityGroupIds',
        'List of security group ids.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the runtime environment. Must be unique within the account.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'preferredMaintenanceWindow',
        'Configures the maintenance window that you want for the runtime environment. The maintenance window must have the format `ddd:hh24:mi-ddd:hh24:mi` and must be less than 24 hours. If not provided a random value will be used.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => m2_EnvironmentTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'subnetIds',
        'List of subnet ids to deploy environment to.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyId',
        'ARN of the KMS key to use for the Environment.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'engineType',
        'Engine type must be `microfocus` or `bluage`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceUpdate',
        'Force update the environment even if applications are running.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'publiclyAccessible',
        'Allow applications deployed to this environment to be publicly accessible.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'highAvailabilityConfig',
        '',
        () => m2_EnvironmentHighAvailabilityConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'engineVersion',
        'The specific version of the engine for the Environment.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value tags for the place index. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
