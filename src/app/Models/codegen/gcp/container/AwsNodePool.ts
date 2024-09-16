import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_AwsNodePoolAutoscaling,
  container_AwsNodePoolAutoscaling_GetTypes,
} from '../types/container_AwsNodePoolAutoscaling';
import {
  container_AwsNodePoolConfig,
  container_AwsNodePoolConfig_GetTypes,
} from '../types/container_AwsNodePoolConfig';
import {
  container_AwsNodePoolManagement,
  container_AwsNodePoolManagement_GetTypes,
} from '../types/container_AwsNodePoolManagement';
import {
  container_AwsNodePoolMaxPodsConstraint,
  container_AwsNodePoolMaxPodsConstraint_GetTypes,
} from '../types/container_AwsNodePoolMaxPodsConstraint';
import {
  container_AwsNodePoolUpdateSettings,
  container_AwsNodePoolUpdateSettings_GetTypes,
} from '../types/container_AwsNodePoolUpdateSettings';

export interface AwsNodePoolArgs {
  // The name of this resource.
  name?: string;

  // The project for the resource
  project?: string;

  /*
Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  // Autoscaler configuration for this node pool.
  autoscaling?: container_AwsNodePoolAutoscaling;

  // The awsCluster for the resource
  cluster?: string;

  // The configuration of the node pool.
  config?: container_AwsNodePoolConfig;

  // The location for the resource
  location?: string;

  // The Management configuration for this node pool.
  management?: container_AwsNodePoolManagement;

  // The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.
  version?: string;

  // The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
  maxPodsConstraint?: container_AwsNodePoolMaxPodsConstraint;

  // The subnet where the node pool node run.
  subnetId?: string;

  // Optional. Update settings control the speed and disruption of the node pool update.
  updateSettings?: container_AwsNodePoolUpdateSettings;
}
export class AwsNodePool extends DS_Resource {
  /*
Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  // Output only. The time at which this node pool was created.
  public createTime?: string;

  // Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public etag?: string;

  // The name of this resource.
  public name?: string;

  // Autoscaler configuration for this node pool.
  public autoscaling?: container_AwsNodePoolAutoscaling;

  // The configuration of the node pool.
  public config?: container_AwsNodePoolConfig;

  // The Management configuration for this node pool.
  public management?: container_AwsNodePoolManagement;

  // Output only. The lifecycle state of the node pool. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED
  public state?: string;

  // Output only. The time at which this node pool was last updated.
  public updateTime?: string;

  // The awsCluster for the resource
  public cluster?: string;

  // The location for the resource
  public location?: string;

  // The project for the resource
  public project?: string;

  // Output only. If set, there are currently changes in flight to the node pool.
  public reconciling?: boolean;

  // Optional. Update settings control the speed and disruption of the node pool update.
  public updateSettings?: container_AwsNodePoolUpdateSettings;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  // The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
  public maxPodsConstraint?: container_AwsNodePoolMaxPodsConstraint;

  // The subnet where the node pool node run.
  public subnetId?: string;

  // Output only. A globally unique identifier for the node pool.
  public uid?: string;

  // The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.
  public version?: string;

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
        InputType.Object,
        'management',
        'The Management configuration for this node pool.',
        () => container_AwsNodePoolManagement_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'version',
        'The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.',
        () => [],
        true,
        false,
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
        InputType.Map,
        'annotations',
        'Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'autoscaling',
        'Autoscaler configuration for this node pool.',
        () => container_AwsNodePoolAutoscaling_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'config',
        'The configuration of the node pool.',
        () => container_AwsNodePoolConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'updateSettings',
        'Optional. Update settings control the speed and disruption of the node pool update.',
        () => container_AwsNodePoolUpdateSettings_GetTypes(),
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
        InputType.String,
        'cluster',
        'The awsCluster for the resource',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'maxPodsConstraint',
        'The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.',
        () => container_AwsNodePoolMaxPodsConstraint_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'subnetId',
        'The subnet where the node pool node run.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
