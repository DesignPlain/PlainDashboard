import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctions_FunctionSourceRepository,
  Cloudfunctions_FunctionSourceRepository_GetTypes,
} from "../types/Cloudfunctions_FunctionSourceRepository";
import {
  Cloudfunctions_FunctionEventTrigger,
  Cloudfunctions_FunctionEventTrigger_GetTypes,
} from "../types/Cloudfunctions_FunctionEventTrigger";
import {
  Cloudfunctions_FunctionSecretVolume,
  Cloudfunctions_FunctionSecretVolume_GetTypes,
} from "../types/Cloudfunctions_FunctionSecretVolume";
import {
  Cloudfunctions_FunctionSecretEnvironmentVariable,
  Cloudfunctions_FunctionSecretEnvironmentVariable_GetTypes,
} from "../types/Cloudfunctions_FunctionSecretEnvironmentVariable";

export interface FunctionArgs {
  // User managed repository created in Artifact Registry optionally with a customer managed encryption key. If specified, deployments will use Artifact Registry. This is the repository to which the function docker image will be pushed after it is built by Cloud Build. If unspecified, Container Registry will be used by default, unless specified otherwise by other means.
  DockerRepository?: string;

  // String value that controls what traffic can reach the function. Allowed values are `ALLOW_ALL`, `ALLOW_INTERNAL_AND_GCLB` and `ALLOW_INTERNAL_ONLY`. Check [ingress documentation](https://cloud.google.com/functions/docs/networking/network-settings#ingress_settings) to see the impact of each settings value. Changes to this field will recreate the cloud function.
  IngressSettings?: string;

  // Secret volumes configuration. Structure is documented below.
  SecretVolumes?: Array<Cloudfunctions_FunctionSecretVolume>;

  /*
Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.
If specified, you must also provide an artifact registry repository using the `docker_repository` field that was created with the same KMS crypto key. Before deploying, please complete all pre-requisites described in https://cloud.google.com/functions/docs/securing/cmek#granting_service_accounts_access_to_the_key
*/
  KmsKeyName?: string;

  // The limit on the minimum number of function instances that may coexist at a given time.
  MinInstances?: number;

  // Project of the function. If it is not provided, the provider project is used.
  Project?: string;

  // Secret environment variables configuration. Structure is documented below.
  SecretEnvironmentVariables?: Array<Cloudfunctions_FunctionSecretEnvironmentVariable>;

  /*
Represents parameters related to source repository where a function is hosted.
Cannot be set alongside `source_archive_bucket` or `source_archive_object`. Structure is documented below. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`.-
*/
  SourceRepository?: Cloudfunctions_FunctionSourceRepository;

  // Description of the function.
  Description?: string;

  /*
A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  Labels?: Map<string, InputType.String>;

  // If provided, the self-provided service account to run the function with.
  ServiceAccountEmail?: string;

  // The source archive object (file) in archive bucket.
  SourceArchiveObject?: string;

  // Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as `https_trigger_url`. Cannot be used with `event_trigger`.
  TriggerHttp?: boolean;

  // Region of function. If it is not provided, the provider region is used.
  Region?: string;

  // Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.
  Timeout?: number;

  // The VPC Network Connector that this cloud function can connect to. It should be set up as fully-qualified URI. The format of this field is `projects/-/locations/-/connectors/-`.
  VpcConnector?: string;

  // The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are `ALL_TRAFFIC` and `PRIVATE_RANGES_ONLY`. Defaults to `PRIVATE_RANGES_ONLY`. If unset, this field preserves the previously set value.
  VpcConnectorEgressSettings?: string;

  // A set of key/value environment variable pairs available during build time.
  BuildEnvironmentVariables?: Map<string, InputType.String>;

  // URL which triggers function execution. Returned only if `trigger_http` is used.
  HttpsTriggerUrl?: string;

  // Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  BuildWorkerPool?: string;

  // Name of the function that will be executed when the Google Cloud Function is triggered.
  EntryPoint?: string;

  // A set of key/value environment variable pairs to assign to the function.
  EnvironmentVariables?: Map<string, InputType.String>;

  // A source that fires events in response to a condition in another service. Structure is documented below. Cannot be used with `trigger_http`.
  EventTrigger?: Cloudfunctions_FunctionEventTrigger;

  // The security level for the function. The following options are available:
  HttpsTriggerSecurityLevel?: string;

  // Memory (in MB), available to the function. Default value is `256`. Possible values include `128`, `256`, `512`, `1024`, etc.
  AvailableMemoryMb?: number;

  // A user-defined name of the function. Function names must be unique globally.
  Name?: string;

  /*
The runtime in which the function is going to run.
Eg. `"nodejs16"`, `"python39"`, `"dotnet3"`, `"go116"`, `"java11"`, `"ruby30"`, `"php74"`, etc. Check the [official doc](https://cloud.google.com/functions/docs/concepts/exec#runtimes) for the up-to-date list.

- - -
*/
  Runtime?: string;

  // Docker Registry to use for storing the function's Docker images. Allowed values are CONTAINER_REGISTRY (default) and ARTIFACT_REGISTRY.
  DockerRegistry?: string;

  // The limit on the maximum number of function instances that may coexist at a given time.
  MaxInstances?: number;

  // The GCS bucket containing the zip archive which contains the function.
  SourceArchiveBucket?: string;
}
export class Function extends Resource {
  // The VPC Network Connector that this cloud function can connect to. It should be set up as fully-qualified URI. The format of this field is `projects/-/locations/-/connectors/-`.
  public VpcConnector?: string;

  // A source that fires events in response to a condition in another service. Structure is documented below. Cannot be used with `trigger_http`.
  public EventTrigger?: Cloudfunctions_FunctionEventTrigger;

  // URL which triggers function execution. Returned only if `trigger_http` is used.
  public HttpsTriggerUrl?: string;

  // A user-defined name of the function. Function names must be unique globally.
  public Name?: string;

  // Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as `https_trigger_url`. Cannot be used with `event_trigger`.
  public TriggerHttp?: boolean;

  /*
The runtime in which the function is going to run.
Eg. `"nodejs16"`, `"python39"`, `"dotnet3"`, `"go116"`, `"java11"`, `"ruby30"`, `"php74"`, etc. Check the [official doc](https://cloud.google.com/functions/docs/concepts/exec#runtimes) for the up-to-date list.

- - -
*/
  public Runtime?: string;

  // Secret volumes configuration. Structure is documented below.
  public SecretVolumes?: Array<Cloudfunctions_FunctionSecretVolume>;

  // A set of key/value environment variable pairs available during build time.
  public BuildEnvironmentVariables?: Map<string, InputType.String>;

  // String value that controls what traffic can reach the function. Allowed values are `ALLOW_ALL`, `ALLOW_INTERNAL_AND_GCLB` and `ALLOW_INTERNAL_ONLY`. Check [ingress documentation](https://cloud.google.com/functions/docs/networking/network-settings#ingress_settings) to see the impact of each settings value. Changes to this field will recreate the cloud function.
  public IngressSettings?: string;

  /*
Represents parameters related to source repository where a function is hosted.
Cannot be set alongside `source_archive_bucket` or `source_archive_object`. Structure is documented below. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`.-
*/
  public SourceRepository?: Cloudfunctions_FunctionSourceRepository;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // The source archive object (file) in archive bucket.
  public SourceArchiveObject?: string;

  // Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  public BuildWorkerPool?: string;

  // Description of the function.
  public Description?: string;

  // A set of key/value environment variable pairs to assign to the function.
  public EnvironmentVariables?: Map<string, InputType.String>;

  // The limit on the minimum number of function instances that may coexist at a given time.
  public MinInstances?: number;

  // If provided, the self-provided service account to run the function with.
  public ServiceAccountEmail?: string;

  // The GCS bucket containing the zip archive which contains the function.
  public SourceArchiveBucket?: string;

  // Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.
  public Timeout?: number;

  // The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are `ALL_TRAFFIC` and `PRIVATE_RANGES_ONLY`. Defaults to `PRIVATE_RANGES_ONLY`. If unset, this field preserves the previously set value.
  public VpcConnectorEgressSettings?: string;

  // The limit on the maximum number of function instances that may coexist at a given time.
  public MaxInstances?: number;

  // Project of the function. If it is not provided, the provider project is used.
  public Project?: string;

  // Describes the current stage of a deployment.
  public Status?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The security level for the function. The following options are available:
  public HttpsTriggerSecurityLevel?: string;

  /*
Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.
If specified, you must also provide an artifact registry repository using the `docker_repository` field that was created with the same KMS crypto key. Before deploying, please complete all pre-requisites described in https://cloud.google.com/functions/docs/securing/cmek#granting_service_accounts_access_to_the_key
*/
  public KmsKeyName?: string;

  /*
A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public Labels?: Map<string, InputType.String>;

  // Secret environment variables configuration. Structure is documented below.
  public SecretEnvironmentVariables?: Array<Cloudfunctions_FunctionSecretEnvironmentVariable>;

  // Memory (in MB), available to the function. Default value is `256`. Possible values include `128`, `256`, `512`, `1024`, etc.
  public AvailableMemoryMb?: number;

  // Docker Registry to use for storing the function's Docker images. Allowed values are CONTAINER_REGISTRY (default) and ARTIFACT_REGISTRY.
  public DockerRegistry?: string;

  // Name of the function that will be executed when the Google Cloud Function is triggered.
  public EntryPoint?: string;

  // Region of function. If it is not provided, the provider region is used.
  public Region?: string;

  // User managed repository created in Artifact Registry optionally with a customer managed encryption key. If specified, deployments will use Artifact Registry. This is the repository to which the function docker image will be pushed after it is built by Cloud Build. If unspecified, Container Registry will be used by default, unless specified otherwise by other means.
  public DockerRepository?: string;

  /*
The version identifier of the Cloud Function. Each deployment attempt results in a new version of a function being
created.
*/
  public VersionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "Project of the function. If it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "HttpsTriggerUrl",
        "URL which triggers function execution. Returned only if `trigger_http` is used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "BuildWorkerPool",
        "Name of the Cloud Build Custom Worker Pool that should be used to build the function.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "EnvironmentVariables",
        "A set of key/value environment variable pairs to assign to the function.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "HttpsTriggerSecurityLevel",
        "The security level for the function. The following options are available:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceArchiveObject",
        "The source archive object (file) in archive bucket.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "BuildEnvironmentVariables",
        "A set of key/value environment variable pairs available during build time.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DockerRegistry",
        "Docker Registry to use for storing the function's Docker images. Allowed values are CONTAINER_REGISTRY (default) and ARTIFACT_REGISTRY.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxInstances",
        "The limit on the maximum number of function instances that may coexist at a given time.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "SecretEnvironmentVariables",
        "Secret environment variables configuration. Structure is documented below.",
        Cloudfunctions_FunctionSecretEnvironmentVariable_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the function.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "VpcConnectorEgressSettings",
        "The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are `ALL_TRAFFIC` and `PRIVATE_RANGES_ONLY`. Defaults to `PRIVATE_RANGES_ONLY`. If unset, this field preserves the previously set value.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DockerRepository",
        "User managed repository created in Artifact Registry optionally with a customer managed encryption key. If specified, deployments will use Artifact Registry. This is the repository to which the function docker image will be pushed after it is built by Cloud Build. If unspecified, Container Registry will be used by default, unless specified otherwise by other means.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SourceRepository",
        "Represents parameters related to source repository where a function is hosted.\nCannot be set alongside `source_archive_bucket` or `source_archive_object`. Structure is documented below. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`.*",
        Cloudfunctions_FunctionSourceRepository_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "VpcConnector",
        "The VPC Network Connector that this cloud function can connect to. It should be set up as fully-qualified URI. The format of this field is `projects/*/locations/*/connectors/*`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Runtime",
        'The runtime in which the function is going to run.\nEg. `"nodejs16"`, `"python39"`, `"dotnet3"`, `"go116"`, `"java11"`, `"ruby30"`, `"php74"`, etc. Check the [official doc](https://cloud.google.com/functions/docs/concepts/exec#runtimes) for the up-to-date list.\n\n- - -',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceArchiveBucket",
        "The GCS bucket containing the zip archive which contains the function.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "IngressSettings",
        "String value that controls what traffic can reach the function. Allowed values are `ALLOW_ALL`, `ALLOW_INTERNAL_AND_GCLB` and `ALLOW_INTERNAL_ONLY`. Check [ingress documentation](https://cloud.google.com/functions/docs/networking/network-settings#ingress_settings) to see the impact of each settings value. Changes to this field will recreate the cloud function.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccountEmail",
        "If provided, the self-provided service account to run the function with.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "EntryPoint",
        "Name of the function that will be executed when the Google Cloud Function is triggered.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EventTrigger",
        "A source that fires events in response to a condition in another service. Structure is documented below. Cannot be used with `trigger_http`.",
        Cloudfunctions_FunctionEventTrigger_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A user-defined name of the function. Function names must be unique globally.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.\nIf specified, you must also provide an artifact registry repository using the `docker_repository` field that was created with the same KMS crypto key. Before deploying, please complete all pre-requisites described in https://cloud.google.com/functions/docs/securing/cmek#granting_service_accounts_access_to_the_key",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region of function. If it is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Timeout",
        "Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "AvailableMemoryMb",
        "Memory (in MB), available to the function. Default value is `256`. Possible values include `128`, `256`, `512`, `1024`, etc.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "SecretVolumes",
        "Secret volumes configuration. Structure is documented below.",
        Cloudfunctions_FunctionSecretVolume_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "MinInstances",
        "The limit on the minimum number of function instances that may coexist at a given time.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "TriggerHttp",
        "Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as `https_trigger_url`. Cannot be used with `event_trigger`.",
        [],
        false,
        true,
      ),
    ];
  }
}
