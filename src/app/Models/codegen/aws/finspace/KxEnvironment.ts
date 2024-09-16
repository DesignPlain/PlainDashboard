import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  finspace_KxEnvironmentTransitGatewayConfiguration,
  finspace_KxEnvironmentTransitGatewayConfiguration_GetTypes,
} from '../types/finspace_KxEnvironmentTransitGatewayConfiguration';
import {
  finspace_KxEnvironmentCustomDnsConfiguration,
  finspace_KxEnvironmentCustomDnsConfiguration_GetTypes,
} from '../types/finspace_KxEnvironmentCustomDnsConfiguration';

export interface KxEnvironmentArgs {
  // Transit gateway and network configuration that is used to connect the KX environment to an internal network. Defined below.
  transitGatewayConfiguration?: finspace_KxEnvironmentTransitGatewayConfiguration;

  // List of DNS server name and server IP. This is used to set up Route-53 outbound resolvers. Defined below.
  customDnsConfigurations?: Array<finspace_KxEnvironmentCustomDnsConfiguration>;

  // Description for the KX environment.
  description?: string;

  /*
KMS key ID to encrypt your data in the FinSpace environment.

The following arguments are optional:
*/
  kmsKeyId?: string;

  // Name of the KX environment that you want to create.
  name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class KxEnvironment extends DS_Resource {
  // AWS Availability Zone IDs that this environment is available in. Important when selecting VPC subnets to use in cluster creation.
  public availabilityZones?: Array<string>;

  // Timestamp at which the environment is created in FinSpace. Value determined as epoch time in seconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000.
  public createdTimestamp?: string;

  // List of DNS server name and server IP. This is used to set up Route-53 outbound resolvers. Defined below.
  public customDnsConfigurations?: Array<finspace_KxEnvironmentCustomDnsConfiguration>;

  // Unique identifier for the AWS environment infrastructure account.
  public infrastructureAccountId?: string;

  /*
KMS key ID to encrypt your data in the FinSpace environment.

The following arguments are optional:
*/
  public kmsKeyId?: string;

  // Last timestamp at which the environment was updated in FinSpace. Value determined as epoch time in seconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000.
  public lastModifiedTimestamp?: string;

  // Status of environment creation
  public status?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) identifier of the KX environment.
  public arn?: string;

  // Description for the KX environment.
  public description?: string;

  // Name of the KX environment that you want to create.
  public name?: string;

  // Transit gateway and network configuration that is used to connect the KX environment to an internal network. Defined below.
  public transitGatewayConfiguration?: finspace_KxEnvironmentTransitGatewayConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the KX environment that you want to create.',
        () => [],
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
        'transitGatewayConfiguration',
        'Transit gateway and network configuration that is used to connect the KX environment to an internal network. Defined below.',
        () => finspace_KxEnvironmentTransitGatewayConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'customDnsConfigurations',
        'List of DNS server name and server IP. This is used to set up Route-53 outbound resolvers. Defined below.',
        () => finspace_KxEnvironmentCustomDnsConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description for the KX environment.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyId',
        'KMS key ID to encrypt your data in the FinSpace environment.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
    ];
  }
}
