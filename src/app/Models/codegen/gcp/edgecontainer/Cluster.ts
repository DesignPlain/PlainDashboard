import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  edgecontainer_ClusterFleet,
  edgecontainer_ClusterFleet_GetTypes,
} from "../types/edgecontainer_ClusterFleet";
import {
  edgecontainer_ClusterAuthorization,
  edgecontainer_ClusterAuthorization_GetTypes,
} from "../types/edgecontainer_ClusterAuthorization";
import {
  edgecontainer_ClusterMaintenanceEvent,
  edgecontainer_ClusterMaintenanceEvent_GetTypes,
} from "../types/edgecontainer_ClusterMaintenanceEvent";
import {
  edgecontainer_ClusterControlPlaneEncryption,
  edgecontainer_ClusterControlPlaneEncryption_GetTypes,
} from "../types/edgecontainer_ClusterControlPlaneEncryption";
import {
  edgecontainer_ClusterMaintenancePolicy,
  edgecontainer_ClusterMaintenancePolicy_GetTypes,
} from "../types/edgecontainer_ClusterMaintenancePolicy";
import {
  edgecontainer_ClusterSystemAddonsConfig,
  edgecontainer_ClusterSystemAddonsConfig_GetTypes,
} from "../types/edgecontainer_ClusterSystemAddonsConfig";
import {
  edgecontainer_ClusterControlPlane,
  edgecontainer_ClusterControlPlane_GetTypes,
} from "../types/edgecontainer_ClusterControlPlane";
import {
  edgecontainer_ClusterNetworking,
  edgecontainer_ClusterNetworking_GetTypes,
} from "../types/edgecontainer_ClusterNetworking";

export interface ClusterArgs {
  /*
The release channel a cluster is subscribed to.
Possible values are: `RELEASE_CHANNEL_UNSPECIFIED`, `NONE`, `REGULAR`.
*/
  releaseChannel?: string;

  // Address pools for cluster data plane external load balancing.
  externalLoadBalancerIpv4AddressPools?: Array<string>;

  /*
Remote control plane disk encryption options. This field is only used when
enabling CMEK support.
Structure is documented below.
*/
  controlPlaneEncryption?: edgecontainer_ClusterControlPlaneEncryption;

  /*
Cluster-wide maintenance policy configuration.
Structure is documented below.
*/
  maintenancePolicy?: edgecontainer_ClusterMaintenancePolicy;

  /*
Config that customers are allowed to define for GDCE system add-ons.
Structure is documented below.
*/
  systemAddonsConfig?: edgecontainer_ClusterSystemAddonsConfig;

  // The target cluster version. For example: "1.5.0".
  targetVersion?: string;

  /*
The configuration of the cluster control plane.
Structure is documented below.
*/
  controlPlane?: edgecontainer_ClusterControlPlane;

  // The GDCE cluster name.
  name?: string;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
Structure is documented below.
*/
  networking?: edgecontainer_ClusterNetworking;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
Structure is documented below.
*/
  fleet?: edgecontainer_ClusterFleet;

  /*
The default maximum number of pods per node used if a maximum value is not
specified explicitly for a node pool in this cluster. If unspecified, the
Kubernetes default value will be used.
*/
  defaultMaxPodsPerNode?: number;

  /*
User-defined labels for the edgecloud cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location of the resource.
  location?: string;

  /*
RBAC policy that will be applied and managed by GEC.
Structure is documented below.
*/
  authorization?: edgecontainer_ClusterAuthorization;
}
export class Cluster extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Config that customers are allowed to define for GDCE system add-ons.
Structure is documented below.
*/
  public systemAddonsConfig?: edgecontainer_ClusterSystemAddonsConfig;

  /*
(Output)
The time when the maintenance event message was updated.
*/
  public updateTime?: string;

  // The control plane release version.
  public controlPlaneVersion?: string;

  // The location of the resource.
  public location?: string;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
Structure is documented below.
*/
  public networking?: edgecontainer_ClusterNetworking;

  /*
User-defined labels for the edgecloud cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Cluster-wide maintenance policy configuration.
Structure is documented below.
*/
  public maintenancePolicy?: edgecontainer_ClusterMaintenancePolicy;

  /*
The configuration of the cluster control plane.
Structure is documented below.
*/
  public controlPlane?: edgecontainer_ClusterControlPlane;

  /*
Remote control plane disk encryption options. This field is only used when
enabling CMEK support.
Structure is documented below.
*/
  public controlPlaneEncryption?: edgecontainer_ClusterControlPlaneEncryption;

  /*
The default maximum number of pods per node used if a maximum value is not
specified explicitly for a node pool in this cluster. If unspecified, the
Kubernetes default value will be used.
*/
  public defaultMaxPodsPerNode?: number;

  // The IP address of the Kubernetes API server.
  public endpoint?: string;

  // Address pools for cluster data plane external load balancing.
  public externalLoadBalancerIpv4AddressPools?: Array<string>;

  /*
Fleet related configuration.
Fleets are a Google Cloud concept for logically organizing clusters,
letting you use and manage multi-cluster capabilities and apply
consistent policies across your systems.
Structure is documented below.
*/
  public fleet?: edgecontainer_ClusterFleet;

  /*
All the maintenance events scheduled for the cluster, including the ones
ongoing, planned for the future and done in the past (up to 90 days).
Structure is documented below.
*/
  public maintenanceEvents?: Array<edgecontainer_ClusterMaintenanceEvent>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
RBAC policy that will be applied and managed by GEC.
Structure is documented below.
*/
  public authorization?: edgecontainer_ClusterAuthorization;

  /*
(Output)
The time when the maintenance event request was created.
*/
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The release channel a cluster is subscribed to.
Possible values are: `RELEASE_CHANNEL_UNSPECIFIED`, `NONE`, `REGULAR`.
*/
  public releaseChannel?: string;

  // The port number of the Kubernetes API server.
  public port?: number;

  // Indicates the status of the cluster.
  public status?: string;

  // The target cluster version. For example: "1.5.0".
  public targetVersion?: string;

  /*
The PEM-encoded public certificate of the cluster's CA.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public clusterCaCertificate?: string;

  // The GDCE cluster name.
  public name?: string;

  /*
The lowest release version among all worker nodes. This field can be empty
if the cluster does not have any worker nodes.
*/
  public nodeVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "externalLoadBalancerIpv4AddressPools",
        "Address pools for cluster data plane external load balancing.",
        () => InputType_String_GetTypes(),
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
        "authorization",
        "RBAC policy that will be applied and managed by GEC.\nStructure is documented below.",
        () => edgecontainer_ClusterAuthorization_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "releaseChannel",
        "The release channel a cluster is subscribed to.\nPossible values are: `RELEASE_CHANNEL_UNSPECIFIED`, `NONE`, `REGULAR`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "systemAddonsConfig",
        "Config that customers are allowed to define for GDCE system add-ons.\nStructure is documented below.",
        () => edgecontainer_ClusterSystemAddonsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetVersion",
        'The target cluster version. For example: "1.5.0".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The GDCE cluster name.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "fleet",
        "Fleet related configuration.\nFleets are a Google Cloud concept for logically organizing clusters,\nletting you use and manage multi-cluster capabilities and apply\nconsistent policies across your systems.\nStructure is documented below.",
        () => edgecontainer_ClusterFleet_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "User-defined labels for the edgecloud cluster.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "controlPlane",
        "The configuration of the cluster control plane.\nStructure is documented below.",
        () => edgecontainer_ClusterControlPlane_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "controlPlaneEncryption",
        "Remote control plane disk encryption options. This field is only used when\nenabling CMEK support.\nStructure is documented below.",
        () => edgecontainer_ClusterControlPlaneEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "maintenancePolicy",
        "Cluster-wide maintenance policy configuration.\nStructure is documented below.",
        () => edgecontainer_ClusterMaintenancePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networking",
        "Fleet related configuration.\nFleets are a Google Cloud concept for logically organizing clusters,\nletting you use and manage multi-cluster capabilities and apply\nconsistent policies across your systems.\nStructure is documented below.",
        () => edgecontainer_ClusterNetworking_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "defaultMaxPodsPerNode",
        "The default maximum number of pods per node used if a maximum value is not\nspecified explicitly for a node pool in this cluster. If unspecified, the\nKubernetes default value will be used.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the resource.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
