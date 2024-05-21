import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfunctions_FunctionSourceRepository,
  cloudfunctions_FunctionSourceRepository_GetTypes,
} from "../types/cloudfunctions_FunctionSourceRepository";
import {
  cloudfunctions_FunctionSecretEnvironmentVariable,
  cloudfunctions_FunctionSecretEnvironmentVariable_GetTypes,
} from "../types/cloudfunctions_FunctionSecretEnvironmentVariable";
import {
  cloudfunctions_FunctionEventTrigger,
  cloudfunctions_FunctionEventTrigger_GetTypes,
} from "../types/cloudfunctions_FunctionEventTrigger";
import {
  cloudfunctions_FunctionSecretVolume,
  cloudfunctions_FunctionSecretVolume_GetTypes,
} from "../types/cloudfunctions_FunctionSecretVolume";

export interface FunctionArgs {
  /*
Represents parameters related to source repository where a function is hosted.
Cannot be set alongside `source_archive_bucket` or `source_archive_object`. Structure is documented below. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`.-
*/
  sourceRepository?: cloudfunctions_FunctionSourceRepository;

  // Name of the function that will be executed when the Google Cloud Function is triggered.
  entryPoint?: string;

  /*
Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.
If specified, you must also provide an artifact registry repository using the `docker_repository` field that was created with the same KMS crypto key. Before deploying, please complete all pre-requisites described in https://cloud.google.com/functions/docs/securing/cmek#granting_service_accounts_access_to_the_key
*/
  kmsKeyName?: string;

  // A user-defined name of the function. Function names must be unique globally.
  name?: string;

  // If provided, the self-provided service account to run the function with.
  serviceAccountEmail?: string;

  // The source archive object (file) in archive bucket.
  sourceArchiveObject?: string;

  // Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.
  timeout?: number;

  // The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are `ALL_TRAFFIC` and `PRIVATE_RANGES_ONLY`. Defaults to `PRIVATE_RANGES_ONLY`. If unset, this field preserves the previously set value.
  vpcConnectorEgressSettings?: string;

  // User managed repository created in Artifact Registry optionally with a customer managed encryption key. If specified, deployments will use Artifact Registry. This is the repository to which the function docker image will be pushed after it is built by Cloud Build. If unspecified, Container Registry will be used by default, unless specified otherwise by other means.
  dockerRepository?: string;

  // Project of the function. If it is not provided, the provider project is used.
  project?: string;

  // The VPC Network Connector that this cloud function can connect to. It should be set up as fully-qualified URI. The format of this field is `projects/-/locations/-/connectors/-`.
  vpcConnector?: string;

  // Docker Registry to use for storing the function's Docker images. Allowed values are CONTAINER_REGISTRY (default) and ARTIFACT_REGISTRY.
  dockerRegistry?: string;

  // The security level for the function. The following options are available:
  httpsTriggerSecurityLevel?: string;

  // The limit on the minimum number of function instances that may coexist at a given time.
  minInstances?: number;

  // Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as `https_trigger_url`. Cannot be used with `event_trigger`.
  triggerHttp?: boolean;

  // A set of key/value environment variable pairs available during build time.
  buildEnvironmentVariables?: Map<string, string>;

  // Description of the function.
  description?: string;

  /*
A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // Secret environment variables configuration. Structure is documented below.
  secretEnvironmentVariables?: Array<cloudfunctions_FunctionSecretEnvironmentVariable>;

  // Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  buildWorkerPool?: string;

  // URL which triggers function execution. Returned only if `trigger_http` is used.
  httpsTriggerUrl?: string;

  // The GCS bucket containing the zip archive which contains the function.
  sourceArchiveBucket?: string;

  // A set of key/value environment variable pairs to assign to the function.
  environmentVariables?: Map<string, string>;

  // A source that fires events in response to a condition in another service. Structure is documented below. Cannot be used with `trigger_http`.
  eventTrigger?: cloudfunctions_FunctionEventTrigger;

  /*
The runtime in which the function is going to run.
Eg. `"nodejs16"`, `"python39"`, `"dotnet3"`, `"go116"`, `"java11"`, `"ruby30"`, `"php74"`, etc. Check the [official doc](https://cloud.google.com/functions/docs/concepts/exec#runtimes) for the up-to-date list.

- - -
*/
  runtime?: string;

  // Secret volumes configuration. Structure is documented below.
  secretVolumes?: Array<cloudfunctions_FunctionSecretVolume>;

  // Memory (in MB), available to the function. Default value is `256`. Possible values include `128`, `256`, `512`, `1024`, etc.
  availableMemoryMb?: number;

  // String value that controls what traffic can reach the function. Allowed values are `ALLOW_ALL`, `ALLOW_INTERNAL_AND_GCLB` and `ALLOW_INTERNAL_ONLY`. Check [ingress documentation](https://cloud.google.com/functions/docs/networking/network-settings#ingress_settings) to see the impact of each settings value. Changes to this field will recreate the cloud function.
  ingressSettings?: string;

  // The limit on the maximum number of function instances that may coexist at a given time.
  maxInstances?: number;

  // Region of function. If it is not provided, the provider region is used.
  region?: string;
}
export class Function extends Resource {
  // User managed repository created in Artifact Registry optionally with a customer managed encryption key. If specified, deployments will use Artifact Registry. This is the repository to which the function docker image will be pushed after it is built by Cloud Build. If unspecified, Container Registry will be used by default, unless specified otherwise by other means.
  public dockerRepository?: string;

  // Secret volumes configuration. Structure is documented below.
  public secretVolumes?: Array<cloudfunctions_FunctionSecretVolume>;

  // If provided, the self-provided service account to run the function with.
  public serviceAccountEmail?: string;

  // Describes the current stage of a deployment.
  public status?: string;

  // The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are `ALL_TRAFFIC` and `PRIVATE_RANGES_ONLY`. Defaults to `PRIVATE_RANGES_ONLY`. If unset, this field preserves the previously set value.
  public vpcConnectorEgressSettings?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // A set of key/value environment variable pairs to assign to the function.
  public environmentVariables?: Map<string, string>;

  // String value that controls what traffic can reach the function. Allowed values are `ALLOW_ALL`, `ALLOW_INTERNAL_AND_GCLB` and `ALLOW_INTERNAL_ONLY`. Check [ingress documentation](https://cloud.google.com/functions/docs/networking/network-settings#ingress_settings) to see the impact of each settings value. Changes to this field will recreate the cloud function.
  public ingressSettings?: string;

  /*
Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.
If specified, you must also provide an artifact registry repository using the `docker_repository` field that was created with the same KMS crypto key. Before deploying, please complete all pre-requisites described in https://cloud.google.com/functions/docs/securing/cmek#granting_service_accounts_access_to_the_key
*/
  public kmsKeyName?: string;

  // Memory (in MB), available to the function. Default value is `256`. Possible values include `128`, `256`, `512`, `1024`, etc.
  public availableMemoryMb?: number;

  // Docker Registry to use for storing the function's Docker images. Allowed values are CONTAINER_REGISTRY (default) and ARTIFACT_REGISTRY.
  public dockerRegistry?: string;

  /*
The runtime in which the function is going to run.
Eg. `"nodejs16"`, `"python39"`, `"dotnet3"`, `"go116"`, `"java11"`, `"ruby30"`, `"php74"`, etc. Check the [official doc](https://cloud.google.com/functions/docs/concepts/exec#runtimes) for the up-to-date list.

- - -
*/
  public runtime?: string;

  /*
The version identifier of the Cloud Function. Each deployment attempt results in a new version of a function being
created.
*/
  public versionId?: string;

  // Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  public buildWorkerPool?: string;

  // The GCS bucket containing the zip archive which contains the function.
  public sourceArchiveBucket?: string;

  // Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.
  public timeout?: number;

  // A set of key/value environment variable pairs available during build time.
  public buildEnvironmentVariables?: Map<string, string>;

  // Project of the function. If it is not provided, the provider project is used.
  public project?: string;

  // The source archive object (file) in archive bucket.
  public sourceArchiveObject?: string;

  // Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as `https_trigger_url`. Cannot be used with `event_trigger`.
  public triggerHttp?: boolean;

  // Secret environment variables configuration. Structure is documented below.
  public secretEnvironmentVariables?: Array<cloudfunctions_FunctionSecretEnvironmentVariable>;

  // The VPC Network Connector that this cloud function can connect to. It should be set up as fully-qualified URI. The format of this field is `projects/-/locations/-/connectors/-`.
  public vpcConnector?: string;

  // Description of the function.
  public description?: string;

  // A source that fires events in response to a condition in another service. Structure is documented below. Cannot be used with `trigger_http`.
  public eventTrigger?: cloudfunctions_FunctionEventTrigger;

  // The security level for the function. The following options are available:
  public httpsTriggerSecurityLevel?: string;

  // URL which triggers function execution. Returned only if `trigger_http` is used.
  public httpsTriggerUrl?: string;

  // The limit on the maximum number of function instances that may coexist at a given time.
  public maxInstances?: number;

  // The limit on the minimum number of function instances that may coexist at a given time.
  public minInstances?: number;

  // A user-defined name of the function. Function names must be unique globally.
  public name?: string;

  // Region of function. If it is not provided, the provider region is used.
  public region?: string;

  /*
Represents parameters related to source repository where a function is hosted.
Cannot be set alongside `source_archive_bucket` or `source_archive_object`. Structure is documented below. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`.-
*/
  public sourceRepository?: cloudfunctions_FunctionSourceRepository;

  // Name of the function that will be executed when the Google Cloud Function is triggered.
  public entryPoint?: string;

  /*
A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "region",
        "Region of function. If it is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sourceRepository",
        "Represents parameters related to source repository where a function is hosted.\nCannot be set alongside `source_archive_bucket` or `source_archive_object`. Structure is documented below. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`.*",
        cloudfunctions_FunctionSourceRepository_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyName",
        "Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.\nIf specified, you must also provide an artifact registry repository using the `docker_repository` field that was created with the same KMS crypto key. Before deploying, please complete all pre-requisites described in https://cloud.google.com/functions/docs/securing/cmek#granting_service_accounts_access_to_the_key",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcConnector",
        "The VPC Network Connector that this cloud function can connect to. It should be set up as fully-qualified URI. The format of this field is `projects/*/locations/*/connectors/*`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "httpsTriggerSecurityLevel",
        "The security level for the function. The following options are available:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "secretEnvironmentVariables",
        "Secret environment variables configuration. Structure is documented below.",
        cloudfunctions_FunctionSecretEnvironmentVariable_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "eventTrigger",
        "A source that fires events in response to a condition in another service. Structure is documented below. Cannot be used with `trigger_http`.",
        cloudfunctions_FunctionEventTrigger_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "secretVolumes",
        "Secret volumes configuration. Structure is documented below.",
        cloudfunctions_FunctionSecretVolume_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "entryPoint",
        "Name of the function that will be executed when the Google Cloud Function is triggered.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccountEmail",
        "If provided, the self-provided service account to run the function with.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcConnectorEgressSettings",
        "The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are `ALL_TRAFFIC` and `PRIVATE_RANGES_ONLY`. Defaults to `PRIVATE_RANGES_ONLY`. If unset, this field preserves the previously set value.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "minInstances",
        "The limit on the minimum number of function instances that may coexist at a given time.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dockerRegistry",
        "Docker Registry to use for storing the function's Docker images. Allowed values are CONTAINER_REGISTRY (default) and ARTIFACT_REGISTRY.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceArchiveBucket",
        "The GCS bucket containing the zip archive which contains the function.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "Project of the function. If it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "runtime",
        'The runtime in which the function is going to run.\nEg. `"nodejs16"`, `"python39"`, `"dotnet3"`, `"go116"`, `"java11"`, `"ruby30"`, `"php74"`, etc. Check the [official doc](https://cloud.google.com/functions/docs/concepts/exec#runtimes) for the up-to-date list.\n\n- - -',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "availableMemoryMb",
        "Memory (in MB), available to the function. Default value is `256`. Possible values include `128`, `256`, `512`, `1024`, etc.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "triggerHttp",
        "Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as `https_trigger_url`. Cannot be used with `event_trigger`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the function.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "buildWorkerPool",
        "Name of the Cloud Build Custom Worker Pool that should be used to build the function.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "buildEnvironmentVariables",
        "A set of key/value environment variable pairs available during build time.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxInstances",
        "The limit on the maximum number of function instances that may coexist at a given time.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A user-defined name of the function. Function names must be unique globally.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "timeout",
        "Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ingressSettings",
        "String value that controls what traffic can reach the function. Allowed values are `ALLOW_ALL`, `ALLOW_INTERNAL_AND_GCLB` and `ALLOW_INTERNAL_ONLY`. Check [ingress documentation](https://cloud.google.com/functions/docs/networking/network-settings#ingress_settings) to see the impact of each settings value. Changes to this field will recreate the cloud function.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceArchiveObject",
        "The source archive object (file) in archive bucket.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dockerRepository",
        "User managed repository created in Artifact Registry optionally with a customer managed encryption key. If specified, deployments will use Artifact Registry. This is the repository to which the function docker image will be pushed after it is built by Cloud Build. If unspecified, Container Registry will be used by default, unless specified otherwise by other means.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "httpsTriggerUrl",
        "URL which triggers function execution. Returned only if `trigger_http` is used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "environmentVariables",
        "A set of key/value environment variable pairs to assign to the function.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
