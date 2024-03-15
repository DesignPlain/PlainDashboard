import { getFunctionServiceConfigSecretEnvironmentVariable } from "./getFunctionServiceConfigSecretEnvironmentVariable";
import { getFunctionServiceConfigSecretVolume } from "./getFunctionServiceConfigSecretVolume";

export interface getFunctionServiceConfig {
  // The number of CPUs used in a single container instance. Default value is calculated from available memory.
  AvailableCpu?: string;

  // Environment variables that shall be available during function execution.
  EnvironmentVariables?: Map<string, string>;

  // Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.
  MaxInstanceRequestConcurrency?: number;

  /*
The amount of memory available for a function.
Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
supplied the value is interpreted as bytes.
*/
  AvailableMemory?: string;

  // The email of the service account for this function.
  ServiceAccountEmail?: string;

  // Whether 100%!!(MISSING)o(MISSING)f traffic is routed to the latest revision. Defaults to true.
  AllTrafficOnLatestRevision?: boolean;

  // URIs of the Service deployed
  GcfUri?: string;

  // Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"]
  IngressSettings?: string;

  /*
The limit on the maximum number of function instances that may coexist at a
given time.
*/
  MaxInstanceCount?: number;

  /*
The limit on the minimum number of function instances that may coexist at a
given time.
*/
  MinInstanceCount?: number;

  // Secret environment variables configuration.
  SecretEnvironmentVariables?: Array<getFunctionServiceConfigSecretEnvironmentVariable>;

  // Name of the service associated with a Function.
  Service?: string;

  /*
The function execution timeout. Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.
*/
  TimeoutSeconds?: number;

  // URI of the Service deployed.
  Uri?: string;

  // Secret volumes configuration.
  SecretVolumes?: Array<getFunctionServiceConfigSecretVolume>;

  // The Serverless VPC Access connector that this cloud function can connect to.
  VpcConnector?: string;

  // Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"]
  VpcConnectorEgressSettings?: string;
}
