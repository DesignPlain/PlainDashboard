import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  tpu_V2VmShieldedInstanceConfig,
  tpu_V2VmShieldedInstanceConfig_GetTypes,
} from '../types/tpu_V2VmShieldedInstanceConfig';
import {
  tpu_V2VmDataDisk,
  tpu_V2VmDataDisk_GetTypes,
} from '../types/tpu_V2VmDataDisk';
import {
  tpu_V2VmAcceleratorConfig,
  tpu_V2VmAcceleratorConfig_GetTypes,
} from '../types/tpu_V2VmAcceleratorConfig';
import {
  tpu_V2VmNetworkConfig,
  tpu_V2VmNetworkConfig_GetTypes,
} from '../types/tpu_V2VmNetworkConfig';
import {
  tpu_V2VmSchedulingConfig,
  tpu_V2VmSchedulingConfig_GetTypes,
} from '../types/tpu_V2VmSchedulingConfig';
import {
  tpu_V2VmServiceAccount,
  tpu_V2VmServiceAccount_GetTypes,
} from '../types/tpu_V2VmServiceAccount';
import {
  tpu_V2VmNetworkEndpoint,
  tpu_V2VmNetworkEndpoint_GetTypes,
} from '../types/tpu_V2VmNetworkEndpoint';
import {
  tpu_V2VmSymptom,
  tpu_V2VmSymptom_GetTypes,
} from '../types/tpu_V2VmSymptom';

export interface V2VmArgs {
  /*
Runtime version for the TPU.


- - -
*/
  runtimeVersion?: string;

  /*
TPU accelerator type for the TPU. `accelerator_type` cannot be used at the same time as
`accelerator_config`. If neither is specified, `accelerator_type` defaults to 'v2-8'.
*/
  acceleratorType?: string;

  /*
Resource labels to represent user-provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.
  metadata?: Map<string, string>;

  /*
Shielded Instance options.
Structure is documented below.
*/
  shieldedInstanceConfig?: tpu_V2VmShieldedInstanceConfig;

  /*
The additional data disks for the Node.
Structure is documented below.
*/
  dataDisks?: Array<tpu_V2VmDataDisk>;

  /*
The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must
be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger
block would be wasteful (a node can only consume one IP address). Errors will occur if the
CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts
with any subnetworks in the user's provided network, or the provided network is peered with
another network that is using that CIDR block.
*/
  cidrBlock?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The GCP location for the TPU. If it is not provided, the provider zone is used.
  zone?: string;

  /*
The AccleratorConfig for the TPU Node. `accelerator_config` cannot be used at the same time
as `accelerator_type`. If neither is specified, `accelerator_type` defaults to 'v2-8'.
Structure is documented below.
*/
  acceleratorConfig?: tpu_V2VmAcceleratorConfig;

  // The immutable name of the TPU.
  name?: string;

  /*
Network configurations for the TPU node.
Structure is documented below.
*/
  networkConfig?: tpu_V2VmNetworkConfig;

  /*
The scheduling options for this node.
Structure is documented below.
*/
  schedulingConfig?: tpu_V2VmSchedulingConfig;

  /*
The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is
specified, the default compute service account will be used.
Structure is documented below.
*/
  serviceAccount?: tpu_V2VmServiceAccount;

  // Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.
  tags?: Array<string>;

  // Text description of the TPU.
  description?: string;
}
export class V2Vm extends DS_Resource {
  // The immutable name of the TPU.
  public name?: string;

  /*
Network configurations for the TPU node.
Structure is documented below.
*/
  public networkConfig?: tpu_V2VmNetworkConfig;

  // The current state for the TPU Node.
  public state?: string;

  // The GCP location for the TPU. If it is not provided, the provider zone is used.
  public zone?: string;

  // The health status of the TPU node.
  public health?: string;

  // The API version that created this Node.
  public apiVersion?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // If this field is populated, it contains a description of why the TPU Node is unhealthy.
  public healthDescription?: string;

  /*
Resource labels to represent user-provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The qualified name of the QueuedResource that requested this Node.
  public queuedResource?: string;

  /*
The scheduling options for this node.
Structure is documented below.
*/
  public schedulingConfig?: tpu_V2VmSchedulingConfig;

  /*
The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is
specified, the default compute service account will be used.
Structure is documented below.
*/
  public serviceAccount?: tpu_V2VmServiceAccount;

  /*
TPU accelerator type for the TPU. `accelerator_type` cannot be used at the same time as
`accelerator_config`. If neither is specified, `accelerator_type` defaults to 'v2-8'.
*/
  public acceleratorType?: string;

  // Text description of the TPU.
  public description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Shielded Instance options.
Structure is documented below.
*/
  public shieldedInstanceConfig?: tpu_V2VmShieldedInstanceConfig;

  /*
The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must
be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger
block would be wasteful (a node can only consume one IP address). Errors will occur if the
CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts
with any subnetworks in the user's provided network, or the provided network is peered with
another network that is using that CIDR block.
*/
  public cidrBlock?: string;

  /*
The additional data disks for the Node.
Structure is documented below.
*/
  public dataDisks?: Array<tpu_V2VmDataDisk>;

  // Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.
  public metadata?: Map<string, string>;

  // Whether the Node belongs to a Multislice group.
  public multisliceNode?: boolean;

  /*
The network endpoints where TPU workers can be accessed and sent work. It is recommended that
runtime clients of the node reach out to the 0th entry in this map first.
Structure is documented below.
*/
  public networkEndpoints?: Array<tpu_V2VmNetworkEndpoint>;

  /*
Runtime version for the TPU.


- - -
*/
  public runtimeVersion?: string;

  /*
The Symptoms that have occurred to the TPU Node.
Structure is documented below.
*/
  public symptoms?: Array<tpu_V2VmSymptom>;

  // Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.
  public tags?: Array<string>;

  /*
The AccleratorConfig for the TPU Node. `accelerator_config` cannot be used at the same time
as `accelerator_type`. If neither is specified, `accelerator_type` defaults to 'v2-8'.
Structure is documented below.
*/
  public acceleratorConfig?: tpu_V2VmAcceleratorConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Resource labels to represent user-provided metadata.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'shieldedInstanceConfig',
        'Shielded Instance options.\nStructure is documented below.',
        () => tpu_V2VmShieldedInstanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The immutable name of the TPU.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tags',
        'Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Text description of the TPU.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'runtimeVersion',
        'Runtime version for the TPU.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'metadata',
        'Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'zone',
        'The GCP location for the TPU. If it is not provided, the provider zone is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'schedulingConfig',
        'The scheduling options for this node.\nStructure is documented below.',
        () => tpu_V2VmSchedulingConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'serviceAccount',
        'The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is\nspecified, the default compute service account will be used.\nStructure is documented below.',
        () => tpu_V2VmServiceAccount_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'dataDisks',
        'The additional data disks for the Node.\nStructure is documented below.',
        () => tpu_V2VmDataDisk_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'acceleratorType',
        "TPU accelerator type for the TPU. `accelerator_type` cannot be used at the same time as\n`accelerator_config`. If neither is specified, `accelerator_type` defaults to 'v2-8'.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'cidrBlock',
        "The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must\nbe a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger\nblock would be wasteful (a node can only consume one IP address). Errors will occur if the\nCIDR block has already been used for a currently existing TPU node, the CIDR block conflicts\nwith any subnetworks in the user's provided network, or the provided network is peered with\nanother network that is using that CIDR block.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'acceleratorConfig',
        "The AccleratorConfig for the TPU Node. `accelerator_config` cannot be used at the same time\nas `accelerator_type`. If neither is specified, `accelerator_type` defaults to 'v2-8'.\nStructure is documented below.",
        () => tpu_V2VmAcceleratorConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'networkConfig',
        'Network configurations for the TPU node.\nStructure is documented below.',
        () => tpu_V2VmNetworkConfig_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
