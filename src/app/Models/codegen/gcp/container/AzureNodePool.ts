import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_AzureNodePoolConfig,
  container_AzureNodePoolConfig_GetTypes,
} from '../types/container_AzureNodePoolConfig';
import {
  container_AzureNodePoolMaxPodsConstraint,
  container_AzureNodePoolMaxPodsConstraint_GetTypes,
} from '../types/container_AzureNodePoolMaxPodsConstraint';
import {
  container_AzureNodePoolManagement,
  container_AzureNodePoolManagement_GetTypes,
} from '../types/container_AzureNodePoolManagement';
import {
  container_AzureNodePoolAutoscaling,
  container_AzureNodePoolAutoscaling_GetTypes,
} from '../types/container_AzureNodePoolAutoscaling';

export interface AzureNodePoolArgs {
  /*
Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  // Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.
  azureAvailabilityZone?: string;

  // The Management configuration for this node pool.
  management?: container_AzureNodePoolManagement;

  // The ARM ID of the subnet where the node pool VMs run. Make sure it's a subnet under the virtual network in the cluster configuration.
  subnetId?: string;

  // The project for the resource
  project?: string;

  // The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.
  version?: string;

  // Autoscaler configuration for this node pool.
  autoscaling?: container_AzureNodePoolAutoscaling;

  // The azureCluster for the resource
  cluster?: string;

  // The node configuration of the node pool.
  config?: container_AzureNodePoolConfig;

  // The location for the resource
  location?: string;

  // The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
  maxPodsConstraint?: container_AzureNodePoolMaxPodsConstraint;

  // The name of this resource.
  name?: string;
}
export class AzureNodePool extends DS_Resource {
  // The Management configuration for this node pool.
  public management?: container_AzureNodePoolManagement;

  // The name of this resource.
  public name?: string;

  // Output only. A globally unique identifier for the node pool.
  public uid?: string;

  // Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.
  public azureAvailabilityZone?: string;

  // Output only. The time at which this node pool was created.
  public createTime?: string;

  // The location for the resource
  public location?: string;

  // The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
  public maxPodsConstraint?: container_AzureNodePoolMaxPodsConstraint;

  // The project for the resource
  public project?: string;

  // The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.
  public version?: string;

  // The node configuration of the node pool.
  public config?: container_AzureNodePoolConfig;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  // Output only. If set, there are currently pending changes to the node pool.
  public reconciling?: boolean;

  // Output only. The time at which this node pool was last updated.
  public updateTime?: string;

  /*
Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  // Autoscaler configuration for this node pool.
  public autoscaling?: container_AzureNodePoolAutoscaling;

  // The azureCluster for the resource
  public cluster?: string;

  // Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public etag?: string;

  // Output only. The current state of the node pool. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED
  public state?: string;

  // The ARM ID of the subnet where the node pool VMs run. Make sure it's a subnet under the virtual network in the cluster configuration.
  public subnetId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'config',
        'The node configuration of the node pool.',
        () => container_AzureNodePoolConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location for the resource',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'azureAvailabilityZone',
        'Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'subnetId',
        "The ARM ID of the subnet where the node pool VMs run. Make sure it's a subnet under the virtual network in the cluster configuration.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The project for the resource',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'cluster',
        'The azureCluster for the resource',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'maxPodsConstraint',
        'The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.',
        () => container_AzureNodePoolMaxPodsConstraint_GetTypes(),
        true,
        true,
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
        InputType.Map,
        'annotations',
        'Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'management',
        'The Management configuration for this node pool.',
        () => container_AzureNodePoolManagement_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'version',
        'The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'autoscaling',
        'Autoscaler configuration for this node pool.',
        () => container_AzureNodePoolAutoscaling_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
