import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ClusterNetworking } from "../types/ClusterNetworking";
import { ClusterSystemAddonsConfig } from "../types/ClusterSystemAddonsConfig";
import { ClusterMaintenanceEvent } from "../types/ClusterMaintenanceEvent";
import { ClusterMaintenancePolicy } from "../types/ClusterMaintenancePolicy";
import { ClusterControlPlane } from "../types/ClusterControlPlane";
import { ClusterControlPlaneEncryption } from "../types/ClusterControlPlaneEncryption";
import { ClusterFleet } from "../types/ClusterFleet";
import { ClusterAuthorization } from "../types/ClusterAuthorization";

export interface ClusterArgs {
  // Address pools for cluster data plane external load balancing.
  ExternalLoadBalancerIpv4AddressPools?: Array<string>;

  // The location of the resource.
  Location?: string;

  /*
Cluster-wide maintenance policy configuration.
Structure is documented below.
*/
  MaintenancePolicy?: ClusterMaintenancePolicy;

  // The GDCE cluster name.
  Name?: string;

  // The target cluster version. For example: "1.5.0".
  TargetVersion?: string;

  /*
The configuration of the cluster control plane.
Structure is documented below.
*/
  ControlPlane?: ClusterControlPlane;

  /*
Remote control plane disk encryption options. This field is only used when
enabling CMEK support.
Structure is documented below.
*/
  ControlPlaneEncryption?: ClusterControlPlaneEncryption;

  /*
The default maximum number of pods per node used if a maximum value is not
specified explicitly for a node pool in this cluster. If unspecified, the
Kubernetes default value will be used.
*/
  DefaultMaxPodsPerNode?: number;

  /*
The release channel a cluster is subscribed to.
Possible values are: `RELEASE_CHANNEL_UNSPECIFIED`, `NONE`, `REGULAR`.
*/
  ReleaseChannel?: string;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
Structure is documented below.
*/
  Fleet?: ClusterFleet;

  /*
RBAC policy that will be applied and managed by GEC.
Structure is documented below.
*/
  Authorization?: ClusterAuthorization;

  /*
User-defined labels for the edgecloud cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
Structure is documented below.
*/
  Networking?: ClusterNetworking;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Config that customers are allowed to define for GDCE system add-ons.
Structure is documented below.
*/
  SystemAddonsConfig?: ClusterSystemAddonsConfig;
}
export class Cluster extends Resource {
  /*
The PEM-encoded public certificate of the cluster's CA.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public ClusterCaCertificate?: string;

  /*
The configuration of the cluster control plane.
Structure is documented below.
*/
  public ControlPlane?: ClusterControlPlane;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The IP address of the Kubernetes API server.
  public Endpoint?: string;

  /*
User-defined labels for the edgecloud cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The location of the resource.
  public Location?: string;

  // The GDCE cluster name.
  public Name?: string;

  // The port number of the Kubernetes API server.
  public Port?: number;

  /*
RBAC policy that will be applied and managed by GEC.
Structure is documented below.
*/
  public Authorization?: ClusterAuthorization;

  // The control plane release version.
  public ControlPlaneVersion?: string;

  /*
The lowest release version among all worker nodes. This field can be empty
if the cluster does not have any worker nodes.
*/
  public NodeVersion?: string;

  // The target cluster version. For example: "1.5.0".
  public TargetVersion?: string;

  /*
Remote control plane disk encryption options. This field is only used when
enabling CMEK support.
Structure is documented below.
*/
  public ControlPlaneEncryption?: ClusterControlPlaneEncryption;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
Structure is documented below.
*/
  public Fleet?: ClusterFleet;

  /*
All the maintenance events scheduled for the cluster, including the ones
ongoing, planned for the future and done in the past (up to 90 days).
Structure is documented below.
*/
  public MaintenanceEvents?: Array<ClusterMaintenanceEvent>;

  /*
Cluster-wide maintenance policy configuration.
Structure is documented below.
*/
  public MaintenancePolicy?: ClusterMaintenancePolicy;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
Structure is documented below.
*/
  public Networking?: ClusterNetworking;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The release channel a cluster is subscribed to.
Possible values are: `RELEASE_CHANNEL_UNSPECIFIED`, `NONE`, `REGULAR`.
*/
  public ReleaseChannel?: string;

  // Indicates the status of the cluster.
  public Status?: string;

  /*
(Output)
The time when the maintenance event request was created.
*/
  public CreateTime?: string;

  /*
The default maximum number of pods per node used if a maximum value is not
specified explicitly for a node pool in this cluster. If unspecified, the
Kubernetes default value will be used.
*/
  public DefaultMaxPodsPerNode?: number;

  // Address pools for cluster data plane external load balancing.
  public ExternalLoadBalancerIpv4AddressPools?: Array<string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Config that customers are allowed to define for GDCE system add-ons.
Structure is documented below.
*/
  public SystemAddonsConfig?: ClusterSystemAddonsConfig;

  /*
(Output)
The time when the maintenance event message was updated.
*/
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "ExternalLoadBalancerIpv4AddressPools",
        "Address pools for cluster data plane external load balancing.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "DefaultMaxPodsPerNode",
        "The default maximum number of pods per node used if a maximum value is not\nspecified explicitly for a node pool in this cluster. If unspecified, the\nKubernetes default value will be used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReleaseChannel",
        "The release channel a cluster is subscribed to.\nPossible values are: `RELEASE_CHANNEL_UNSPECIFIED`, `NONE`, `REGULAR`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaintenancePolicy",
        "Cluster-wide maintenance policy configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(InputType.String, "Name", "The GDCE cluster name."),
      new DynamicUIProps(
        InputType.String,
        "ControlPlaneEncryption",
        "Remote control plane disk encryption options. This field is only used when\nenabling CMEK support.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Fleet",
        "Fleet related configuration.\nFleets are a Google Cloud concept for logically organizing clusters,\nletting you use and manage multi-cluster capabilities and apply\nconsistent policies across your systems.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SystemAddonsConfig",
        "Config that customers are allowed to define for GDCE system add-ons.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ControlPlane",
        "The configuration of the cluster control plane.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "User-defined labels for the edgecloud cluster.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Networking",
        "Fleet related configuration.\nFleets are a Google Cloud concept for logically organizing clusters,\nletting you use and manage multi-cluster capabilities and apply\nconsistent policies across your systems.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TargetVersion",
        'The target cluster version. For example: "1.5.0".',
      ),
      new DynamicUIProps(
        InputType.String,
        "Authorization",
        "RBAC policy that will be applied and managed by GEC.\nStructure is documented below.",
      ),
    ];
  }
}
