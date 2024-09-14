import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkeonprem_BareMetalAdminClusterValidationCheck,
  gkeonprem_BareMetalAdminClusterValidationCheck_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterValidationCheck";
import {
  gkeonprem_BareMetalAdminClusterMaintenanceConfig,
  gkeonprem_BareMetalAdminClusterMaintenanceConfig_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterMaintenanceConfig";
import {
  gkeonprem_BareMetalAdminClusterStorage,
  gkeonprem_BareMetalAdminClusterStorage_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterStorage";
import {
  gkeonprem_BareMetalAdminClusterNodeConfig,
  gkeonprem_BareMetalAdminClusterNodeConfig_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterNodeConfig";
import {
  gkeonprem_BareMetalAdminClusterClusterOperations,
  gkeonprem_BareMetalAdminClusterClusterOperations_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterClusterOperations";
import {
  gkeonprem_BareMetalAdminClusterControlPlane,
  gkeonprem_BareMetalAdminClusterControlPlane_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterControlPlane";
import {
  gkeonprem_BareMetalAdminClusterStatus,
  gkeonprem_BareMetalAdminClusterStatus_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterStatus";
import {
  gkeonprem_BareMetalAdminClusterProxy,
  gkeonprem_BareMetalAdminClusterProxy_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterProxy";
import {
  gkeonprem_BareMetalAdminClusterSecurityConfig,
  gkeonprem_BareMetalAdminClusterSecurityConfig_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterSecurityConfig";
import {
  gkeonprem_BareMetalAdminClusterNetworkConfig,
  gkeonprem_BareMetalAdminClusterNetworkConfig_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterNetworkConfig";
import {
  gkeonprem_BareMetalAdminClusterNodeAccessConfig,
  gkeonprem_BareMetalAdminClusterNodeAccessConfig_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterNodeAccessConfig";
import {
  gkeonprem_BareMetalAdminClusterLoadBalancer,
  gkeonprem_BareMetalAdminClusterLoadBalancer_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterLoadBalancer";
import {
  gkeonprem_BareMetalAdminClusterFleet,
  gkeonprem_BareMetalAdminClusterFleet_GetTypes,
} from "../types/gkeonprem_BareMetalAdminClusterFleet";

export interface BareMetalAdminClusterArgs {
  // A human readable description of this Bare Metal Admin Cluster.
  description?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  maintenanceConfig?: gkeonprem_BareMetalAdminClusterMaintenanceConfig;

  // The bare metal admin cluster name.
  name?: string;

  /*
Annotations on the Bare Metal Admin Cluster.
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

  // A human readable description of this Bare Metal Admin Cluster.
  bareMetalVersion?: string;

  /*
Specifies the cluster proxy configuration.
Structure is documented below.
*/
  proxy?: gkeonprem_BareMetalAdminClusterProxy;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  securityConfig?: gkeonprem_BareMetalAdminClusterSecurityConfig;

  /*
Specifies the cluster storage configuration.
Structure is documented below.
*/
  storage?: gkeonprem_BareMetalAdminClusterStorage;

  /*
Network configuration.
Structure is documented below.
*/
  networkConfig?: gkeonprem_BareMetalAdminClusterNetworkConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Specifies the node access related settings for the bare metal user cluster.
Structure is documented below.
*/
  nodeAccessConfig?: gkeonprem_BareMetalAdminClusterNodeAccessConfig;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  nodeConfig?: gkeonprem_BareMetalAdminClusterNodeConfig;

  /*
Specifies the Admin Cluster's observability infrastructure.
Structure is documented below.
*/
  clusterOperations?: gkeonprem_BareMetalAdminClusterClusterOperations;

  /*
The location of the resource.


- - -
*/
  location?: string;

  /*
Specifies the control plane configuration.
Structure is documented below.
*/
  controlPlane?: gkeonprem_BareMetalAdminClusterControlPlane;

  /*
Specifies the load balancer configuration.
Structure is documented below.
*/
  loadBalancer?: gkeonprem_BareMetalAdminClusterLoadBalancer;
}
export class BareMetalAdminCluster extends DS_Resource {
  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  public maintenanceConfig?: gkeonprem_BareMetalAdminClusterMaintenanceConfig;

  /*
Network configuration.
Structure is documented below.
*/
  public networkConfig?: gkeonprem_BareMetalAdminClusterNetworkConfig;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  public securityConfig?: gkeonprem_BareMetalAdminClusterSecurityConfig;

  /*
Specifies the Admin Cluster's observability infrastructure.
Structure is documented below.
*/
  public clusterOperations?: gkeonprem_BareMetalAdminClusterClusterOperations;

  // The time the cluster was last updated, in RFC3339 text format.
  public updateTime?: string;

  /*
Annotations on the Bare Metal Admin Cluster.
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
This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
Allows clients to perform consistent read-modify-writes
through optimistic concurrency control.
*/
  public etag?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // If set, there are currently changes in flight to the Bare Metal Admin Cluster.
  public reconciling?: boolean;

  /*
(Output)
The lifecycle state of the condition.
*/
  public state?: string;

  // The bare metal admin cluster name.
  public name?: string;

  /*
Specifies the node access related settings for the bare metal user cluster.
Structure is documented below.
*/
  public nodeAccessConfig?: gkeonprem_BareMetalAdminClusterNodeAccessConfig;

  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  public statuses?: Array<gkeonprem_BareMetalAdminClusterStatus>;

  // A human readable description of this Bare Metal Admin Cluster.
  public description?: string;

  /*
The location of the resource.


- - -
*/
  public location?: string;

  /*
Specifies the cluster storage configuration.
Structure is documented below.
*/
  public storage?: gkeonprem_BareMetalAdminClusterStorage;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  // The IP address name of Bare Metal Admin Cluster's API server.
  public endpoint?: string;

  /*
The object name of the Bare Metal Admin Cluster custom resource on the
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
  public nodeConfig?: gkeonprem_BareMetalAdminClusterNodeConfig;

  // The unique identifier of the Bare Metal Admin Cluster.
  public uid?: string;

  /*
Specifies the security related settings for the Bare Metal Admin Cluster.
Structure is documented below.
*/
  public validationChecks?: Array<gkeonprem_BareMetalAdminClusterValidationCheck>;

  // A human readable description of this Bare Metal Admin Cluster.
  public bareMetalVersion?: string;

  // The time the cluster was created, in RFC3339 text format.
  public createTime?: string;

  // The time the cluster was deleted, in RFC3339 text format.
  public deleteTime?: string;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
See [Anthos Fleets](https://cloud.google.com/anthos/multicluster-management/fleets) for
more details on Anthos multi-cluster capabilities using Fleets.
Structure is documented below.
*/
  public fleets?: Array<gkeonprem_BareMetalAdminClusterFleet>;

  /*
Specifies the load balancer configuration.
Structure is documented below.
*/
  public loadBalancer?: gkeonprem_BareMetalAdminClusterLoadBalancer;

  /*
Specifies the cluster proxy configuration.
Structure is documented below.
*/
  public proxy?: gkeonprem_BareMetalAdminClusterProxy;

  /*
Specifies the control plane configuration.
Structure is documented below.
*/
  public controlPlane?: gkeonprem_BareMetalAdminClusterControlPlane;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "loadBalancer",
        "Specifies the load balancer configuration.\nStructure is documented below.",
        () => gkeonprem_BareMetalAdminClusterLoadBalancer_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "maintenanceConfig",
        "Specifies the workload node configurations.\nStructure is documented below.",
        () => gkeonprem_BareMetalAdminClusterMaintenanceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "clusterOperations",
        "Specifies the Admin Cluster's observability infrastructure.\nStructure is documented below.",
        () => gkeonprem_BareMetalAdminClusterClusterOperations_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "securityConfig",
        "Specifies the security related settings for the Bare Metal User Cluster.\nStructure is documented below.",
        () => gkeonprem_BareMetalAdminClusterSecurityConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodeConfig",
        "Specifies the workload node configurations.\nStructure is documented below.",
        () => gkeonprem_BareMetalAdminClusterNodeConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "controlPlane",
        "Specifies the control plane configuration.\nStructure is documented below.",
        () => gkeonprem_BareMetalAdminClusterControlPlane_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The bare metal admin cluster name.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "bareMetalVersion",
        "A human readable description of this Bare Metal Admin Cluster.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "storage",
        "Specifies the cluster storage configuration.\nStructure is documented below.",
        () => gkeonprem_BareMetalAdminClusterStorage_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkConfig",
        "Network configuration.\nStructure is documented below.",
        () => gkeonprem_BareMetalAdminClusterNetworkConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the resource.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A human readable description of this Bare Metal Admin Cluster.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "proxy",
        "Specifies the cluster proxy configuration.\nStructure is documented below.",
        () => gkeonprem_BareMetalAdminClusterProxy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "Annotations on the Bare Metal Admin Cluster.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodeAccessConfig",
        "Specifies the node access related settings for the bare metal user cluster.\nStructure is documented below.",
        () => gkeonprem_BareMetalAdminClusterNodeAccessConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
