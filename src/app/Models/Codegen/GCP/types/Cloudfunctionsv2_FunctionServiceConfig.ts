import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctionsv2_FunctionServiceConfigSecretVolume,
  Cloudfunctionsv2_FunctionServiceConfigSecretVolume_GetTypes,
} from "./Cloudfunctionsv2_FunctionServiceConfigSecretVolume";
import {
  Cloudfunctionsv2_FunctionServiceConfigSecretEnvironmentVariable,
  Cloudfunctionsv2_FunctionServiceConfigSecretEnvironmentVariable_GetTypes,
} from "./Cloudfunctionsv2_FunctionServiceConfigSecretEnvironmentVariable";

export interface Cloudfunctionsv2_FunctionServiceConfig {
  // The number of CPUs used in a single container instance. Default value is calculated from available memory.
  AvailableCpu?: string;

  /*
The amount of memory available for a function.
Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
supplied the value is interpreted as bytes.
*/
  AvailableMemory?: string;

  /*
The limit on the maximum number of function instances that may coexist at a
given time.
*/
  MaxInstanceCount?: number;

  /*
Secret volumes configuration.
Structure is documented below.
*/
  SecretVolumes?: Array<Cloudfunctionsv2_FunctionServiceConfigSecretVolume>;

  /*
(Output)
URI of the Service deployed.
*/
  Uri?: string;

  // Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.
  MaxInstanceRequestConcurrency?: number;

  /*
Secret environment variables configuration.
Structure is documented below.
*/
  SecretEnvironmentVariables?: Array<Cloudfunctionsv2_FunctionServiceConfigSecretEnvironmentVariable>;

  // The Serverless VPC Access connector that this cloud function can connect to.
  VpcConnector?: string;

  // Environment variables that shall be available during function execution.
  EnvironmentVariables?: Map<string, string>;

  /*
Available ingress settings. Defaults to "ALLOW_ALL" if unspecified.
Default value is `ALLOW_ALL`.
Possible values are: `ALLOW_ALL`, `ALLOW_INTERNAL_ONLY`, `ALLOW_INTERNAL_AND_GCLB`.
*/
  IngressSettings?: string;

  /*
The limit on the minimum number of function instances that may coexist at a
given time.
*/
  MinInstanceCount?: number;

  /*
The function execution timeout. Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.
*/
  TimeoutSeconds?: number;

  /*
Available egress settings.
Possible values are: `VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED`, `PRIVATE_RANGES_ONLY`, `ALL_TRAFFIC`.
*/
  VpcConnectorEgressSettings?: string;

  // Whether 100%!!(MISSING)o(MISSING)f traffic is routed to the latest revision. Defaults to true.
  AllTrafficOnLatestRevision?: boolean;

  /*
(Output)
URIs of the Service deployed
*/
  GcfUri?: string;

  // Name of the service associated with a Function.
  Service?: string;

  // The email of the service account for this function.
  ServiceAccountEmail?: string;
}

export function Cloudfunctionsv2_FunctionServiceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxInstanceCount",
      "The limit on the maximum number of function instances that may coexist at a\ngiven time.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxInstanceRequestConcurrency",
      "Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VpcConnector",
      "The Serverless VPC Access connector that this cloud function can connect to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "EnvironmentVariables",
      "Environment variables that shall be available during function execution.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinInstanceCount",
      "The limit on the minimum number of function instances that may coexist at a\ngiven time.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AvailableCpu",
      "The number of CPUs used in a single container instance. Default value is calculated from available memory.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IngressSettings",
      'Available ingress settings. Defaults to "ALLOW_ALL" if unspecified.\nDefault value is `ALLOW_ALL`.\nPossible values are: `ALLOW_ALL`, `ALLOW_INTERNAL_ONLY`, `ALLOW_INTERNAL_AND_GCLB`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SecretVolumes",
      "Secret volumes configuration.\nStructure is documented below.",
      Cloudfunctionsv2_FunctionServiceConfigSecretVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SecretEnvironmentVariables",
      "Secret environment variables configuration.\nStructure is documented below.",
      Cloudfunctionsv2_FunctionServiceConfigSecretEnvironmentVariable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TimeoutSeconds",
      "The function execution timeout. Execution is considered failed and\ncan be terminated if the function is not completed at the end of the\ntimeout period. Defaults to 60 seconds.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllTrafficOnLatestRevision",
      "Whether 100%!o(MISSING)f traffic is routed to the latest revision. Defaults to true.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GcfUri",
      "(Output)\nURIs of the Service deployed",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Service",
      "Name of the service associated with a Function.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AvailableMemory",
      "The amount of memory available for a function.\nDefaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is\nsupplied the value is interpreted as bytes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VpcConnectorEgressSettings",
      "Available egress settings.\nPossible values are: `VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED`, `PRIVATE_RANGES_ONLY`, `ALL_TRAFFIC`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountEmail",
      "The email of the service account for this function.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "(Output)\nURI of the Service deployed.",
      [],
      false,
      false,
    ),
  ];
}
