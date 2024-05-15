import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctionsv2_getFunctionServiceConfigSecretVolume,
  Cloudfunctionsv2_getFunctionServiceConfigSecretVolume_GetTypes,
} from "./Cloudfunctionsv2_getFunctionServiceConfigSecretVolume";
import {
  Cloudfunctionsv2_getFunctionServiceConfigSecretEnvironmentVariable,
  Cloudfunctionsv2_getFunctionServiceConfigSecretEnvironmentVariable_GetTypes,
} from "./Cloudfunctionsv2_getFunctionServiceConfigSecretEnvironmentVariable";

export interface Cloudfunctionsv2_getFunctionServiceConfig {
  // The number of CPUs used in a single container instance. Default value is calculated from available memory.
  AvailableCpu?: string;

  // Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"]
  VpcConnectorEgressSettings?: string;

  /*
The amount of memory available for a function.
Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
supplied the value is interpreted as bytes.
*/
  AvailableMemory?: string;

  // Secret volumes configuration.
  SecretVolumes?: Array<Cloudfunctionsv2_getFunctionServiceConfigSecretVolume>;

  /*
The function execution timeout. Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.
*/
  TimeoutSeconds?: number;

  // URI of the Service deployed.
  Uri?: string;

  // Whether 100%!!(MISSING)o(MISSING)f traffic is routed to the latest revision. Defaults to true.
  AllTrafficOnLatestRevision?: boolean;

  // Environment variables that shall be available during function execution.
  EnvironmentVariables?: Map<string, string>;

  // URIs of the Service deployed
  GcfUri?: string;

  // Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"]
  IngressSettings?: string;

  // The Serverless VPC Access connector that this cloud function can connect to.
  VpcConnector?: string;

  /*
The limit on the maximum number of function instances that may coexist at a
given time.
*/
  MaxInstanceCount?: number;

  // Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.
  MaxInstanceRequestConcurrency?: number;

  /*
The limit on the minimum number of function instances that may coexist at a
given time.
*/
  MinInstanceCount?: number;

  // Secret environment variables configuration.
  SecretEnvironmentVariables?: Array<Cloudfunctionsv2_getFunctionServiceConfigSecretEnvironmentVariable>;

  // Name of the service associated with a Function.
  Service?: string;

  // The email of the service account for this function.
  ServiceAccountEmail?: string;
}

export function Cloudfunctionsv2_getFunctionServiceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AvailableCpu",
      "The number of CPUs used in a single container instance. Default value is calculated from available memory.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "EnvironmentVariables",
      "Environment variables that shall be available during function execution.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxInstanceCount",
      "The limit on the maximum number of function instances that may coexist at a\ngiven time.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AvailableMemory",
      "The amount of memory available for a function.\nDefaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is\nsupplied the value is interpreted as bytes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllTrafficOnLatestRevision",
      "Whether 100%!o(MISSING)f traffic is routed to the latest revision. Defaults to true.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxInstanceRequestConcurrency",
      "Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VpcConnectorEgressSettings",
      'Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SecretVolumes",
      "Secret volumes configuration.",
      Cloudfunctionsv2_getFunctionServiceConfigSecretVolume_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SecretEnvironmentVariables",
      "Secret environment variables configuration.",
      Cloudfunctionsv2_getFunctionServiceConfigSecretEnvironmentVariable_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Service",
      "Name of the service associated with a Function.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountEmail",
      "The email of the service account for this function.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TimeoutSeconds",
      "The function execution timeout. Execution is considered failed and\ncan be terminated if the function is not completed at the end of the\ntimeout period. Defaults to 60 seconds.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "URI of the Service deployed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GcfUri",
      "URIs of the Service deployed",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IngressSettings",
      'Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VpcConnector",
      "The Serverless VPC Access connector that this cloud function can connect to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinInstanceCount",
      "The limit on the minimum number of function instances that may coexist at a\ngiven time.",
      [],
      true,
      false,
    ),
  ];
}
