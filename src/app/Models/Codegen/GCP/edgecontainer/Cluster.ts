import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Edgecontainer_ClusterMaintenancePolicy,
  Edgecontainer_ClusterMaintenancePolicy_GetTypes,
} from "../types/Edgecontainer_ClusterMaintenancePolicy";
import {
  Edgecontainer_ClusterMaintenanceEvent,
  Edgecontainer_ClusterMaintenanceEvent_GetTypes,
} from "../types/Edgecontainer_ClusterMaintenanceEvent";
import {
  Edgecontainer_ClusterSystemAddonsConfig,
  Edgecontainer_ClusterSystemAddonsConfig_GetTypes,
} from "../types/Edgecontainer_ClusterSystemAddonsConfig";
import {
  Edgecontainer_ClusterControlPlane,
  Edgecontainer_ClusterControlPlane_GetTypes,
} from "../types/Edgecontainer_ClusterControlPlane";
import {
  Edgecontainer_ClusterControlPlaneEncryption,
  Edgecontainer_ClusterControlPlaneEncryption_GetTypes,
} from "../types/Edgecontainer_ClusterControlPlaneEncryption";
import {
  Edgecontainer_ClusterNetworking,
  Edgecontainer_ClusterNetworking_GetTypes,
} from "../types/Edgecontainer_ClusterNetworking";
import {
  Edgecontainer_ClusterAuthorization,
  Edgecontainer_ClusterAuthorization_GetTypes,
} from "../types/Edgecontainer_ClusterAuthorization";
import {
  Edgecontainer_ClusterFleet,
  Edgecontainer_ClusterFleet_GetTypes,
} from "../types/Edgecontainer_ClusterFleet";

export interface ClusterArgs {
  /*
Config that customers are allowed to define for GDCE system add-ons.
Structure is documented below.
*/
  SystemAddonsConfig?: Edgecontainer_ClusterSystemAddonsConfig;

  /*
The configuration of the cluster control plane.
Structure is documented below.
*/
  ControlPlane?: Edgecontainer_ClusterControlPlane;

  /*
Remote control plane disk encryption options. This field is only used when
enabling CMEK support.
Structure is documented below.
*/
  ControlPlaneEncryption?: Edgecontainer_ClusterControlPlaneEncryption;

  // Address pools for cluster data plane external load balancing.
  ExternalLoadBalancerIpv4AddressPools?: Array<string>;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
Structure is documented below.
*/
  Networking?: Edgecontainer_ClusterNetworking;

  // The target cluster version. For example: "1.5.0".
  TargetVersion?: string;

  /*
The default maximum number of pods per node used if a maximum value is not
specified explicitly for a node pool in this cluster. If unspecified, the
Kubernetes default value will be used.
*/
  DefaultMaxPodsPerNode?: number;

  /*
User-defined labels for the edgecloud cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The release channel a cluster is subscribed to.
Possible values are: `RELEASE_CHANNEL_UNSPECIFIED`, `NONE`, `REGULAR`.
*/
  ReleaseChannel?: string;

  // The GDCE cluster name.
  Name?: string;

  /*
RBAC policy that will be applied and managed by GEC.
Structure is documented below.
*/
  Authorization?: Edgecontainer_ClusterAuthorization;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
Structure is documented below.
*/
  Fleet?: Edgecontainer_ClusterFleet;

  // The location of the resource.
  Location?: string;

  /*
Cluster-wide maintenance policy configuration.
Structure is documented below.
*/
  MaintenancePolicy?: Edgecontainer_ClusterMaintenancePolicy;
}
export class Cluster extends Resource {
  /*
Config that customers are allowed to define for GDCE system add-ons.
Structure is documented below.
*/
  public SystemAddonsConfig?: Edgecontainer_ClusterSystemAddonsConfig;

  /*
(Output)
The time when the maintenance event message was updated.
*/
  public UpdateTime?: string;

  /*
RBAC policy that will be applied and managed by GEC.
Structure is documented below.
*/
  public Authorization?: Edgecontainer_ClusterAuthorization;

  // The control plane release version.
  public ControlPlaneVersion?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The location of the resource.
  public Location?: string;

  /*
All the maintenance events scheduled for the cluster, including the ones
ongoing, planned for the future and done in the past (up to 90 days).
Structure is documented below.
*/
  public MaintenanceEvents?: Array<Edgecontainer_ClusterMaintenanceEvent>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The configuration of the cluster control plane.
Structure is documented below.
*/
  public ControlPlane?: Edgecontainer_ClusterControlPlane;

  /*
The default maximum number of pods per node used if a maximum value is not
specified explicitly for a node pool in this cluster. If unspecified, the
Kubernetes default value will be used.
*/
  public DefaultMaxPodsPerNode?: number;

  /*
User-defined labels for the edgecloud cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The lowest release version among all worker nodes. This field can be empty
if the cluster does not have any worker nodes.
*/
  public NodeVersion?: string;

  // The port number of the Kubernetes API server.
  public Port?: number;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The PEM-encoded public certificate of the cluster's CA.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public ClusterCaCertificate?: string;

  /*
(Output)
The time when the maintenance event request was created.
*/
  public CreateTime?: string;

  // The IP address of the Kubernetes API server.
  public Endpoint?: string;

  // Address pools for cluster data plane external load balancing.
  public ExternalLoadBalancerIpv4AddressPools?: Array<string>;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
Structure is documented below.
*/
  public Fleet?: Edgecontainer_ClusterFleet;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
Structure is documented below.
*/
  public Networking?: Edgecontainer_ClusterNetworking;

  // Indicates the status of the cluster.
  public Status?: string;

  // The target cluster version. For example: "1.5.0".
  public TargetVersion?: string;

  /*
Remote control plane disk encryption options. This field is only used when
enabling CMEK support.
Structure is documented below.
*/
  public ControlPlaneEncryption?: Edgecontainer_ClusterControlPlaneEncryption;

  /*
Cluster-wide maintenance policy configuration.
Structure is documented below.
*/
  public MaintenancePolicy?: Edgecontainer_ClusterMaintenancePolicy;

  // The GDCE cluster name.
  public Name?: string;

  /*
The release channel a cluster is subscribed to.
Possible values are: `RELEASE_CHANNEL_UNSPECIFIED`, `NONE`, `REGULAR`.
*/
  public ReleaseChannel?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "ExternalLoadBalancerIpv4AddressPools",
        "Address pools for cluster data plane external load balancing.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Networking",
        "Fleet related configuration.\nFleets are a Google Cloud concept for logically organizing clusters,\nletting you use and manage multi-cluster capabilities and apply\nconsistent policies across your systems.\nStructure is documented below.",
        Edgecontainer_ClusterNetworking_GetTypes(),
        true,
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
        "MaintenancePolicy",
        "Cluster-wide maintenance policy configuration.\nStructure is documented below.",
        Edgecontainer_ClusterMaintenancePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ControlPlane",
        "The configuration of the cluster control plane.\nStructure is documented below.",
        Edgecontainer_ClusterControlPlane_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ReleaseChannel",
        "The release channel a cluster is subscribed to.\nPossible values are: `RELEASE_CHANNEL_UNSPECIFIED`, `NONE`, `REGULAR`.",
        [],
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
        "Fleet",
        "Fleet related configuration.\nFleets are a Google Cloud concept for logically organizing clusters,\nletting you use and manage multi-cluster capabilities and apply\nconsistent policies across your systems.\nStructure is documented below.",
        Edgecontainer_ClusterFleet_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "User-defined labels for the edgecloud cluster.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ControlPlaneEncryption",
        "Remote control plane disk encryption options. This field is only used when\nenabling CMEK support.\nStructure is documented below.",
        Edgecontainer_ClusterControlPlaneEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "TargetVersion",
        'The target cluster version. For example: "1.5.0".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "DefaultMaxPodsPerNode",
        "The default maximum number of pods per node used if a maximum value is not\nspecified explicitly for a node pool in this cluster. If unspecified, the\nKubernetes default value will be used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The GDCE cluster name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Authorization",
        "RBAC policy that will be applied and managed by GEC.\nStructure is documented below.",
        Edgecontainer_ClusterAuthorization_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SystemAddonsConfig",
        "Config that customers are allowed to define for GDCE system add-ons.\nStructure is documented below.",
        Edgecontainer_ClusterSystemAddonsConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
