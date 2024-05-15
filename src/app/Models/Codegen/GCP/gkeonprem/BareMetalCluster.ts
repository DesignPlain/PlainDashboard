import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterOsEnvironmentConfig,
  Gkeonprem_BareMetalClusterOsEnvironmentConfig_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterOsEnvironmentConfig";
import {
  Gkeonprem_BareMetalClusterProxy,
  Gkeonprem_BareMetalClusterProxy_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterProxy";
import {
  Gkeonprem_BareMetalClusterMaintenanceConfig,
  Gkeonprem_BareMetalClusterMaintenanceConfig_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterMaintenanceConfig";
import {
  Gkeonprem_BareMetalClusterValidationCheck,
  Gkeonprem_BareMetalClusterValidationCheck_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterValidationCheck";
import {
  Gkeonprem_BareMetalClusterStatus,
  Gkeonprem_BareMetalClusterStatus_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterStatus";
import {
  Gkeonprem_BareMetalClusterNodeConfig,
  Gkeonprem_BareMetalClusterNodeConfig_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterNodeConfig";
import {
  Gkeonprem_BareMetalClusterBinaryAuthorization,
  Gkeonprem_BareMetalClusterBinaryAuthorization_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterBinaryAuthorization";
import {
  Gkeonprem_BareMetalClusterFleet,
  Gkeonprem_BareMetalClusterFleet_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterFleet";
import {
  Gkeonprem_BareMetalClusterNodeAccessConfig,
  Gkeonprem_BareMetalClusterNodeAccessConfig_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterNodeAccessConfig";
import {
  Gkeonprem_BareMetalClusterNetworkConfig,
  Gkeonprem_BareMetalClusterNetworkConfig_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterNetworkConfig";
import {
  Gkeonprem_BareMetalClusterUpgradePolicy,
  Gkeonprem_BareMetalClusterUpgradePolicy_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterUpgradePolicy";
import {
  Gkeonprem_BareMetalClusterStorage,
  Gkeonprem_BareMetalClusterStorage_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterStorage";
import {
  Gkeonprem_BareMetalClusterControlPlane,
  Gkeonprem_BareMetalClusterControlPlane_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterControlPlane";
import {
  Gkeonprem_BareMetalClusterLoadBalancer,
  Gkeonprem_BareMetalClusterLoadBalancer_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterLoadBalancer";
import {
  Gkeonprem_BareMetalClusterClusterOperations,
  Gkeonprem_BareMetalClusterClusterOperations_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterClusterOperations";
import {
  Gkeonprem_BareMetalClusterSecurityConfig,
  Gkeonprem_BareMetalClusterSecurityConfig_GetTypes,
} from "../types/Gkeonprem_BareMetalClusterSecurityConfig";

export interface BareMetalClusterArgs {
  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  NodeConfig?: Gkeonprem_BareMetalClusterNodeConfig;

  /*
Specifies the cluster storage configuration.
Structure is documented below.
*/
  Storage?: Gkeonprem_BareMetalClusterStorage;

  /*
Specifies the control plane configuration.
Structure is documented below.
*/
  ControlPlane?: Gkeonprem_BareMetalClusterControlPlane;

  /*
Specifies the load balancer configuration.
Structure is documented below.
*/
  LoadBalancer?: Gkeonprem_BareMetalClusterLoadBalancer;

  // The bare metal cluster name.
  Name?: string;

  /*
Specifies the User Cluster's observability infrastructure.
Structure is documented below.
*/
  ClusterOperations?: Gkeonprem_BareMetalClusterClusterOperations;

  /*
OS environment related configurations.
Structure is documented below.
*/
  OsEnvironmentConfig?: Gkeonprem_BareMetalClusterOsEnvironmentConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The Admin Cluster this Bare Metal User Cluster belongs to.
This is the full resource name of the Admin Cluster's hub membership.
*/
  AdminClusterMembership?: string;

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
  Annotations?: Map<string, string>;

  // A human readable description of this Bare Metal User Cluster.
  BareMetalVersion?: string;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  SecurityConfig?: Gkeonprem_BareMetalClusterSecurityConfig;

  /*
Binary Authorization related configurations.
Structure is documented below.
*/
  BinaryAuthorization?: Gkeonprem_BareMetalClusterBinaryAuthorization;

  // A human readable description of this Bare Metal User Cluster.
  Description?: string;

  /*
Network configuration.
Structure is documented below.
*/
  NetworkConfig?: Gkeonprem_BareMetalClusterNetworkConfig;

  /*
Specifies the cluster proxy configuration.
Structure is documented below.
*/
  Proxy?: Gkeonprem_BareMetalClusterProxy;

  /*
The cluster upgrade policy.
Structure is documented below.
*/
  UpgradePolicy?: Gkeonprem_BareMetalClusterUpgradePolicy;

  // The location of the resource.
  Location?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  MaintenanceConfig?: Gkeonprem_BareMetalClusterMaintenanceConfig;

  /*
Specifies the node access related settings for the bare metal user cluster.
Structure is documented below.
*/
  NodeAccessConfig?: Gkeonprem_BareMetalClusterNodeAccessConfig;
}
export class BareMetalCluster extends Resource {
  // The IP address name of Bare Metal User Cluster's API server.
  public Endpoint?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  public NodeConfig?: Gkeonprem_BareMetalClusterNodeConfig;

  /*
The cluster upgrade policy.
Structure is documented below.
*/
  public UpgradePolicy?: Gkeonprem_BareMetalClusterUpgradePolicy;

  /*
Binary Authorization related configurations.
Structure is documented below.
*/
  public BinaryAuthorization?: Gkeonprem_BareMetalClusterBinaryAuthorization;

  // The time the cluster was deleted, in RFC3339 text format.
  public DeleteTime?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
Specifies the load balancer configuration.
Structure is documented below.
*/
  public LoadBalancer?: Gkeonprem_BareMetalClusterLoadBalancer;

  // The bare metal cluster name.
  public Name?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  public MaintenanceConfig?: Gkeonprem_BareMetalClusterMaintenanceConfig;

  /*
Specifies the node access related settings for the bare metal user cluster.
Structure is documented below.
*/
  public NodeAccessConfig?: Gkeonprem_BareMetalClusterNodeAccessConfig;

  /*
Specifies the cluster storage configuration.
Structure is documented below.
*/
  public Storage?: Gkeonprem_BareMetalClusterStorage;

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
  public Annotations?: Map<string, string>;

  /*
Specifies the control plane configuration.
Structure is documented below.
*/
  public ControlPlane?: Gkeonprem_BareMetalClusterControlPlane;

  /*
Specifies the cluster proxy configuration.
Structure is documented below.
*/
  public Proxy?: Gkeonprem_BareMetalClusterProxy;

  /*
The Admin Cluster this Bare Metal User Cluster belongs to.
This is the full resource name of the Admin Cluster's hub membership.
*/
  public AdminClusterMembership?: string;

  // The time the cluster was created, in RFC3339 text format.
  public CreateTime?: string;

  // A human readable description of this Bare Metal User Cluster.
  public Description?: string;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
See [Anthos Fleets](https://cloud.google.com/anthos/multicluster-management/fleets) for
more details on Anthos multi-cluster capabilities using Fleets.
Structure is documented below.
*/
  public Fleets?: Array<Gkeonprem_BareMetalClusterFleet>;

  /*
OS environment related configurations.
Structure is documented below.
*/
  public OsEnvironmentConfig?: Gkeonprem_BareMetalClusterOsEnvironmentConfig;

  // If set, there are currently changes in flight to the Bare Metal User Cluster.
  public Reconciling?: boolean;

  /*
(Output)
The lifecycle state of the condition.
*/
  public State?: string;

  /*
This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
Allows clients to perform consistent read-modify-writes
through optimistic concurrency control.
*/
  public Etag?: string;

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
  public LocalName?: string;

  /*
Network configuration.
Structure is documented below.
*/
  public NetworkConfig?: Gkeonprem_BareMetalClusterNetworkConfig;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  public SecurityConfig?: Gkeonprem_BareMetalClusterSecurityConfig;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  public ValidationChecks?: Array<Gkeonprem_BareMetalClusterValidationCheck>;

  // A human readable description of this Bare Metal User Cluster.
  public BareMetalVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Specifies the User Cluster's observability infrastructure.
Structure is documented below.
*/
  public ClusterOperations?: Gkeonprem_BareMetalClusterClusterOperations;

  // The location of the resource.
  public Location?: string;

  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  public Statuses?: Array<Gkeonprem_BareMetalClusterStatus>;

  // The unique identifier of the Bare Metal User Cluster.
  public Uid?: string;

  // The time the cluster was last updated, in RFC3339 text format.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "OsEnvironmentConfig",
        "OS environment related configurations.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterOsEnvironmentConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "AdminClusterMembership",
        "The Admin Cluster this Bare Metal User Cluster belongs to.\nThis is the full resource name of the Admin Cluster's hub membership.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SecurityConfig",
        "Specifies the security related settings for the Bare Metal User Cluster.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterSecurityConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BinaryAuthorization",
        "Binary Authorization related configurations.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterBinaryAuthorization_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NodeConfig",
        "Specifies the workload node configurations.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterNodeConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ControlPlane",
        "Specifies the control plane configuration.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterControlPlane_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The bare metal cluster name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        "Annotations on the Bare Metal User Cluster.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NetworkConfig",
        "Network configuration.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterNetworkConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human readable description of this Bare Metal User Cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Proxy",
        "Specifies the cluster proxy configuration.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterProxy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "UpgradePolicy",
        "The cluster upgrade policy.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterUpgradePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NodeAccessConfig",
        "Specifies the node access related settings for the bare metal user cluster.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterNodeAccessConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LoadBalancer",
        "Specifies the load balancer configuration.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterLoadBalancer_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ClusterOperations",
        "Specifies the User Cluster's observability infrastructure.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterClusterOperations_GetTypes(),
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
        "Storage",
        "Specifies the cluster storage configuration.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterStorage_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "BareMetalVersion",
        "A human readable description of this Bare Metal User Cluster.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MaintenanceConfig",
        "Specifies the workload node configurations.\nStructure is documented below.",
        Gkeonprem_BareMetalClusterMaintenanceConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
