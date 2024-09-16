import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkeonprem_BareMetalClusterNetworkConfig,
  gkeonprem_BareMetalClusterNetworkConfig_GetTypes,
} from '../types/gkeonprem_BareMetalClusterNetworkConfig';
import {
  gkeonprem_BareMetalClusterValidationCheck,
  gkeonprem_BareMetalClusterValidationCheck_GetTypes,
} from '../types/gkeonprem_BareMetalClusterValidationCheck';
import {
  gkeonprem_BareMetalClusterStorage,
  gkeonprem_BareMetalClusterStorage_GetTypes,
} from '../types/gkeonprem_BareMetalClusterStorage';
import {
  gkeonprem_BareMetalClusterNodeAccessConfig,
  gkeonprem_BareMetalClusterNodeAccessConfig_GetTypes,
} from '../types/gkeonprem_BareMetalClusterNodeAccessConfig';
import {
  gkeonprem_BareMetalClusterOsEnvironmentConfig,
  gkeonprem_BareMetalClusterOsEnvironmentConfig_GetTypes,
} from '../types/gkeonprem_BareMetalClusterOsEnvironmentConfig';
import {
  gkeonprem_BareMetalClusterProxy,
  gkeonprem_BareMetalClusterProxy_GetTypes,
} from '../types/gkeonprem_BareMetalClusterProxy';
import {
  gkeonprem_BareMetalClusterSecurityConfig,
  gkeonprem_BareMetalClusterSecurityConfig_GetTypes,
} from '../types/gkeonprem_BareMetalClusterSecurityConfig';
import {
  gkeonprem_BareMetalClusterBinaryAuthorization,
  gkeonprem_BareMetalClusterBinaryAuthorization_GetTypes,
} from '../types/gkeonprem_BareMetalClusterBinaryAuthorization';
import {
  gkeonprem_BareMetalClusterLoadBalancer,
  gkeonprem_BareMetalClusterLoadBalancer_GetTypes,
} from '../types/gkeonprem_BareMetalClusterLoadBalancer';
import {
  gkeonprem_BareMetalClusterMaintenanceConfig,
  gkeonprem_BareMetalClusterMaintenanceConfig_GetTypes,
} from '../types/gkeonprem_BareMetalClusterMaintenanceConfig';
import {
  gkeonprem_BareMetalClusterStatus,
  gkeonprem_BareMetalClusterStatus_GetTypes,
} from '../types/gkeonprem_BareMetalClusterStatus';
import {
  gkeonprem_BareMetalClusterFleet,
  gkeonprem_BareMetalClusterFleet_GetTypes,
} from '../types/gkeonprem_BareMetalClusterFleet';
import {
  gkeonprem_BareMetalClusterNodeConfig,
  gkeonprem_BareMetalClusterNodeConfig_GetTypes,
} from '../types/gkeonprem_BareMetalClusterNodeConfig';
import {
  gkeonprem_BareMetalClusterClusterOperations,
  gkeonprem_BareMetalClusterClusterOperations_GetTypes,
} from '../types/gkeonprem_BareMetalClusterClusterOperations';
import {
  gkeonprem_BareMetalClusterControlPlane,
  gkeonprem_BareMetalClusterControlPlane_GetTypes,
} from '../types/gkeonprem_BareMetalClusterControlPlane';
import {
  gkeonprem_BareMetalClusterUpgradePolicy,
  gkeonprem_BareMetalClusterUpgradePolicy_GetTypes,
} from '../types/gkeonprem_BareMetalClusterUpgradePolicy';

export interface BareMetalClusterArgs {
  /*
The Admin Cluster this Bare Metal User Cluster belongs to.
This is the full resource name of the Admin Cluster's hub membership.
*/
  adminClusterMembership?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  nodeConfig?: gkeonprem_BareMetalClusterNodeConfig;

  /*
Specifies the cluster storage configuration.
Structure is documented below.
*/
  storage?: gkeonprem_BareMetalClusterStorage;

  /*
Specifies the node access related settings for the bare metal user cluster.
Structure is documented below.
*/
  nodeAccessConfig?: gkeonprem_BareMetalClusterNodeAccessConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Specifies the cluster proxy configuration.
Structure is documented below.
*/
  proxy?: gkeonprem_BareMetalClusterProxy;

  /*
Annotations on the Bare Metal User Cluster.
This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  // A human readable description of this Bare Metal User Cluster.
  bareMetalVersion?: string;

  /*
Specifies the User Cluster's observability infrastructure.
Structure is documented below.
*/
  clusterOperations?: gkeonprem_BareMetalClusterClusterOperations;

  /*
Specifies the control plane configuration.
Structure is documented below.
*/
  controlPlane?: gkeonprem_BareMetalClusterControlPlane;

  // A human readable description of this Bare Metal User Cluster.
  description?: string;

  /*
Network configuration.
Structure is documented below.
*/
  networkConfig?: gkeonprem_BareMetalClusterNetworkConfig;

  /*
The cluster upgrade policy.
Structure is documented below.
*/
  upgradePolicy?: gkeonprem_BareMetalClusterUpgradePolicy;

  /*
OS environment related configurations.
Structure is documented below.
*/
  osEnvironmentConfig?: gkeonprem_BareMetalClusterOsEnvironmentConfig;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  securityConfig?: gkeonprem_BareMetalClusterSecurityConfig;

  /*
Binary Authorization related configurations.
Structure is documented below.
*/
  binaryAuthorization?: gkeonprem_BareMetalClusterBinaryAuthorization;

  /*
Specifies the load balancer configuration.
Structure is documented below.
*/
  loadBalancer?: gkeonprem_BareMetalClusterLoadBalancer;

  // The location of the resource.
  location?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  maintenanceConfig?: gkeonprem_BareMetalClusterMaintenanceConfig;

  // The bare metal cluster name.
  name?: string;
}
export class BareMetalCluster extends DS_Resource {
  // A human readable description of this Bare Metal User Cluster.
  public bareMetalVersion?: string;

  /*
Binary Authorization related configurations.
Structure is documented below.
*/
  public binaryAuthorization?: gkeonprem_BareMetalClusterBinaryAuthorization;

  // The time the cluster was deleted, in RFC3339 text format.
  public deleteTime?: string;

  /*
OS environment related configurations.
Structure is documented below.
*/
  public osEnvironmentConfig?: gkeonprem_BareMetalClusterOsEnvironmentConfig;

  /*
Specifies the cluster proxy configuration.
Structure is documented below.
*/
  public proxy?: gkeonprem_BareMetalClusterProxy;

  /*
Annotations on the Bare Metal User Cluster.
This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  /*
Specifies the User Cluster's observability infrastructure.
Structure is documented below.
*/
  public clusterOperations?: gkeonprem_BareMetalClusterClusterOperations;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  public securityConfig?: gkeonprem_BareMetalClusterSecurityConfig;

  /*
(Output)
The lifecycle state of the condition.
*/
  public state?: string;

  /*
Specifies the cluster storage configuration.
Structure is documented below.
*/
  public storage?: gkeonprem_BareMetalClusterStorage;

  /*
This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
Allows clients to perform consistent read-modify-writes
through optimistic concurrency control.
*/
  public etag?: string;

  // If set, there are currently changes in flight to the Bare Metal User Cluster.
  public reconciling?: boolean;

  // A human readable description of this Bare Metal User Cluster.
  public description?: string;

  /*
Specifies the load balancer configuration.
Structure is documented below.
*/
  public loadBalancer?: gkeonprem_BareMetalClusterLoadBalancer;

  /*
The object name of the Bare Metal Cluster custom resource on the
associated admin cluster. This field is used to support conflicting
names when enrolling existing clusters to the API. When used as a part of
cluster enrollment, this field will differ from the ID in the resource
name. For new clusters, this field will match the user provided cluster ID
and be visible in the last component of the resource name. It is not
modifiable.
All users should use this name to access their cluster using gkectl or
kubectl and should expect to see the local name when viewing admin
cluster controller logs.
*/
  public localName?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  public nodeConfig?: gkeonprem_BareMetalClusterNodeConfig;

  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  public statuses?: Array<gkeonprem_BareMetalClusterStatus>;

  /*
Network configuration.
Structure is documented below.
*/
  public networkConfig?: gkeonprem_BareMetalClusterNetworkConfig;

  /*
The cluster upgrade policy.
Structure is documented below.
*/
  public upgradePolicy?: gkeonprem_BareMetalClusterUpgradePolicy;

  /*
Specifies the control plane configuration.
Structure is documented below.
*/
  public controlPlane?: gkeonprem_BareMetalClusterControlPlane;

  // The time the cluster was created, in RFC3339 text format.
  public createTime?: string;

  // The IP address name of Bare Metal User Cluster's API server.
  public endpoint?: string;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
See [Anthos Fleets](https://cloud.google.com/anthos/multicluster-management/fleets) for
more details on Anthos multi-cluster capabilities using Fleets.
Structure is documented below.
*/
  public fleets?: Array<gkeonprem_BareMetalClusterFleet>;

  // The bare metal cluster name.
  public name?: string;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  public validationChecks?: Array<gkeonprem_BareMetalClusterValidationCheck>;

  // The unique identifier of the Bare Metal User Cluster.
  public uid?: string;

  // The time the cluster was last updated, in RFC3339 text format.
  public updateTime?: string;

  /*
The Admin Cluster this Bare Metal User Cluster belongs to.
This is the full resource name of the Admin Cluster's hub membership.
*/
  public adminClusterMembership?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  // The location of the resource.
  public location?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  public maintenanceConfig?: gkeonprem_BareMetalClusterMaintenanceConfig;

  /*
Specifies the node access related settings for the bare metal user cluster.
Structure is documented below.
*/
  public nodeAccessConfig?: gkeonprem_BareMetalClusterNodeAccessConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'securityConfig',
        'Specifies the security related settings for the Bare Metal User Cluster.\nStructure is documented below.',
        () => gkeonprem_BareMetalClusterSecurityConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'binaryAuthorization',
        'Binary Authorization related configurations.\nStructure is documented below.',
        () => gkeonprem_BareMetalClusterBinaryAuthorization_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'nodeConfig',
        'Specifies the workload node configurations.\nStructure is documented below.',
        () => gkeonprem_BareMetalClusterNodeConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'storage',
        'Specifies the cluster storage configuration.\nStructure is documented below.',
        () => gkeonprem_BareMetalClusterStorage_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'nodeAccessConfig',
        'Specifies the node access related settings for the bare metal user cluster.\nStructure is documented below.',
        () => gkeonprem_BareMetalClusterNodeAccessConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'bareMetalVersion',
        'A human readable description of this Bare Metal User Cluster.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'osEnvironmentConfig',
        'OS environment related configurations.\nStructure is documented below.',
        () => gkeonprem_BareMetalClusterOsEnvironmentConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'adminClusterMembership',
        "The Admin Cluster this Bare Metal User Cluster belongs to.\nThis is the full resource name of the Admin Cluster's hub membership.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'proxy',
        'Specifies the cluster proxy configuration.\nStructure is documented below.',
        () => gkeonprem_BareMetalClusterProxy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'annotations',
        'Annotations on the Bare Metal User Cluster.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The bare metal cluster name.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'clusterOperations',
        "Specifies the User Cluster's observability infrastructure.\nStructure is documented below.",
        () => gkeonprem_BareMetalClusterClusterOperations_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A human readable description of this Bare Metal User Cluster.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'networkConfig',
        'Network configuration.\nStructure is documented below.',
        () => gkeonprem_BareMetalClusterNetworkConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'upgradePolicy',
        'The cluster upgrade policy.\nStructure is documented below.',
        () => gkeonprem_BareMetalClusterUpgradePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'maintenanceConfig',
        'Specifies the workload node configurations.\nStructure is documented below.',
        () => gkeonprem_BareMetalClusterMaintenanceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'controlPlane',
        'Specifies the control plane configuration.\nStructure is documented below.',
        () => gkeonprem_BareMetalClusterControlPlane_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'loadBalancer',
        'Specifies the load balancer configuration.\nStructure is documented below.',
        () => gkeonprem_BareMetalClusterLoadBalancer_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location of the resource.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
