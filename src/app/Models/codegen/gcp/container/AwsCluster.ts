import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_AwsClusterBinaryAuthorization,
  container_AwsClusterBinaryAuthorization_GetTypes,
} from '../types/container_AwsClusterBinaryAuthorization';
import {
  container_AwsClusterFleet,
  container_AwsClusterFleet_GetTypes,
} from '../types/container_AwsClusterFleet';
import {
  container_AwsClusterWorkloadIdentityConfig,
  container_AwsClusterWorkloadIdentityConfig_GetTypes,
} from '../types/container_AwsClusterWorkloadIdentityConfig';
import {
  container_AwsClusterControlPlane,
  container_AwsClusterControlPlane_GetTypes,
} from '../types/container_AwsClusterControlPlane';
import {
  container_AwsClusterLoggingConfig,
  container_AwsClusterLoggingConfig_GetTypes,
} from '../types/container_AwsClusterLoggingConfig';
import {
  container_AwsClusterNetworking,
  container_AwsClusterNetworking_GetTypes,
} from '../types/container_AwsClusterNetworking';
import {
  container_AwsClusterAuthorization,
  container_AwsClusterAuthorization_GetTypes,
} from '../types/container_AwsClusterAuthorization';

export interface AwsClusterArgs {
  /*
Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  // Configuration related to the cluster control plane.
  controlPlane?: container_AwsClusterControlPlane;

  // Logging configuration.
  loggingConfig?: container_AwsClusterLoggingConfig;

  // The name of this resource.
  name?: string;

  // Cluster-wide networking configuration.
  networking?: container_AwsClusterNetworking;

  // The number of the Fleet host project where this cluster will be registered.
  project?: string;

  // Configuration related to the cluster RBAC settings.
  authorization?: container_AwsClusterAuthorization;

  // The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.
  awsRegion?: string;

  // Configuration options for the Binary Authorization feature.
  binaryAuthorization?: container_AwsClusterBinaryAuthorization;

  // Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  description?: string;

  // Fleet configuration.
  fleet?: container_AwsClusterFleet;

  // The location for the resource
  location?: string;
}
export class AwsCluster extends DS_Resource {
  // Configuration related to the cluster control plane.
  public controlPlane?: container_AwsClusterControlPlane;

  // Fleet configuration.
  public fleet?: container_AwsClusterFleet;

  // The number of the Fleet host project where this cluster will be registered.
  public project?: string;

  // Configuration related to the cluster RBAC settings.
  public authorization?: container_AwsClusterAuthorization;

  // Configuration options for the Binary Authorization feature.
  public binaryAuthorization?: container_AwsClusterBinaryAuthorization;

  // Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public etag?: string;

  // Logging configuration.
  public loggingConfig?: container_AwsClusterLoggingConfig;

  // Output only. If set, there are currently changes in flight to the cluster.
  public reconciling?: boolean;

  /*
Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  // Output only. The endpoint of the cluster's API server.
  public endpoint?: string;

  // The name of this resource.
  public name?: string;

  // Cluster-wide networking configuration.
  public networking?: container_AwsClusterNetworking;

  // Output only. The current state of the cluster. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED
  public state?: string;

  // Output only. A globally unique identifier for the cluster.
  public uid?: string;

  // Output only. Workload Identity settings.
  public workloadIdentityConfigs?: Array<container_AwsClusterWorkloadIdentityConfig>;

  // The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.
  public awsRegion?: string;

  // Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  public description?: string;

  // The location for the resource
  public location?: string;

  // Output only. The time at which this cluster was last updated.
  public updateTime?: string;

  // Output only. The time at which this cluster was created.
  public createTime?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location for the resource',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'annotations',
        'Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of this resource.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'networking',
        'Cluster-wide networking configuration.',
        () => container_AwsClusterNetworking_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The number of the Fleet host project where this cluster will be registered.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'authorization',
        'Configuration related to the cluster RBAC settings.',
        () => container_AwsClusterAuthorization_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'binaryAuthorization',
        'Configuration options for the Binary Authorization feature.',
        () => container_AwsClusterBinaryAuthorization_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'controlPlane',
        'Configuration related to the cluster control plane.',
        () => container_AwsClusterControlPlane_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'loggingConfig',
        'Logging configuration.',
        () => container_AwsClusterLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'awsRegion',
        'The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'fleet',
        'Fleet configuration.',
        () => container_AwsClusterFleet_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
