import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  tpu_NodeSchedulingConfig,
  tpu_NodeSchedulingConfig_GetTypes,
} from "../types/tpu_NodeSchedulingConfig";
import {
  tpu_NodeNetworkEndpoint,
  tpu_NodeNetworkEndpoint_GetTypes,
} from "../types/tpu_NodeNetworkEndpoint";

export interface NodeArgs {
  // The GCP location for the TPU. If it is not provided, the provider zone is used.
  zone?: string;

  // The type of hardware accelerators associated with this node.
  acceleratorType?: string;

  // The user-supplied description of the TPU. Maximum of 512 characters.
  description?: string;

  // The immutable name of the TPU.
  name?: string;

  /*
The name of a network to peer the TPU node to. It must be a
preexisting Compute Engine network inside of the project on which
this API has been activated. If none is provided, "default" will be
used.
*/
  network?: string;

  /*
Sets the scheduling options for this TPU instance.
Structure is documented below.
*/
  schedulingConfig?: tpu_NodeSchedulingConfig;

  /*
The version of Tensorflow running in the Node.


- - -
*/
  tensorflowVersion?: string;

  /*
Whether the VPC peering for the node is set up through Service Networking API.
The VPC Peering should be set up before provisioning the node. If this field is set,
cidr_block field should not be specified. If the network that you want to peer the
TPU Node to is a Shared VPC network, the node must be created with this this field enabled.
*/
  useServiceNetworking?: boolean;

  /*
The CIDR block that the TPU node will use when selecting an IP
address. This CIDR block must be a /29 block; the Compute Engine
networks API forbids a smaller block, and using a larger block would
be wasteful (a node can only consume one IP address).
Errors will occur if the CIDR block has already been used for a
currently existing TPU node, the CIDR block conflicts with any
subnetworks in the user's provided network, or the provided network
is peered with another network that is using that CIDR block.
*/
  cidrBlock?: string;

  /*
Resource labels to represent user provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Node extends Resource {
  /*
The CIDR block that the TPU node will use when selecting an IP
address. This CIDR block must be a /29 block; the Compute Engine
networks API forbids a smaller block, and using a larger block would
be wasteful (a node can only consume one IP address).
Errors will occur if the CIDR block has already been used for a
currently existing TPU node, the CIDR block conflicts with any
subnetworks in the user's provided network, or the provided network
is peered with another network that is using that CIDR block.
*/
  public cidrBlock?: string;

  /*
Resource labels to represent user provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The immutable name of the TPU.
  public name?: string;

  /*
The service account used to run the tensor flow services within the
node. To share resources, including Google Cloud Storage data, with
the Tensorflow job running in the Node, this account must have
permissions to that data.
*/
  public serviceAccount?: string;

  /*
The network endpoints where TPU workers can be accessed and sent work.
It is recommended that Tensorflow clients of the node first reach out
to the first (index 0) entry.
Structure is documented below.
*/
  public networkEndpoints?: Array<tpu_NodeNetworkEndpoint>;

  /*
Whether the VPC peering for the node is set up through Service Networking API.
The VPC Peering should be set up before provisioning the node. If this field is set,
cidr_block field should not be specified. If the network that you want to peer the
TPU Node to is a Shared VPC network, the node must be created with this this field enabled.
*/
  public useServiceNetworking?: boolean;

  // The user-supplied description of the TPU. Maximum of 512 characters.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The name of a network to peer the TPU node to. It must be a
preexisting Compute Engine network inside of the project on which
this API has been activated. If none is provided, "default" will be
used.
*/
  public network?: string;

  /*
The version of Tensorflow running in the Node.


- - -
*/
  public tensorflowVersion?: string;

  // The GCP location for the TPU. If it is not provided, the provider zone is used.
  public zone?: string;

  // The type of hardware accelerators associated with this node.
  public acceleratorType?: string;

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
Sets the scheduling options for this TPU instance.
Structure is documented below.
*/
  public schedulingConfig?: tpu_NodeSchedulingConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Resource labels to represent user provided metadata.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "acceleratorType",
        "The type of hardware accelerators associated with this node.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The immutable name of the TPU.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        'The name of a network to peer the TPU node to. It must be a\npreexisting Compute Engine network inside of the project on which\nthis API has been activated. If none is provided, "default" will be\nused.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tensorflowVersion",
        "The version of Tensorflow running in the Node.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "useServiceNetworking",
        "Whether the VPC peering for the node is set up through Service Networking API.\nThe VPC Peering should be set up before provisioning the node. If this field is set,\ncidr_block field should not be specified. If the network that you want to peer the\nTPU Node to is a Shared VPC network, the node must be created with this this field enabled.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cidrBlock",
        "The CIDR block that the TPU node will use when selecting an IP\naddress. This CIDR block must be a /29 block; the Compute Engine\nnetworks API forbids a smaller block, and using a larger block would\nbe wasteful (a node can only consume one IP address).\nErrors will occur if the CIDR block has already been used for a\ncurrently existing TPU node, the CIDR block conflicts with any\nsubnetworks in the user's provided network, or the provided network\nis peered with another network that is using that CIDR block.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "The GCP location for the TPU. If it is not provided, the provider zone is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The user-supplied description of the TPU. Maximum of 512 characters.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "schedulingConfig",
        "Sets the scheduling options for this TPU instance.\nStructure is documented below.",
        tpu_NodeSchedulingConfig_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
