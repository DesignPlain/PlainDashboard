import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { V2VmDataDisk } from "../types/V2VmDataDisk";
import { V2VmShieldedInstanceConfig } from "../types/V2VmShieldedInstanceConfig";
import { V2VmSymptom } from "../types/V2VmSymptom";
import { V2VmNetworkEndpoint } from "../types/V2VmNetworkEndpoint";
import { V2VmNetworkConfig } from "../types/V2VmNetworkConfig";
import { V2VmSchedulingConfig } from "../types/V2VmSchedulingConfig";
import { V2VmServiceAccount } from "../types/V2VmServiceAccount";
import { V2VmAcceleratorConfig } from "../types/V2VmAcceleratorConfig";

export interface V2VmArgs {
  // Text description of the TPU.
  Description?: string;

  /*
Resource labels to represent user-provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.
  Metadata?: Map<string, string>;

  // The immutable name of the TPU.
  Name?: string;

  /*
Network configurations for the TPU node.
Structure is documented below.
*/
  NetworkConfig?: V2VmNetworkConfig;

  /*
Runtime version for the TPU.


- - -
*/
  RuntimeVersion?: string;

  /*
The scheduling options for this node.
Structure is documented below.
*/
  SchedulingConfig?: V2VmSchedulingConfig;

  /*
The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is
specified, the default compute service account will be used.
Structure is documented below.
*/
  ServiceAccount?: V2VmServiceAccount;

  /*
The AccleratorConfig for the TPU Node. `accelerator_config` cannot be used at the same time
as `accelerator_type`. If neither is specified, `accelerator_type` defaults to 'v2-8'.
Structure is documented below.
*/
  AcceleratorConfig?: V2VmAcceleratorConfig;

  /*
TPU accelerator type for the TPU. `accelerator_type` cannot be used at the same time as
`accelerator_config`. If neither is specified, `accelerator_type` defaults to 'v2-8'.
*/
  AcceleratorType?: string;

  /*
The additional data disks for the Node.
Structure is documented below.
*/
  DataDisks?: Array<V2VmDataDisk>;

  // The GCP location for the TPU. If it is not provided, the provider zone is used.
  Zone?: string;

  /*
The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must
be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger
block would be wasteful (a node can only consume one IP address). Errors will occur if the
CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts
with any subnetworks in the user's provided network, or the provided network is peered with
another network that is using that CIDR block.
*/
  CidrBlock?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Shielded Instance options.
Structure is documented below.
*/
  ShieldedInstanceConfig?: V2VmShieldedInstanceConfig;

  // Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.
  Tags?: Array<string>;
}
export class V2Vm extends Resource {
  // The current state for the TPU Node.
  public State?: string;

  // Text description of the TPU.
  public Description?: string;

  // Whether the Node belongs to a Multislice group.
  public MultisliceNode?: boolean;

  /*
Network configurations for the TPU node.
Structure is documented below.
*/
  public NetworkConfig?: V2VmNetworkConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The scheduling options for this node.
Structure is documented below.
*/
  public SchedulingConfig?: V2VmSchedulingConfig;

  /*
Shielded Instance options.
Structure is documented below.
*/
  public ShieldedInstanceConfig?: V2VmShieldedInstanceConfig;

  /*
The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must
be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger
block would be wasteful (a node can only consume one IP address). Errors will occur if the
CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts
with any subnetworks in the user's provided network, or the provided network is peered with
another network that is using that CIDR block.
*/
  public CidrBlock?: string;

  // If this field is populated, it contains a description of why the TPU Node is unhealthy.
  public HealthDescription?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.
  public Tags?: Array<string>;

  /*
The AccleratorConfig for the TPU Node. `accelerator_config` cannot be used at the same time
as `accelerator_type`. If neither is specified, `accelerator_type` defaults to 'v2-8'.
Structure is documented below.
*/
  public AcceleratorConfig?: V2VmAcceleratorConfig;

  // Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.
  public Metadata?: Map<string, string>;

  /*
Runtime version for the TPU.


- - -
*/
  public RuntimeVersion?: string;

  /*
The Symptoms that have occurred to the TPU Node.
Structure is documented below.
*/
  public Symptoms?: Array<V2VmSymptom>;

  // The GCP location for the TPU. If it is not provided, the provider zone is used.
  public Zone?: string;

  // The immutable name of the TPU.
  public Name?: string;

  /*
The network endpoints where TPU workers can be accessed and sent work. It is recommended that
runtime clients of the node reach out to the 0th entry in this map first.
Structure is documented below.
*/
  public NetworkEndpoints?: Array<V2VmNetworkEndpoint>;

  /*
TPU accelerator type for the TPU. `accelerator_type` cannot be used at the same time as
`accelerator_config`. If neither is specified, `accelerator_type` defaults to 'v2-8'.
*/
  public AcceleratorType?: string;

  // The API version that created this Node.
  public ApiVersion?: string;

  /*
The additional data disks for the Node.
Structure is documented below.
*/
  public DataDisks?: Array<V2VmDataDisk>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The health status of the TPU node.
  public Health?: string;

  /*
Resource labels to represent user-provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The qualified name of the QueuedResource that requested this Node.
  public QueuedResource?: string;

  /*
The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is
specified, the default compute service account will be used.
Structure is documented below.
*/
  public ServiceAccount?: V2VmServiceAccount;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The GCP location for the TPU. If it is not provided, the provider zone is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Tags",
        "Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Text description of the TPU.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkConfig",
        "Network configurations for the TPU node.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RuntimeVersion",
        "Runtime version for the TPU.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "AcceleratorConfig",
        "The AccleratorConfig for the TPU Node. `accelerator_config` cannot be used at the same time\nas `accelerator_type`. If neither is specified, `accelerator_type` defaults to 'v2-8'.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "DataDisks",
        "The additional data disks for the Node.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ShieldedInstanceConfig",
        "Shielded Instance options.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user-provided metadata.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The immutable name of the TPU.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SchedulingConfig",
        "The scheduling options for this node.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AcceleratorType",
        "TPU accelerator type for the TPU. `accelerator_type` cannot be used at the same time as\n`accelerator_config`. If neither is specified, `accelerator_type` defaults to 'v2-8'.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Metadata",
        "Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is\nspecified, the default compute service account will be used.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CidrBlock",
        "The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must\nbe a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger\nblock would be wasteful (a node can only consume one IP address). Errors will occur if the\nCIDR block has already been used for a currently existing TPU node, the CIDR block conflicts\nwith any subnetworks in the user's provided network, or the provided network is peered with\nanother network that is using that CIDR block.",
      ),
    ];
  }
}
