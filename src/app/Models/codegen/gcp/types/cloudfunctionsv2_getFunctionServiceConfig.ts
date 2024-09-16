import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfunctionsv2_getFunctionServiceConfigSecretEnvironmentVariable,
  cloudfunctionsv2_getFunctionServiceConfigSecretEnvironmentVariable_GetTypes,
} from './cloudfunctionsv2_getFunctionServiceConfigSecretEnvironmentVariable';
import {
  cloudfunctionsv2_getFunctionServiceConfigSecretVolume,
  cloudfunctionsv2_getFunctionServiceConfigSecretVolume_GetTypes,
} from './cloudfunctionsv2_getFunctionServiceConfigSecretVolume';

export interface cloudfunctionsv2_getFunctionServiceConfig {
  // The Serverless VPC Access connector that this cloud function can connect to.
  vpcConnector?: string;

  // Whether 100%!!(MISSING)o(MISSING)f traffic is routed to the latest revision. Defaults to true.
  allTrafficOnLatestRevision?: boolean;

  // Environment variables that shall be available during function execution.
  environmentVariables?: Map<string, string>;

  /*
The limit on the maximum number of function instances that may coexist at a
given time.
*/
  maxInstanceCount?: number;

  // Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.
  maxInstanceRequestConcurrency?: number;

  // Name of the service associated with a Function.
  service?: string;

  /*
The function execution timeout. Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.
*/
  timeoutSeconds?: number;

  // URI of the Service deployed.
  uri?: string;

  /*
The amount of memory available for a function.
Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
supplied the value is interpreted as bytes.
*/
  availableMemory?: string;

  // URIs of the Service deployed
  gcfUri?: string;

  // The number of CPUs used in a single container instance. Default value is calculated from available memory.
  availableCpu?: string;

  // Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"]
  vpcConnectorEgressSettings?: string;

  // Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"]
  ingressSettings?: string;

  /*
The limit on the minimum number of function instances that may coexist at a
given time.
*/
  minInstanceCount?: number;

  // Secret environment variables configuration.
  secretEnvironmentVariables?: Array<cloudfunctionsv2_getFunctionServiceConfigSecretEnvironmentVariable>;

  // Secret volumes configuration.
  secretVolumes?: Array<cloudfunctionsv2_getFunctionServiceConfigSecretVolume>;

  // The email of the service account for this function.
  serviceAccountEmail?: string;
}

export function cloudfunctionsv2_getFunctionServiceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxInstanceCount',
      'The limit on the maximum number of function instances that may coexist at a\ngiven time.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'uri',
      'URI of the Service deployed.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'availableMemory',
      'The amount of memory available for a function.\nDefaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is\nsupplied the value is interpreted as bytes.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'secretVolumes',
      'Secret volumes configuration.',
      () => cloudfunctionsv2_getFunctionServiceConfigSecretVolume_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcConnector',
      'The Serverless VPC Access connector that this cloud function can connect to.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allTrafficOnLatestRevision',
      'Whether 100%!o(MISSING)f traffic is routed to the latest revision. Defaults to true.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'availableCpu',
      'The number of CPUs used in a single container instance. Default value is calculated from available memory.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ingressSettings',
      'Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"]',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceAccountEmail',
      'The email of the service account for this function.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'service',
      'Name of the service associated with a Function.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'timeoutSeconds',
      'The function execution timeout. Execution is considered failed and\ncan be terminated if the function is not completed at the end of the\ntimeout period. Defaults to 60 seconds.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minInstanceCount',
      'The limit on the minimum number of function instances that may coexist at a\ngiven time.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'environmentVariables',
      'Environment variables that shall be available during function execution.',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxInstanceRequestConcurrency',
      'Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'secretEnvironmentVariables',
      'Secret environment variables configuration.',
      () =>
        cloudfunctionsv2_getFunctionServiceConfigSecretEnvironmentVariable_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'gcfUri',
      'URIs of the Service deployed',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcConnectorEgressSettings',
      'Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"]',
      () => [],
      true,
      false,
    ),
  ];
}
