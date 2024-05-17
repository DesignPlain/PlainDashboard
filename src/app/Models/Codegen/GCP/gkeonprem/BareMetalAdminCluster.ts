import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalAdminClusterNodeConfig,
  Gkeonprem_BareMetalAdminClusterNodeConfig_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterNodeConfig";
import {
  Gkeonprem_BareMetalAdminClusterProxy,
  Gkeonprem_BareMetalAdminClusterProxy_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterProxy";
import {
  Gkeonprem_BareMetalAdminClusterSecurityConfig,
  Gkeonprem_BareMetalAdminClusterSecurityConfig_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterSecurityConfig";
import {
  Gkeonprem_BareMetalAdminClusterNetworkConfig,
  Gkeonprem_BareMetalAdminClusterNetworkConfig_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterNetworkConfig";
import {
  Gkeonprem_BareMetalAdminClusterControlPlane,
  Gkeonprem_BareMetalAdminClusterControlPlane_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterControlPlane";
import {
  Gkeonprem_BareMetalAdminClusterFleet,
  Gkeonprem_BareMetalAdminClusterFleet_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterFleet";
import {
  Gkeonprem_BareMetalAdminClusterStatus,
  Gkeonprem_BareMetalAdminClusterStatus_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterStatus";
import {
  Gkeonprem_BareMetalAdminClusterMaintenanceConfig,
  Gkeonprem_BareMetalAdminClusterMaintenanceConfig_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterMaintenanceConfig";
import {
  Gkeonprem_BareMetalAdminClusterClusterOperations,
  Gkeonprem_BareMetalAdminClusterClusterOperations_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterClusterOperations";
import {
  Gkeonprem_BareMetalAdminClusterNodeAccessConfig,
  Gkeonprem_BareMetalAdminClusterNodeAccessConfig_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterNodeAccessConfig";
import {
  Gkeonprem_BareMetalAdminClusterStorage,
  Gkeonprem_BareMetalAdminClusterStorage_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterStorage";
import {
  Gkeonprem_BareMetalAdminClusterValidationCheck,
  Gkeonprem_BareMetalAdminClusterValidationCheck_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterValidationCheck";
import {
  Gkeonprem_BareMetalAdminClusterLoadBalancer,
  Gkeonprem_BareMetalAdminClusterLoadBalancer_GetTypes,
} from "../types/Gkeonprem_BareMetalAdminClusterLoadBalancer";

export interface BareMetalAdminClusterArgs {
  /*
Specifies the load balancer configuration.
Structure is documented below.
*/
  LoadBalancer?: Gkeonprem_BareMetalAdminClusterLoadBalancer;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  MaintenanceConfig?: Gkeonprem_BareMetalAdminClusterMaintenanceConfig;

  // The bare metal admin cluster name.
  Name?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  NodeConfig?: Gkeonprem_BareMetalAdminClusterNodeConfig;

  /*
Specifies the cluster proxy configuration.
Structure is documented below.
*/
  Proxy?: Gkeonprem_BareMetalAdminClusterProxy;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  SecurityConfig?: Gkeonprem_BareMetalAdminClusterSecurityConfig;

  // A human readable description of this Bare Metal Admin Cluster.
  BareMetalVersion?: string;

  /*
Specifies the Admin Cluster's observability infrastructure.
Structure is documented below.
*/
  ClusterOperations?: Gkeonprem_BareMetalAdminClusterClusterOperations;

  /*
The location of the resource.


- - -
*/
  Location?: string;

  /*
Network configuration.
Structure is documented below.
*/
  NetworkConfig?: Gkeonprem_BareMetalAdminClusterNetworkConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

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
  Annotations?: Map<string, string>;

  /*
Specifies the control plane configuration.
Structure is documented below.
*/
  ControlPlane?: Gkeonprem_BareMetalAdminClusterControlPlane;

  // A human readable description of this Bare Metal Admin Cluster.
  Description?: string;

  /*
Specifies the node access related settings for the bare metal user cluster.
Structure is documented below.
*/
  NodeAccessConfig?: Gkeonprem_BareMetalAdminClusterNodeAccessConfig;

  /*
Specifies the cluster storage configuration.
Structure is documented below.
*/
  Storage?: Gkeonprem_BareMetalAdminClusterStorage;
}
export class BareMetalAdminCluster extends Resource {
  /*
Specifies the cluster storage configuration.
Structure is documented below.
*/
  public Storage?: Gkeonprem_BareMetalAdminClusterStorage;

  // The unique identifier of the Bare Metal Admin Cluster.
  public Uid?: string;

  // The time the cluster was created, in RFC3339 text format.
  public CreateTime?: string;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
See [Anthos Fleets](https://cloud.google.com/anthos/multicluster-management/fleets) for
more details on Anthos multi-cluster capabilities using Fleets.
Structure is documented below.
*/
  public Fleets?: Array<Gkeonprem_BareMetalAdminClusterFleet>;

  /*
Specifies the load balancer configuration.
Structure is documented below.
*/
  public LoadBalancer?: Gkeonprem_BareMetalAdminClusterLoadBalancer;

  // The bare metal admin cluster name.
  public Name?: string;

  // The time the cluster was last updated, in RFC3339 text format.
  public UpdateTime?: string;

  // The time the cluster was deleted, in RFC3339 text format.
  public DeleteTime?: string;

  // A human readable description of this Bare Metal Admin Cluster.
  public Description?: string;

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
  public LocalName?: string;

  // A human readable description of this Bare Metal Admin Cluster.
  public BareMetalVersion?: string;

  // If set, there are currently changes in flight to the Bare Metal Admin Cluster.
  public Reconciling?: boolean;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  public MaintenanceConfig?: Gkeonprem_BareMetalAdminClusterMaintenanceConfig;

  /*
Specifies the cluster proxy configuration.
Structure is documented below.
*/
  public Proxy?: Gkeonprem_BareMetalAdminClusterProxy;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  public SecurityConfig?: Gkeonprem_BareMetalAdminClusterSecurityConfig;

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
  public Annotations?: Map<string, string>;

  /*
Specifies the control plane configuration.
Structure is documented below.
*/
  public ControlPlane?: Gkeonprem_BareMetalAdminClusterControlPlane;

  /*
(Output)
The lifecycle state of the condition.
*/
  public State?: string;

  // The IP address name of Bare Metal Admin Cluster's API server.
  public Endpoint?: string;

  /*
Specifies the node access related settings for the bare metal user cluster.
Structure is documented below.
*/
  public NodeAccessConfig?: Gkeonprem_BareMetalAdminClusterNodeAccessConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Specifies the Admin Cluster's observability infrastructure.
Structure is documented below.
*/
  public ClusterOperations?: Gkeonprem_BareMetalAdminClusterClusterOperations;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
Network configuration.
Structure is documented below.
*/
  public NetworkConfig?: Gkeonprem_BareMetalAdminClusterNetworkConfig;

  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  public Statuses?: Array<Gkeonprem_BareMetalAdminClusterStatus>;

  /*
Specifies the security related settings for the Bare Metal Admin Cluster.
Structure is documented below.
*/
  public ValidationChecks?: Array<Gkeonprem_BareMetalAdminClusterValidationCheck>;

  /*
This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
Allows clients to perform consistent read-modify-writes
through optimistic concurrency control.
*/
  public Etag?: string;

  /*
The location of the resource.


- - -
*/
  public Location?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  public NodeConfig?: Gkeonprem_BareMetalAdminClusterNodeConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "NodeConfig",
        "Specifies the workload node configurations.\nStructure is documented below.",
        Gkeonprem_BareMetalAdminClusterNodeConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "BareMetalVersion",
        "A human readable description of this Bare Metal Admin Cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NodeAccessConfig",
        "Specifies the node access related settings for the bare metal user cluster.\nStructure is documented below.",
        Gkeonprem_BareMetalAdminClusterNodeAccessConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The bare metal admin cluster name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NetworkConfig",
        "Network configuration.\nStructure is documented below.",
        Gkeonprem_BareMetalAdminClusterNetworkConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ControlPlane",
        "Specifies the control plane configuration.\nStructure is documented below.",
        Gkeonprem_BareMetalAdminClusterControlPlane_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human readable description of this Bare Metal Admin Cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MaintenanceConfig",
        "Specifies the workload node configurations.\nStructure is documented below.",
        Gkeonprem_BareMetalAdminClusterMaintenanceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ClusterOperations",
        "Specifies the Admin Cluster's observability infrastructure.\nStructure is documented below.",
        Gkeonprem_BareMetalAdminClusterClusterOperations_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        "Annotations on the Bare Metal Admin Cluster.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LoadBalancer",
        "Specifies the load balancer configuration.\nStructure is documented below.",
        Gkeonprem_BareMetalAdminClusterLoadBalancer_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Proxy",
        "Specifies the cluster proxy configuration.\nStructure is documented below.",
        Gkeonprem_BareMetalAdminClusterProxy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SecurityConfig",
        "Specifies the security related settings for the Bare Metal User Cluster.\nStructure is documented below.",
        Gkeonprem_BareMetalAdminClusterSecurityConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Storage",
        "Specifies the cluster storage configuration.\nStructure is documented below.",
        Gkeonprem_BareMetalAdminClusterStorage_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
