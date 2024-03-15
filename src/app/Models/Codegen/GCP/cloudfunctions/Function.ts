import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { FunctionSecretEnvironmentVariable } from "../types/FunctionSecretEnvironmentVariable";
import { FunctionSecretVolume } from "../types/FunctionSecretVolume";
import { FunctionSourceRepository } from "../types/FunctionSourceRepository";
import { FunctionEventTrigger } from "../types/FunctionEventTrigger";

export interface FunctionArgs {
  // The GCS bucket containing the zip archive which contains the function.
  SourceArchiveBucket?: string;

  // Description of the function.
  Description?: string;

  // The source archive object (file) in archive bucket.
  SourceArchiveObject?: string;

  // Docker Registry to use for storing the function's Docker images. Allowed values are CONTAINER_REGISTRY (default) and ARTIFACT_REGISTRY.
  DockerRegistry?: string;

  // Name of the function that will be executed when the Google Cloud Function is triggered.
  EntryPoint?: string;

  // A set of key/value environment variable pairs to assign to the function.
  EnvironmentVariables?: Map<string, string>;

  // The security level for the function. The following options are available:
  HttpsTriggerSecurityLevel?: string;

  /*
The runtime in which the function is going to run.
Eg. `"nodejs16"`, `"python39"`, `"dotnet3"`, `"go116"`, `"java11"`, `"ruby30"`, `"php74"`, etc. Check the [official doc](https://cloud.google.com/functions/docs/concepts/exec#runtimes) for the up-to-date list.

- - -
*/
  Runtime?: string;

  // The VPC Network Connector that this cloud function can connect to. It should be set up as fully-qualified URI. The format of this field is `projects/-/locations/-/connectors/-`.
  VpcConnector?: string;

  // A set of key/value environment variable pairs available during build time.
  BuildEnvironmentVariables?: Map<string, string>;

  // A user-defined name of the function. Function names must be unique globally.
  Name?: string;

  /*
Represents parameters related to source repository where a function is hosted.
Cannot be set alongside `source_archive_bucket` or `source_archive_object`. Structure is documented below. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`.-
*/
  SourceRepository?: FunctionSourceRepository;

  // The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are `ALL_TRAFFIC` and `PRIVATE_RANGES_ONLY`. Defaults to `PRIVATE_RANGES_ONLY`. If unset, this field preserves the previously set value.
  VpcConnectorEgressSettings?: string;

  // Memory (in MB), available to the function. Default value is `256`. Possible values include `128`, `256`, `512`, `1024`, etc.
  AvailableMemoryMb?: number;

  // User managed repository created in Artifact Registry optionally with a customer managed encryption key. If specified, deployments will use Artifact Registry. This is the repository to which the function docker image will be pushed after it is built by Cloud Build. If unspecified, Container Registry will be used by default, unless specified otherwise by other means.
  DockerRepository?: string;

  // URL which triggers function execution. Returned only if `trigger_http` is used.
  HttpsTriggerUrl?: string;

  // String value that controls what traffic can reach the function. Allowed values are `ALLOW_ALL`, `ALLOW_INTERNAL_AND_GCLB` and `ALLOW_INTERNAL_ONLY`. Check [ingress documentation](https://cloud.google.com/functions/docs/networking/network-settings#ingress_settings) to see the impact of each settings value. Changes to this field will recreate the cloud function.
  IngressSettings?: string;

  // Region of function. If it is not provided, the provider region is used.
  Region?: string;

  // Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  BuildWorkerPool?: string;

  // A source that fires events in response to a condition in another service. Structure is documented below. Cannot be used with `trigger_http`.
  EventTrigger?: FunctionEventTrigger;

  // Project of the function. If it is not provided, the provider project is used.
  Project?: string;

  // Secret environment variables configuration. Structure is documented below.
  SecretEnvironmentVariables?: Array<FunctionSecretEnvironmentVariable>;

  // The limit on the maximum number of function instances that may coexist at a given time.
  MaxInstances?: number;

  // If provided, the self-provided service account to run the function with.
  ServiceAccountEmail?: string;

  // Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as `https_trigger_url`. Cannot be used with `event_trigger`.
  TriggerHttp?: boolean;

  /*
Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.
If specified, you must also provide an artifact registry repository using the `docker_repository` field that was created with the same KMS crypto key. Before deploying, please complete all pre-requisites described in https://cloud.google.com/functions/docs/securing/cmek#granting_service_accounts_access_to_the_key
*/
  KmsKeyName?: string;

  /*
A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The limit on the minimum number of function instances that may coexist at a given time.
  MinInstances?: number;

  // Secret volumes configuration. Structure is documented below.
  SecretVolumes?: Array<FunctionSecretVolume>;

  // Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.
  Timeout?: number;
}
export class Function extends Resource {
  // A set of key/value environment variable pairs to assign to the function.
  public EnvironmentVariables?: Map<string, string>;

  /*
The runtime in which the function is going to run.
Eg. `"nodejs16"`, `"python39"`, `"dotnet3"`, `"go116"`, `"java11"`, `"ruby30"`, `"php74"`, etc. Check the [official doc](https://cloud.google.com/functions/docs/concepts/exec#runtimes) for the up-to-date list.

- - -
*/
  public Runtime?: string;

  // Describes the current stage of a deployment.
  public Status?: string;

  // String value that controls what traffic can reach the function. Allowed values are `ALLOW_ALL`, `ALLOW_INTERNAL_AND_GCLB` and `ALLOW_INTERNAL_ONLY`. Check [ingress documentation](https://cloud.google.com/functions/docs/networking/network-settings#ingress_settings) to see the impact of each settings value. Changes to this field will recreate the cloud function.
  public IngressSettings?: string;

  /*
Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.
If specified, you must also provide an artifact registry repository using the `docker_repository` field that was created with the same KMS crypto key. Before deploying, please complete all pre-requisites described in https://cloud.google.com/functions/docs/securing/cmek#granting_service_accounts_access_to_the_key
*/
  public KmsKeyName?: string;

  // Project of the function. If it is not provided, the provider project is used.
  public Project?: string;

  // Region of function. If it is not provided, the provider region is used.
  public Region?: string;

  // The GCS bucket containing the zip archive which contains the function.
  public SourceArchiveBucket?: string;

  // The source archive object (file) in archive bucket.
  public SourceArchiveObject?: string;

  // Memory (in MB), available to the function. Default value is `256`. Possible values include `128`, `256`, `512`, `1024`, etc.
  public AvailableMemoryMb?: number;

  // A set of key/value environment variable pairs available during build time.
  public BuildEnvironmentVariables?: Map<string, string>;

  // The security level for the function. The following options are available:
  public HttpsTriggerSecurityLevel?: string;

  // Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.
  public Timeout?: number;

  // Name of the function that will be executed when the Google Cloud Function is triggered.
  public EntryPoint?: string;

  // A source that fires events in response to a condition in another service. Structure is documented below. Cannot be used with `trigger_http`.
  public EventTrigger?: FunctionEventTrigger;

  // URL which triggers function execution. Returned only if `trigger_http` is used.
  public HttpsTriggerUrl?: string;

  // The limit on the minimum number of function instances that may coexist at a given time.
  public MinInstances?: number;

  // A user-defined name of the function. Function names must be unique globally.
  public Name?: string;

  // User managed repository created in Artifact Registry optionally with a customer managed encryption key. If specified, deployments will use Artifact Registry. This is the repository to which the function docker image will be pushed after it is built by Cloud Build. If unspecified, Container Registry will be used by default, unless specified otherwise by other means.
  public DockerRepository?: string;

  // Secret volumes configuration. Structure is documented below.
  public SecretVolumes?: Array<FunctionSecretVolume>;

  /*
Represents parameters related to source repository where a function is hosted.
Cannot be set alongside `source_archive_bucket` or `source_archive_object`. Structure is documented below. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`.-
*/
  public SourceRepository?: FunctionSourceRepository;

  // Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  public BuildWorkerPool?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The limit on the maximum number of function instances that may coexist at a given time.
  public MaxInstances?: number;

  // Secret environment variables configuration. Structure is documented below.
  public SecretEnvironmentVariables?: Array<FunctionSecretEnvironmentVariable>;

  // The VPC Network Connector that this cloud function can connect to. It should be set up as fully-qualified URI. The format of this field is `projects/-/locations/-/connectors/-`.
  public VpcConnector?: string;

  // The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are `ALL_TRAFFIC` and `PRIVATE_RANGES_ONLY`. Defaults to `PRIVATE_RANGES_ONLY`. If unset, this field preserves the previously set value.
  public VpcConnectorEgressSettings?: string;

  /*
The version identifier of the Cloud Function. Each deployment attempt results in a new version of a function being
created.
*/
  public VersionId?: string;

  // Description of the function.
  public Description?: string;

  // Docker Registry to use for storing the function's Docker images. Allowed values are CONTAINER_REGISTRY (default) and ARTIFACT_REGISTRY.
  public DockerRegistry?: string;

  /*
A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // If provided, the self-provided service account to run the function with.
  public ServiceAccountEmail?: string;

  // Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as `https_trigger_url`. Cannot be used with `event_trigger`.
  public TriggerHttp?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.CheckBox,
        "TriggerHttp",
        "Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as `https_trigger_url`. Cannot be used with `event_trigger`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceArchiveBucket",
        "The GCS bucket containing the zip archive which contains the function.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BuildEnvironmentVariables",
        "A set of key/value environment variable pairs available during build time.",
      ),
      new DynamicUIProps(
        InputType.String,
        "IngressSettings",
        "String value that controls what traffic can reach the function. Allowed values are `ALLOW_ALL`, `ALLOW_INTERNAL_AND_GCLB` and `ALLOW_INTERNAL_ONLY`. Check [ingress documentation](https://cloud.google.com/functions/docs/networking/network-settings#ingress_settings) to see the impact of each settings value. Changes to this field will recreate the cloud function.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Timeout",
        "Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceRepository",
        "Represents parameters related to source repository where a function is hosted.\nCannot be set alongside `source_archive_bucket` or `source_archive_object`. Structure is documented below. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`.*",
      ),
      new DynamicUIProps(
        InputType.String,
        "EventTrigger",
        "A source that fires events in response to a condition in another service. Structure is documented below. Cannot be used with `trigger_http`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccountEmail",
        "If provided, the self-provided service account to run the function with.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SecretEnvironmentVariables",
        "Secret environment variables configuration. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SecretVolumes",
        "Secret volumes configuration. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EntryPoint",
        "Name of the function that will be executed when the Google Cloud Function is triggered.",
      ),
      new DynamicUIProps(
        InputType.String,
        "HttpsTriggerSecurityLevel",
        "The security level for the function. The following options are available:",
      ),
      new DynamicUIProps(
        InputType.String,
        "BuildWorkerPool",
        "Name of the Cloud Build Custom Worker Pool that should be used to build the function.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VpcConnector",
        "The VPC Network Connector that this cloud function can connect to. It should be set up as fully-qualified URI. The format of this field is `projects/*/locations/*/connectors/*`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Runtime",
        'The runtime in which the function is going to run.\nEg. `"nodejs16"`, `"python39"`, `"dotnet3"`, `"go116"`, `"java11"`, `"ruby30"`, `"php74"`, etc. Check the [official doc](https://cloud.google.com/functions/docs/concepts/exec#runtimes) for the up-to-date list.\n\n- - -',
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region of function. If it is not provided, the provider region is used.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxInstances",
        "The limit on the maximum number of function instances that may coexist at a given time.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A user-defined name of the function. Function names must be unique globally.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VpcConnectorEgressSettings",
        "The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are `ALL_TRAFFIC` and `PRIVATE_RANGES_ONLY`. Defaults to `PRIVATE_RANGES_ONLY`. If unset, this field preserves the previously set value.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DockerRepository",
        "User managed repository created in Artifact Registry optionally with a customer managed encryption key. If specified, deployments will use Artifact Registry. This is the repository to which the function docker image will be pushed after it is built by Cloud Build. If unspecified, Container Registry will be used by default, unless specified otherwise by other means.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EnvironmentVariables",
        "A set of key/value environment variable pairs to assign to the function.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "AvailableMemoryMb",
        "Memory (in MB), available to the function. Default value is `256`. Possible values include `128`, `256`, `512`, `1024`, etc.",
      ),
      new DynamicUIProps(
        InputType.String,
        "HttpsTriggerUrl",
        "URL which triggers function execution. Returned only if `trigger_http` is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "Project of the function. If it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.\nIf specified, you must also provide an artifact registry repository using the `docker_repository` field that was created with the same KMS crypto key. Before deploying, please complete all pre-requisites described in https://cloud.google.com/functions/docs/securing/cmek#granting_service_accounts_access_to_the_key",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the function.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceArchiveObject",
        "The source archive object (file) in archive bucket.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DockerRegistry",
        "Docker Registry to use for storing the function's Docker images. Allowed values are CONTAINER_REGISTRY (default) and ARTIFACT_REGISTRY.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "MinInstances",
        "The limit on the minimum number of function instances that may coexist at a given time.",
      ),
    ];
  }
}
