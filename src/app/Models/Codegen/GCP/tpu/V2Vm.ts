import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Tpu_V2VmDataDisk,
  Tpu_V2VmDataDisk_GetTypes,
} from "../types/Tpu_V2VmDataDisk";
import {
  Tpu_V2VmServiceAccount,
  Tpu_V2VmServiceAccount_GetTypes,
} from "../types/Tpu_V2VmServiceAccount";
import {
  Tpu_V2VmShieldedInstanceConfig,
  Tpu_V2VmShieldedInstanceConfig_GetTypes,
} from "../types/Tpu_V2VmShieldedInstanceConfig";
import {
  Tpu_V2VmNetworkConfig,
  Tpu_V2VmNetworkConfig_GetTypes,
} from "../types/Tpu_V2VmNetworkConfig";
import {
  Tpu_V2VmNetworkEndpoint,
  Tpu_V2VmNetworkEndpoint_GetTypes,
} from "../types/Tpu_V2VmNetworkEndpoint";
import {
  Tpu_V2VmSymptom,
  Tpu_V2VmSymptom_GetTypes,
} from "../types/Tpu_V2VmSymptom";
import {
  Tpu_V2VmAcceleratorConfig,
  Tpu_V2VmAcceleratorConfig_GetTypes,
} from "../types/Tpu_V2VmAcceleratorConfig";
import {
  Tpu_V2VmSchedulingConfig,
  Tpu_V2VmSchedulingConfig_GetTypes,
} from "../types/Tpu_V2VmSchedulingConfig";

export interface V2VmArgs {
  /*
The AccleratorConfig for the TPU Node. `accelerator_config` cannot be used at the same time
as `accelerator_type`. If neither is specified, `accelerator_type` defaults to 'v2-8'.
Structure is documented below.
*/
  AcceleratorConfig?: Tpu_V2VmAcceleratorConfig;

  /*
The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must
be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger
block would be wasteful (a node can only consume one IP address). Errors will occur if the
CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts
with any subnetworks in the user's provided network, or the provided network is peered with
another network that is using that CIDR block.
*/
  CidrBlock?: string;

  // Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.
  Tags?: Array<string>;

  // The immutable name of the TPU.
  Name?: string;

  /*
The scheduling options for this node.
Structure is documented below.
*/
  SchedulingConfig?: Tpu_V2VmSchedulingConfig;

  /*
The additional data disks for the Node.
Structure is documented below.
*/
  DataDisks?: Array<Tpu_V2VmDataDisk>;

  // Text description of the TPU.
  Description?: string;

  /*
Resource labels to represent user-provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is
specified, the default compute service account will be used.
Structure is documented below.
*/
  ServiceAccount?: Tpu_V2VmServiceAccount;

  /*
Shielded Instance options.
Structure is documented below.
*/
  ShieldedInstanceConfig?: Tpu_V2VmShieldedInstanceConfig;

  /*
TPU accelerator type for the TPU. `accelerator_type` cannot be used at the same time as
`accelerator_config`. If neither is specified, `accelerator_type` defaults to 'v2-8'.
*/
  AcceleratorType?: string;

  // Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.
  Metadata?: Map<string, string>;

  /*
Network configurations for the TPU node.
Structure is documented below.
*/
  NetworkConfig?: Tpu_V2VmNetworkConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Runtime version for the TPU.


- - -
*/
  RuntimeVersion?: string;

  // The GCP location for the TPU. If it is not provided, the provider zone is used.
  Zone?: string;
}
export class V2Vm extends Resource {
  /*
The additional data disks for the Node.
Structure is documented below.
*/
  public DataDisks?: Array<Tpu_V2VmDataDisk>;

  // Text description of the TPU.
  public Description?: string;

  // Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.
  public Metadata?: Map<string, string>;

  // Whether the Node belongs to a Multislice group.
  public MultisliceNode?: boolean;

  /*
The network endpoints where TPU workers can be accessed and sent work. It is recommended that
runtime clients of the node reach out to the 0th entry in this map first.
Structure is documented below.
*/
  public NetworkEndpoints?: Array<Tpu_V2VmNetworkEndpoint>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Runtime version for the TPU.


- - -
*/
  public RuntimeVersion?: string;

  /*
The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must
be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger
block would be wasteful (a node can only consume one IP address). Errors will occur if the
CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts
with any subnetworks in the user's provided network, or the provided network is peered with
another network that is using that CIDR block.
*/
  public CidrBlock?: string;

  /*
The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is
specified, the default compute service account will be used.
Structure is documented below.
*/
  public ServiceAccount?: Tpu_V2VmServiceAccount;

  // Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.
  public Tags?: Array<string>;

  /*
The scheduling options for this node.
Structure is documented below.
*/
  public SchedulingConfig?: Tpu_V2VmSchedulingConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Shielded Instance options.
Structure is documented below.
*/
  public ShieldedInstanceConfig?: Tpu_V2VmShieldedInstanceConfig;

  // The current state for the TPU Node.
  public State?: string;

  // The GCP location for the TPU. If it is not provided, the provider zone is used.
  public Zone?: string;

  // The health status of the TPU node.
  public Health?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // If this field is populated, it contains a description of why the TPU Node is unhealthy.
  public HealthDescription?: string;

  // The immutable name of the TPU.
  public Name?: string;

  /*
The AccleratorConfig for the TPU Node. `accelerator_config` cannot be used at the same time
as `accelerator_type`. If neither is specified, `accelerator_type` defaults to 'v2-8'.
Structure is documented below.
*/
  public AcceleratorConfig?: Tpu_V2VmAcceleratorConfig;

  // The API version that created this Node.
  public ApiVersion?: string;

  /*
Resource labels to represent user-provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Network configurations for the TPU node.
Structure is documented below.
*/
  public NetworkConfig?: Tpu_V2VmNetworkConfig;

  // The qualified name of the QueuedResource that requested this Node.
  public QueuedResource?: string;

  /*
The Symptoms that have occurred to the TPU Node.
Structure is documented below.
*/
  public Symptoms?: Array<Tpu_V2VmSymptom>;

  /*
TPU accelerator type for the TPU. `accelerator_type` cannot be used at the same time as
`accelerator_config`. If neither is specified, `accelerator_type` defaults to 'v2-8'.
*/
  public AcceleratorType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "CidrBlock",
        "The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must\nbe a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger\nblock would be wasteful (a node can only consume one IP address). Errors will occur if the\nCIDR block has already been used for a currently existing TPU node, the CIDR block conflicts\nwith any subnetworks in the user's provided network, or the provided network is peered with\nanother network that is using that CIDR block.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The immutable name of the TPU.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SchedulingConfig",
        "The scheduling options for this node.\nStructure is documented below.",
        Tpu_V2VmSchedulingConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "RuntimeVersion",
        "Runtime version for the TPU.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AcceleratorConfig",
        "The AccleratorConfig for the TPU Node. `accelerator_config` cannot be used at the same time\nas `accelerator_type`. If neither is specified, `accelerator_type` defaults to 'v2-8'.\nStructure is documented below.",
        Tpu_V2VmAcceleratorConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Tags",
        "Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ServiceAccount",
        "The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is\nspecified, the default compute service account will be used.\nStructure is documented below.",
        Tpu_V2VmServiceAccount_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "AcceleratorType",
        "TPU accelerator type for the TPU. `accelerator_type` cannot be used at the same time as\n`accelerator_config`. If neither is specified, `accelerator_type` defaults to 'v2-8'.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NetworkConfig",
        "Network configurations for the TPU node.\nStructure is documented below.",
        Tpu_V2VmNetworkConfig_GetTypes(),
        false,
        true,
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
        InputType.Array,
        "DataDisks",
        "The additional data disks for the Node.\nStructure is documented below.",
        Tpu_V2VmDataDisk_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Text description of the TPU.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Resource labels to represent user-provided metadata.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ShieldedInstanceConfig",
        "Shielded Instance options.\nStructure is documented below.",
        Tpu_V2VmShieldedInstanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Metadata",
        "Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The GCP location for the TPU. If it is not provided, the provider zone is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
