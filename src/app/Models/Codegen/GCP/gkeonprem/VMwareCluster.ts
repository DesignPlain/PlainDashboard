import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { VMwareClusterAntiAffinityGroups } from "../types/VMwareClusterAntiAffinityGroups";
import { VMwareClusterAutoRepairConfig } from "../types/VMwareClusterAutoRepairConfig";
import { VMwareClusterUpgradePolicy } from "../types/VMwareClusterUpgradePolicy";
import { VMwareClusterLoadBalancer } from "../types/VMwareClusterLoadBalancer";
import { VMwareClusterStatus } from "../types/VMwareClusterStatus";
import { VMwareClusterStorage } from "../types/VMwareClusterStorage";
import { VMwareClusterNetworkConfig } from "../types/VMwareClusterNetworkConfig";
import { VMwareClusterVcenter } from "../types/VMwareClusterVcenter";
import { VMwareClusterControlPlaneNode } from "../types/VMwareClusterControlPlaneNode";
import { VMwareClusterDataplaneV2 } from "../types/VMwareClusterDataplaneV2";
import { VMwareClusterFleet } from "../types/VMwareClusterFleet";
import { VMwareClusterValidationCheck } from "../types/VMwareClusterValidationCheck";
import { VMwareClusterAuthorization } from "../types/VMwareClusterAuthorization";

export interface VMwareClusterArgs {
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
  Authorization?: VMwareClusterAuthorization;

  // The VMware cluster name.
  Name?: string;

  // The Anthos clusters on the VMware version for your user cluster.
  OnPremVersion?: string;

  /*
Storage configuration.
Structure is documented below.
*/
  Storage?: VMwareClusterStorage;

  // The location of the resource.
  Location?: string;

  /*
The VMware User Cluster network configuration.
Structure is documented below.
*/
  NetworkConfig?: VMwareClusterNetworkConfig;

  /*
The admin cluster this VMware User Cluster belongs to.
This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.
*/
  AdminClusterMembership?: string;

  /*
AAGConfig specifies whether to spread VMware User Cluster nodes across at
least three physical hosts in the datacenter.
Structure is documented below.
*/
  AntiAffinityGroups?: VMwareClusterAntiAffinityGroups;

  /*
Configuration for auto repairing.
Structure is documented below.
*/
  AutoRepairConfig?: VMwareClusterAutoRepairConfig;

  // A human readable description of this VMware User Cluster.
  Description?: string;

  // Enable control plane V2. Default to false.
  EnableControlPlaneV2?: boolean;

  /*
Specifies upgrade policy for the cluster.
Structure is documented below.
*/
  UpgradePolicy?: VMwareClusterUpgradePolicy;

  /*
VmwareVCenterConfig specifies vCenter config for the user cluster.
Inherited from the admin cluster.
Structure is documented below.
*/
  Vcenters?: Array<VMwareClusterVcenter>;

  // Enable VM tracking.
  VmTrackingEnabled?: boolean;

  /*
VMware User Cluster control plane nodes must have either 1 or 3 replicas.
Structure is documented below.
*/
  ControlPlaneNode?: VMwareClusterControlPlaneNode;

  /*
VmwareDataplaneV2Config specifies configuration for Dataplane V2.
Structure is documented below.
*/
  DataplaneV2?: VMwareClusterDataplaneV2;

  /*
Load Balancer configuration.
Structure is documented below.
*/
  LoadBalancer?: VMwareClusterLoadBalancer;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class VMwareCluster extends Resource {
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

  /*
(Output)
The lifecycle state of the condition.
*/
  public State?: string;

  /*
Storage configuration.
Structure is documented below.
*/
  public Storage?: VMwareClusterStorage;

  /*
Specifies upgrade policy for the cluster.
Structure is documented below.
*/
  public UpgradePolicy?: VMwareClusterUpgradePolicy;

  /*
VmwareVCenterConfig specifies vCenter config for the user cluster.
Inherited from the admin cluster.
Structure is documented below.
*/
  public Vcenters?: Array<VMwareClusterVcenter>;

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

  /*
Fleet configuration for the cluster.
Structure is documented below.
*/
  public Fleets?: Array<VMwareClusterFleet>;

  // The location of the resource.
  public Location?: string;

  /*
RBAC policy that will be applied and managed by GKE On-Prem.
Structure is documented below.
*/
  public Authorization?: VMwareClusterAuthorization;

  /*
Load Balancer configuration.
Structure is documented below.
*/
  public LoadBalancer?: VMwareClusterLoadBalancer;

  // The Anthos clusters on the VMware version for your user cluster.
  public OnPremVersion?: string;

  /*
The admin cluster this VMware User Cluster belongs to.
This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.
*/
  public AdminClusterMembership?: string;

  /*
Configuration for auto repairing.
Structure is documented below.
*/
  public AutoRepairConfig?: VMwareClusterAutoRepairConfig;

  // If set, there are currently changes in flight to the VMware User Cluster.
  public Reconciling?: boolean;

  // Enable VM tracking.
  public VmTrackingEnabled?: boolean;

  /*
VMware User Cluster control plane nodes must have either 1 or 3 replicas.
Structure is documented below.
*/
  public ControlPlaneNode?: VMwareClusterControlPlaneNode;

  // The time at which VMware User Cluster was created.
  public CreateTime?: string;

  /*
VmwareDataplaneV2Config specifies configuration for Dataplane V2.
Structure is documented below.
*/
  public DataplaneV2?: VMwareClusterDataplaneV2;

  // The VMware cluster name.
  public Name?: string;

  /*
The VMware User Cluster network configuration.
Structure is documented below.
*/
  public NetworkConfig?: VMwareClusterNetworkConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The time at which VMware User Cluster was last updated.
  public UpdateTime?: string;

  /*
AAGConfig specifies whether to spread VMware User Cluster nodes across at
least three physical hosts in the datacenter.
Structure is documented below.
*/
  public AntiAffinityGroups?: VMwareClusterAntiAffinityGroups;

  // The time at which VMware User Cluster was deleted.
  public DeleteTime?: string;

  // The DNS name of VMware User Cluster's API server.
  public Endpoint?: string;

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

  // The unique identifier of the VMware User Cluster.
  public Uid?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  public Statuses?: Array<VMwareClusterStatus>;

  /*
ValidationCheck represents the result of the preflight check job.
Structure is documented below.
*/
  public ValidationChecks?: Array<VMwareClusterValidationCheck>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Authorization",
        "RBAC policy that will be applied and managed by GKE On-Prem.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableControlPlaneV2",
        "Enable control plane V2. Default to false.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Vcenters",
        "VmwareVCenterConfig specifies vCenter config for the user cluster.\nInherited from the admin cluster.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LoadBalancer",
        "Load Balancer configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "VmTrackingEnabled",
        "Enable VM tracking.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataplaneV2",
        "VmwareDataplaneV2Config specifies configuration for Dataplane V2.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Annotations on the VMware User Cluster.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Storage",
        "Storage configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AdminClusterMembership",
        "The admin cluster this VMware User Cluster belongs to.\nThis is the full resource name of the admin cluster's hub membership.\nIn the future, references to other resource types might be allowed if\nadmin clusters are modeled as their own resources.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human readable description of this VMware User Cluster.",
      ),
      new DynamicUIProps(
        InputType.String,
        "UpgradePolicy",
        "Specifies upgrade policy for the cluster.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkConfig",
        "The VMware User Cluster network configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AutoRepairConfig",
        "Configuration for auto repairing.\nStructure is documented below.",
      ),
      new DynamicUIProps(InputType.String, "Name", "The VMware cluster name."),
      new DynamicUIProps(
        InputType.String,
        "OnPremVersion",
        "The Anthos clusters on the VMware version for your user cluster.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AntiAffinityGroups",
        "AAGConfig specifies whether to spread VMware User Cluster nodes across at\nleast three physical hosts in the datacenter.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ControlPlaneNode",
        "VMware User Cluster control plane nodes must have either 1 or 3 replicas.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
