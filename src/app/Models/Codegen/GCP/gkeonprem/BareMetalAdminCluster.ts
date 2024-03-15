import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BareMetalAdminClusterValidationCheck } from "../types/BareMetalAdminClusterValidationCheck";
import { BareMetalAdminClusterNodeConfig } from "../types/BareMetalAdminClusterNodeConfig";
import { BareMetalAdminClusterStorage } from "../types/BareMetalAdminClusterStorage";
import { BareMetalAdminClusterClusterOperations } from "../types/BareMetalAdminClusterClusterOperations";
import { BareMetalAdminClusterControlPlane } from "../types/BareMetalAdminClusterControlPlane";
import { BareMetalAdminClusterMaintenanceConfig } from "../types/BareMetalAdminClusterMaintenanceConfig";
import { BareMetalAdminClusterProxy } from "../types/BareMetalAdminClusterProxy";
import { BareMetalAdminClusterStatus } from "../types/BareMetalAdminClusterStatus";
import { BareMetalAdminClusterFleet } from "../types/BareMetalAdminClusterFleet";
import { BareMetalAdminClusterNetworkConfig } from "../types/BareMetalAdminClusterNetworkConfig";
import { BareMetalAdminClusterNodeAccessConfig } from "../types/BareMetalAdminClusterNodeAccessConfig";
import { BareMetalAdminClusterSecurityConfig } from "../types/BareMetalAdminClusterSecurityConfig";
import { BareMetalAdminClusterLoadBalancer } from "../types/BareMetalAdminClusterLoadBalancer";

export interface BareMetalAdminClusterArgs {
  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  NodeConfig?: BareMetalAdminClusterNodeConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Specifies the cluster storage configuration.
Structure is documented below.
*/
  Storage?: BareMetalAdminClusterStorage;

  /*
Network configuration.
Structure is documented below.
*/
  NetworkConfig?: BareMetalAdminClusterNetworkConfig;

  /*
Specifies the node access related settings for the bare metal user cluster.
Structure is documented below.
*/
  NodeAccessConfig?: BareMetalAdminClusterNodeAccessConfig;

  // A human readable description of this Bare Metal Admin Cluster.
  BareMetalVersion?: string;

  // The bare metal admin cluster name.
  Name?: string;

  /*
The location of the resource.


- - -
*/
  Location?: string;

  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  SecurityConfig?: BareMetalAdminClusterSecurityConfig;

  /*
Specifies the Admin Cluster's observability infrastructure.
Structure is documented below.
*/
  ClusterOperations?: BareMetalAdminClusterClusterOperations;

  /*
Specifies the load balancer configuration.
Structure is documented below.
*/
  LoadBalancer?: BareMetalAdminClusterLoadBalancer;

  // A human readable description of this Bare Metal Admin Cluster.
  Description?: string;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  MaintenanceConfig?: BareMetalAdminClusterMaintenanceConfig;

  /*
Specifies the cluster proxy configuration.
Structure is documented below.
*/
  Proxy?: BareMetalAdminClusterProxy;

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
  ControlPlane?: BareMetalAdminClusterControlPlane;
}
export class BareMetalAdminCluster extends Resource {
  /*
Specifies the security related settings for the Bare Metal User Cluster.
Structure is documented below.
*/
  public SecurityConfig?: BareMetalAdminClusterSecurityConfig;

  /*
Specifies the cluster storage configuration.
Structure is documented below.
*/
  public Storage?: BareMetalAdminClusterStorage;

  // The unique identifier of the Bare Metal Admin Cluster.
  public Uid?: string;

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

  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  public Statuses?: Array<BareMetalAdminClusterStatus>;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
See [Anthos Fleets](https://cloud.google.com/anthos/multicluster-management/fleets) for
more details on Anthos multi-cluster capabilities using Fleets.
Structure is documented below.
*/
  public Fleets?: Array<BareMetalAdminClusterFleet>;

  /*
Specifies the load balancer configuration.
Structure is documented below.
*/
  public LoadBalancer?: BareMetalAdminClusterLoadBalancer;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  public NodeConfig?: BareMetalAdminClusterNodeConfig;

  // A human readable description of this Bare Metal Admin Cluster.
  public BareMetalVersion?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

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

  // The time the cluster was created, in RFC3339 text format.
  public CreateTime?: string;

  // The time the cluster was last updated, in RFC3339 text format.
  public UpdateTime?: string;

  /*
Specifies the control plane configuration.
Structure is documented below.
*/
  public ControlPlane?: BareMetalAdminClusterControlPlane;

  /*
Specifies the cluster proxy configuration.
Structure is documented below.
*/
  public Proxy?: BareMetalAdminClusterProxy;

  // If set, there are currently changes in flight to the Bare Metal Admin Cluster.
  public Reconciling?: boolean;

  /*
Specifies the security related settings for the Bare Metal Admin Cluster.
Structure is documented below.
*/
  public ValidationChecks?: Array<BareMetalAdminClusterValidationCheck>;

  /*
Specifies the workload node configurations.
Structure is documented below.
*/
  public MaintenanceConfig?: BareMetalAdminClusterMaintenanceConfig;

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

  // The bare metal admin cluster name.
  public Name?: string;

  /*
Network configuration.
Structure is documented below.
*/
  public NetworkConfig?: BareMetalAdminClusterNetworkConfig;

  /*
Specifies the node access related settings for the bare metal user cluster.
Structure is documented below.
*/
  public NodeAccessConfig?: BareMetalAdminClusterNodeAccessConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The time the cluster was deleted, in RFC3339 text format.
  public DeleteTime?: string;

  // The IP address name of Bare Metal Admin Cluster's API server.
  public Endpoint?: string;

  /*
(Output)
The lifecycle state of the condition.
*/
  public State?: string;

  /*
Specifies the Admin Cluster's observability infrastructure.
Structure is documented below.
*/
  public ClusterOperations?: BareMetalAdminClusterClusterOperations;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The bare metal admin cluster name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ClusterOperations",
        "Specifies the Admin Cluster's observability infrastructure.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LoadBalancer",
        "Specifies the load balancer configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Storage",
        "Specifies the cluster storage configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkConfig",
        "Network configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human readable description of this Bare Metal Admin Cluster.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ControlPlane",
        "Specifies the control plane configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SecurityConfig",
        "Specifies the security related settings for the Bare Metal User Cluster.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaintenanceConfig",
        "Specifies the workload node configurations.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Annotations on the Bare Metal Admin Cluster.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Proxy",
        "Specifies the cluster proxy configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeConfig",
        "Specifies the workload node configurations.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeAccessConfig",
        "Specifies the node access related settings for the bare metal user cluster.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BareMetalVersion",
        "A human readable description of this Bare Metal Admin Cluster.",
      ),
    ];
  }
}
