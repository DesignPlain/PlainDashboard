import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BareMetalClusterProxy } from "../types/BareMetalClusterProxy";
import { BareMetalClusterUpgradePolicy } from "../types/BareMetalClusterUpgradePolicy";
import { BareMetalClusterBinaryAuthorization } from "../types/BareMetalClusterBinaryAuthorization";
import { BareMetalClusterClusterOperations } from "../types/BareMetalClusterClusterOperations";
import { BareMetalClusterStatus } from "../types/BareMetalClusterStatus";
import { BareMetalClusterNetworkConfig } from "../types/BareMetalClusterNetworkConfig";
import { BareMetalClusterControlPlane } from "../types/BareMetalClusterControlPlane";
import { BareMetalClusterNodeConfig } from "../types/BareMetalClusterNodeConfig";
import { BareMetalClusterStorage } from "../types/BareMetalClusterStorage";
import { BareMetalClusterMaintenanceConfig } from "../types/BareMetalClusterMaintenanceConfig";
import { BareMetalClusterOsEnvironmentConfig } from "../types/BareMetalClusterOsEnvironmentConfig";
import { BareMetalClusterFleet } from "../types/BareMetalClusterFleet";
import { BareMetalClusterValidationCheck } from "../types/BareMetalClusterValidationCheck";
import { BareMetalClusterSecurityConfig } from "../types/BareMetalClusterSecurityConfig";
import { BareMetalClusterLoadBalancer } from "../types/BareMetalClusterLoadBalancer";
import { BareMetalClusterNodeAccessConfig } from "../types/BareMetalClusterNodeAccessConfig";

export interface BareMetalClusterArgs {
  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  SecurityConfig?: BareMetalClusterSecurityConfig;

  /*
Specifies the control plane configuration.
Structure is documented below.
*/
  ControlPlane?: BareMetalClusterControlPlane;

  // A human readable description of this Bare Metal User Cluster.
  Description?: string;

  /*
Specifies the node access related settings for the bare metal user cluster.
Structure is documented below.
*/
  NodeAccessConfig?: BareMetalClusterNodeAccessConfig;

  // The bare metal cluster name.
  Name?: string;

  /*
Network configuration.
Structure is documented below.
*/
  NetworkConfig?: BareMetalClusterNetworkConfig;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  NodeConfig?: BareMetalClusterNodeConfig;

  /*
Specifies the cluster proxy configuration.
Structure is documented below.
*/
  Proxy?: BareMetalClusterProxy;

  /*
Specifies the cluster storage configuration.
Structure is documented below.
*/
  Storage?: BareMetalClusterStorage;

  /*
The Admin Cluster this Bare Metal User Cluster belongs to.
This is the full resource name of the Admin Cluster's hub membership.
*/
  AdminClusterMembership?: string;

  // The location of the resource.
  Location?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  MaintenanceConfig?: BareMetalClusterMaintenanceConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The cluster upgrade policy.
Structure is documented below.
*/
  UpgradePolicy?: BareMetalClusterUpgradePolicy;

  // A human readable description of this Bare Metal User Cluster.
  BareMetalVersion?: string;

  /*
Specifies the load balancer configuration.
Structure is documented below.
*/
  LoadBalancer?: BareMetalClusterLoadBalancer;

  /*
OS environment related configurations.
Structure is documented below.
*/
  OsEnvironmentConfig?: BareMetalClusterOsEnvironmentConfig;

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

  /*
Binary Authorization related configurations.
Structure is documented below.
*/
  BinaryAuthorization?: BareMetalClusterBinaryAuthorization;

  /*
Specifies the User Cluster's observability infrastructure.
Structure is documented below.
*/
  ClusterOperations?: BareMetalClusterClusterOperations;
}
export class BareMetalCluster extends Resource {
  /*
Specifies the control plane configuration.
Structure is documented below.
*/
  public ControlPlane?: BareMetalClusterControlPlane;

  // The time the cluster was created, in RFC3339 text format.
  public CreateTime?: string;

  /*
Specifies the load balancer configuration.
Structure is documented below.
*/
  public LoadBalancer?: BareMetalClusterLoadBalancer;

  // The bare metal cluster name.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Specifies the cluster storage configuration.
Structure is documented below.
*/
  public Storage?: BareMetalClusterStorage;

  /*
The cluster upgrade policy.
Structure is documented below.
*/
  public UpgradePolicy?: BareMetalClusterUpgradePolicy;

  /*
Specifies the User Cluster's observability infrastructure.
Structure is documented below.
*/
  public ClusterOperations?: BareMetalClusterClusterOperations;

  // The time the cluster was deleted, in RFC3339 text format.
  public DeleteTime?: string;

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
  public Fleets?: Array<BareMetalClusterFleet>;

  /*
Specifies the node access related settings for the bare metal user cluster.
Structure is documented below.
*/
  public NodeAccessConfig?: BareMetalClusterNodeAccessConfig;

  /*
OS environment related configurations.
Structure is documented below.
*/
  public OsEnvironmentConfig?: BareMetalClusterOsEnvironmentConfig;

  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  public Statuses?: Array<BareMetalClusterStatus>;

  /*
Binary Authorization related configurations.
Structure is documented below.
*/
  public BinaryAuthorization?: BareMetalClusterBinaryAuthorization;

  /*
This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
Allows clients to perform consistent read-modify-writes
through optimistic concurrency control.
*/
  public Etag?: string;

  // The location of the resource.
  public Location?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  public NodeConfig?: BareMetalClusterNodeConfig;

  // A human readable description of this Bare Metal User Cluster.
  public BareMetalVersion?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

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
Specifies the workload node configurations.
Structure is documented below.
*/
  public MaintenanceConfig?: BareMetalClusterMaintenanceConfig;

  // The time the cluster was last updated, in RFC3339 text format.
  public UpdateTime?: string;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  public ValidationChecks?: Array<BareMetalClusterValidationCheck>;

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

  // The IP address name of Bare Metal User Cluster's API server.
  public Endpoint?: string;

  /*
Specifies the cluster proxy configuration.
Structure is documented below.
*/
  public Proxy?: BareMetalClusterProxy;

  // If set, there are currently changes in flight to the Bare Metal User Cluster.
  public Reconciling?: boolean;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  public SecurityConfig?: BareMetalClusterSecurityConfig;

  /*
(Output)
The lifecycle state of the condition.
*/
  public State?: string;

  // The unique identifier of the Bare Metal User Cluster.
  public Uid?: string;

  /*
The Admin Cluster this Bare Metal User Cluster belongs to.
This is the full resource name of the Admin Cluster's hub membership.
*/
  public AdminClusterMembership?: string;

  /*
Network configuration.
Structure is documented below.
*/
  public NetworkConfig?: BareMetalClusterNetworkConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AdminClusterMembership",
        "The Admin Cluster this Bare Metal User Cluster belongs to.\nThis is the full resource name of the Admin Cluster's hub membership.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Annotations on the Bare Metal User Cluster.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ClusterOperations",
        "Specifies the User Cluster's observability infrastructure.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SecurityConfig",
        "Specifies the security related settings for the Bare Metal User Cluster.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeAccessConfig",
        "Specifies the node access related settings for the bare metal user cluster.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkConfig",
        "Network configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeConfig",
        "Specifies the workload node configurations.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LoadBalancer",
        "Specifies the load balancer configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OsEnvironmentConfig",
        "OS environment related configurations.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ControlPlane",
        "Specifies the control plane configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BinaryAuthorization",
        "Binary Authorization related configurations.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Storage",
        "Specifies the cluster storage configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "UpgradePolicy",
        "The cluster upgrade policy.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BareMetalVersion",
        "A human readable description of this Bare Metal User Cluster.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The bare metal cluster name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Proxy",
        "Specifies the cluster proxy configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaintenanceConfig",
        "Specifies the workload node configurations.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human readable description of this Bare Metal User Cluster.",
      ),
    ];
  }
}
