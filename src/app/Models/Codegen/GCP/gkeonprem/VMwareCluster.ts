import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareClusterAntiAffinityGroups,
  Gkeonprem_VMwareClusterAntiAffinityGroups_GetTypes,
} from "../types/Gkeonprem_VMwareClusterAntiAffinityGroups";
import {
  Gkeonprem_VMwareClusterControlPlaneNode,
  Gkeonprem_VMwareClusterControlPlaneNode_GetTypes,
} from "../types/Gkeonprem_VMwareClusterControlPlaneNode";
import {
  Gkeonprem_VMwareClusterAutoRepairConfig,
  Gkeonprem_VMwareClusterAutoRepairConfig_GetTypes,
} from "../types/Gkeonprem_VMwareClusterAutoRepairConfig";
import {
  Gkeonprem_VMwareClusterDataplaneV2,
  Gkeonprem_VMwareClusterDataplaneV2_GetTypes,
} from "../types/Gkeonprem_VMwareClusterDataplaneV2";
import {
  Gkeonprem_VMwareClusterFleet,
  Gkeonprem_VMwareClusterFleet_GetTypes,
} from "../types/Gkeonprem_VMwareClusterFleet";
import {
  Gkeonprem_VMwareClusterLoadBalancer,
  Gkeonprem_VMwareClusterLoadBalancer_GetTypes,
} from "../types/Gkeonprem_VMwareClusterLoadBalancer";
import {
  Gkeonprem_VMwareClusterNetworkConfig,
  Gkeonprem_VMwareClusterNetworkConfig_GetTypes,
} from "../types/Gkeonprem_VMwareClusterNetworkConfig";
import {
  Gkeonprem_VMwareClusterStorage,
  Gkeonprem_VMwareClusterStorage_GetTypes,
} from "../types/Gkeonprem_VMwareClusterStorage";
import {
  Gkeonprem_VMwareClusterUpgradePolicy,
  Gkeonprem_VMwareClusterUpgradePolicy_GetTypes,
} from "../types/Gkeonprem_VMwareClusterUpgradePolicy";
import {
  Gkeonprem_VMwareClusterAuthorization,
  Gkeonprem_VMwareClusterAuthorization_GetTypes,
} from "../types/Gkeonprem_VMwareClusterAuthorization";
import {
  Gkeonprem_VMwareClusterVcenter,
  Gkeonprem_VMwareClusterVcenter_GetTypes,
} from "../types/Gkeonprem_VMwareClusterVcenter";
import {
  Gkeonprem_VMwareClusterStatus,
  Gkeonprem_VMwareClusterStatus_GetTypes,
} from "../types/Gkeonprem_VMwareClusterStatus";
import {
  Gkeonprem_VMwareClusterValidationCheck,
  Gkeonprem_VMwareClusterValidationCheck_GetTypes,
} from "../types/Gkeonprem_VMwareClusterValidationCheck";

export interface VMwareClusterArgs {
  // Enable control plane V2. Default to false.
  EnableControlPlaneV2?: boolean;

  // The location of the resource.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
AAGConfig specifies whether to spread VMware User Cluster nodes across at
least three physical hosts in the datacenter.
Structure is documented below.
*/
  AntiAffinityGroups?: Gkeonprem_VMwareClusterAntiAffinityGroups;

  // A human readable description of this VMware User Cluster.
  Description?: string;

  /*
Load Balancer configuration.
Structure is documented below.
*/
  LoadBalancer?: Gkeonprem_VMwareClusterLoadBalancer;

  /*
The VMware User Cluster network configuration.
Structure is documented below.
*/
  NetworkConfig?: Gkeonprem_VMwareClusterNetworkConfig;

  // The Anthos clusters on the VMware version for your user cluster.
  OnPremVersion?: string;

  /*
Storage configuration.
Structure is documented below.
*/
  Storage?: Gkeonprem_VMwareClusterStorage;

  /*
Specifies upgrade policy for the cluster.
Structure is documented below.
*/
  UpgradePolicy?: Gkeonprem_VMwareClusterUpgradePolicy;

  /*
Annotations on the VMware User Cluster.
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
RBAC policy that will be applied and managed by GKE On-Prem.
Structure is documented below.
*/
  Authorization?: Gkeonprem_VMwareClusterAuthorization;

  /*
VMware User Cluster control plane nodes must have either 1 or 3 replicas.
Structure is documented below.
*/
  ControlPlaneNode?: Gkeonprem_VMwareClusterControlPlaneNode;

  // The VMware cluster name.
  Name?: string;

  // Enable VM tracking.
  VmTrackingEnabled?: boolean;

  /*
The admin cluster this VMware User Cluster belongs to.
This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.
*/
  AdminClusterMembership?: string;

  /*
Configuration for auto repairing.
Structure is documented below.
*/
  AutoRepairConfig?: Gkeonprem_VMwareClusterAutoRepairConfig;

  /*
VmwareDataplaneV2Config specifies configuration for Dataplane V2.
Structure is documented below.
*/
  DataplaneV2?: Gkeonprem_VMwareClusterDataplaneV2;

  /*
VmwareVCenterConfig specifies vCenter config for the user cluster.
Inherited from the admin cluster.
Structure is documented below.
*/
  Vcenters?: Array<Gkeonprem_VMwareClusterVcenter>;
}
export class VMwareCluster extends Resource {
  /*
Load Balancer configuration.
Structure is documented below.
*/
  public LoadBalancer?: Gkeonprem_VMwareClusterLoadBalancer;

  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  public Statuses?: Array<Gkeonprem_VMwareClusterStatus>;

  /*
AAGConfig specifies whether to spread VMware User Cluster nodes across at
least three physical hosts in the datacenter.
Structure is documented below.
*/
  public AntiAffinityGroups?: Gkeonprem_VMwareClusterAntiAffinityGroups;

  /*
Configuration for auto repairing.
Structure is documented below.
*/
  public AutoRepairConfig?: Gkeonprem_VMwareClusterAutoRepairConfig;

  /*
Fleet configuration for the cluster.
Structure is documented below.
*/
  public Fleets?: Array<Gkeonprem_VMwareClusterFleet>;

  /*
Specifies upgrade policy for the cluster.
Structure is documented below.
*/
  public UpgradePolicy?: Gkeonprem_VMwareClusterUpgradePolicy;

  /*
VmwareDataplaneV2Config specifies configuration for Dataplane V2.
Structure is documented below.
*/
  public DataplaneV2?: Gkeonprem_VMwareClusterDataplaneV2;

  /*
(Output)
The lifecycle state of the condition.
*/
  public State?: string;

  // Enable VM tracking.
  public VmTrackingEnabled?: boolean;

  /*
The admin cluster this VMware User Cluster belongs to.
This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.
*/
  public AdminClusterMembership?: string;

  /*
Annotations on the VMware User Cluster.
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

  // The time at which VMware User Cluster was created.
  public CreateTime?: string;

  // The location of the resource.
  public Location?: string;

  // The unique identifier of the VMware User Cluster.
  public Uid?: string;

  /*
RBAC policy that will be applied and managed by GKE On-Prem.
Structure is documented below.
*/
  public Authorization?: Gkeonprem_VMwareClusterAuthorization;

  // A human readable description of this VMware User Cluster.
  public Description?: string;

  // Enable control plane V2. Default to false.
  public EnableControlPlaneV2?: boolean;

  /*
This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
Allows clients to perform consistent read-modify-writes
through optimistic concurrency control.
*/
  public Etag?: string;

  // The time at which VMware User Cluster was last updated.
  public UpdateTime?: string;

  /*
ValidationCheck represents the result of the preflight check job.
Structure is documented below.
*/
  public ValidationChecks?: Array<Gkeonprem_VMwareClusterValidationCheck>;

  /*
The object name of the VMware OnPremUserCluster custom resource on the
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

  // The Anthos clusters on the VMware version for your user cluster.
  public OnPremVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The VMware User Cluster network configuration.
Structure is documented below.
*/
  public NetworkConfig?: Gkeonprem_VMwareClusterNetworkConfig;

  // If set, there are currently changes in flight to the VMware User Cluster.
  public Reconciling?: boolean;

  /*
Storage configuration.
Structure is documented below.
*/
  public Storage?: Gkeonprem_VMwareClusterStorage;

  /*
VMware User Cluster control plane nodes must have either 1 or 3 replicas.
Structure is documented below.
*/
  public ControlPlaneNode?: Gkeonprem_VMwareClusterControlPlaneNode;

  // The time at which VMware User Cluster was deleted.
  public DeleteTime?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // The DNS name of VMware User Cluster's API server.
  public Endpoint?: string;

  // The VMware cluster name.
  public Name?: string;

  /*
VmwareVCenterConfig specifies vCenter config for the user cluster.
Inherited from the admin cluster.
Structure is documented below.
*/
  public Vcenters?: Array<Gkeonprem_VMwareClusterVcenter>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "VmTrackingEnabled",
        "Enable VM tracking.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "AdminClusterMembership",
        "The admin cluster this VMware User Cluster belongs to.\nThis is the full resource name of the admin cluster's hub membership.\nIn the future, references to other resource types might be allowed if\nadmin clusters are modeled as their own resources.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AutoRepairConfig",
        "Configuration for auto repairing.\nStructure is documented below.",
        Gkeonprem_VMwareClusterAutoRepairConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DataplaneV2",
        "VmwareDataplaneV2Config specifies configuration for Dataplane V2.\nStructure is documented below.",
        Gkeonprem_VMwareClusterDataplaneV2_GetTypes(),
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
        "UpgradePolicy",
        "Specifies upgrade policy for the cluster.\nStructure is documented below.",
        Gkeonprem_VMwareClusterUpgradePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        "Annotations on the VMware User Cluster.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The VMware cluster name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AntiAffinityGroups",
        "AAGConfig specifies whether to spread VMware User Cluster nodes across at\nleast three physical hosts in the datacenter.\nStructure is documented below.",
        Gkeonprem_VMwareClusterAntiAffinityGroups_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NetworkConfig",
        "The VMware User Cluster network configuration.\nStructure is documented below.",
        Gkeonprem_VMwareClusterNetworkConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableControlPlaneV2",
        "Enable control plane V2. Default to false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Storage",
        "Storage configuration.\nStructure is documented below.",
        Gkeonprem_VMwareClusterStorage_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Authorization",
        "RBAC policy that will be applied and managed by GKE On-Prem.\nStructure is documented below.",
        Gkeonprem_VMwareClusterAuthorization_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ControlPlaneNode",
        "VMware User Cluster control plane nodes must have either 1 or 3 replicas.\nStructure is documented below.",
        Gkeonprem_VMwareClusterControlPlaneNode_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Vcenters",
        "VmwareVCenterConfig specifies vCenter config for the user cluster.\nInherited from the admin cluster.\nStructure is documented below.",
        Gkeonprem_VMwareClusterVcenter_GetTypes(),
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
        InputType.String,
        "Description",
        "A human readable description of this VMware User Cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LoadBalancer",
        "Load Balancer configuration.\nStructure is documented below.",
        Gkeonprem_VMwareClusterLoadBalancer_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "OnPremVersion",
        "The Anthos clusters on the VMware version for your user cluster.",
        [],
        true,
        false,
      ),
    ];
  }
}
