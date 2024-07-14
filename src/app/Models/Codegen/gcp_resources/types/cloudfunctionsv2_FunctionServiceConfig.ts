import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfunctionsv2_FunctionServiceConfigSecretEnvironmentVariable,
  cloudfunctionsv2_FunctionServiceConfigSecretEnvironmentVariable_GetTypes,
} from "./cloudfunctionsv2_FunctionServiceConfigSecretEnvironmentVariable";
import {
  cloudfunctionsv2_FunctionServiceConfigSecretVolume,
  cloudfunctionsv2_FunctionServiceConfigSecretVolume_GetTypes,
} from "./cloudfunctionsv2_FunctionServiceConfigSecretVolume";

export interface cloudfunctionsv2_FunctionServiceConfig {
  // Whether 100%!!(MISSING)o(MISSING)f traffic is routed to the latest revision. Defaults to true.
  allTrafficOnLatestRevision?: boolean;

  // Environment variables that shall be available during function execution.
  environmentVariables?: Map<string, string>;

  /*
The function execution timeout. Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.
*/
  timeoutSeconds?: number;

  /*
The amount of memory available for a function.
Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
supplied the value is interpreted as bytes.
*/
  availableMemory?: string;

  /*
Secret environment variables configuration.
Structure is documented below.
*/
  secretEnvironmentVariables?: Array<cloudfunctionsv2_FunctionServiceConfigSecretEnvironmentVariable>;

  /*
Secret volumes configuration.
Structure is documented below.
*/
  secretVolumes?: Array<cloudfunctionsv2_FunctionServiceConfigSecretVolume>;

  // Name of the service associated with a Function.
  service?: string;

  /*
(Output)
URI of the Service deployed.
*/
  uri?: string;

  // The number of CPUs used in a single container instance. Default value is calculated from available memory.
  availableCpu?: string;

  /*
(Output)
URIs of the Service deployed
*/
  gcfUri?: string;

  // The Serverless VPC Access connector that this cloud function can connect to.
  vpcConnector?: string;

  /*
Available egress settings.
Possible values are: `VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED`, `PRIVATE_RANGES_ONLY`, `ALL_TRAFFIC`.
*/
  vpcConnectorEgressSettings?: string;

  /*
Available ingress settings. Defaults to "ALLOW_ALL" if unspecified.
Default value is `ALLOW_ALL`.
Possible values are: `ALLOW_ALL`, `ALLOW_INTERNAL_ONLY`, `ALLOW_INTERNAL_AND_GCLB`.
*/
  ingressSettings?: string;

  /*
The limit on the maximum number of function instances that may coexist at a
given time.
*/
  maxInstanceCount?: number;

  // Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.
  maxInstanceRequestConcurrency?: number;

  /*
The limit on the minimum number of function instances that may coexist at a
given time.
*/
  minInstanceCount?: number;

  // The email of the service account for this function.
  serviceAccountEmail?: string;
}

export function cloudfunctionsv2_FunctionServiceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "vpcConnector",
      "The Serverless VPC Access connector that this cloud function can connect to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxInstanceRequestConcurrency",
      "Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allTrafficOnLatestRevision",
      "Whether 100%!o(MISSING)f traffic is routed to the latest revision. Defaults to true.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "environmentVariables",
      "Environment variables that shall be available during function execution.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availableMemory",
      "The amount of memory available for a function.\nDefaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is\nsupplied the value is interpreted as bytes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "secretVolumes",
      "Secret volumes configuration.\nStructure is documented below.",
      cloudfunctionsv2_FunctionServiceConfigSecretVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "Name of the service associated with a Function.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gcfUri",
      "(Output)\nURIs of the Service deployed",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountEmail",
      "The email of the service account for this function.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "secretEnvironmentVariables",
      "Secret environment variables configuration.\nStructure is documented below.",
      cloudfunctionsv2_FunctionServiceConfigSecretEnvironmentVariable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availableCpu",
      "The number of CPUs used in a single container instance. Default value is calculated from available memory.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ingressSettings",
      'Available ingress settings. Defaults to "ALLOW_ALL" if unspecified.\nDefault value is `ALLOW_ALL`.\nPossible values are: `ALLOW_ALL`, `ALLOW_INTERNAL_ONLY`, `ALLOW_INTERNAL_AND_GCLB`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutSeconds",
      "The function execution timeout. Execution is considered failed and\ncan be terminated if the function is not completed at the end of the\ntimeout period. Defaults to 60 seconds.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "(Output)\nURI of the Service deployed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcConnectorEgressSettings",
      "Available egress settings.\nPossible values are: `VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED`, `PRIVATE_RANGES_ONLY`, `ALL_TRAFFIC`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxInstanceCount",
      "The limit on the maximum number of function instances that may coexist at a\ngiven time.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minInstanceCount",
      "The limit on the minimum number of function instances that may coexist at a\ngiven time.",
      [],
      false,
      false,
    ),
  ];
}
