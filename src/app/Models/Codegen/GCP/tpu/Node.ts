import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NodeSchedulingConfig } from "../types/NodeSchedulingConfig";
import { NodeNetworkEndpoint } from "../types/NodeNetworkEndpoint";

export interface NodeArgs {
  // The GCP location for the TPU. If it is not provided, the provider zone is used.
  Zone?: string;

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
  CidrBlock?: string;

  // The immutable name of the TPU.
  Name?: string;

  /*
The name of a network to peer the TPU node to. It must be a
preexisting Compute Engine network inside of the project on which
this API has been activated. If none is provided, "default" will be
used.
*/
  Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Sets the scheduling options for this TPU instance.
Structure is documented below.
*/
  SchedulingConfig?: NodeSchedulingConfig;

  /*
The version of Tensorflow running in the Node.


- - -
*/
  TensorflowVersion?: string;

  /*
Whether the VPC peering for the node is set up through Service Networking API.
The VPC Peering should be set up before provisioning the node. If this field is set,
cidr_block field should not be specified. If the network that you want to peer the
TPU Node to is a Shared VPC network, the node must be created with this this field enabled.
*/
  UseServiceNetworking?: boolean;

  // The type of hardware accelerators associated with this node.
  AcceleratorType?: string;

  // The user-supplied description of the TPU. Maximum of 512 characters.
  Description?: string;

  /*
Resource labels to represent user provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class Node extends Resource {
  // The user-supplied description of the TPU. Maximum of 512 characters.
  public Description?: string;

  /*
Sets the scheduling options for this TPU instance.
Structure is documented below.
*/
  public SchedulingConfig?: NodeSchedulingConfig;

  // The type of hardware accelerators associated with this node.
  public AcceleratorType?: string;

  // The immutable name of the TPU.
  public Name?: string;

  /*
The version of Tensorflow running in the Node.


- - -
*/
  public TensorflowVersion?: string;

  /*
The name of a network to peer the TPU node to. It must be a
preexisting Compute Engine network inside of the project on which
this API has been activated. If none is provided, "default" will be
used.
*/
  public Network?: string;

  /*
The service account used to run the tensor flow services within the
node. To share resources, including Google Cloud Storage data, with
the Tensorflow job running in the Node, this account must have
permissions to that data.
*/
  public ServiceAccount?: string;

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
  public CidrBlock?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Resource labels to represent user provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Whether the VPC peering for the node is set up through Service Networking API.
The VPC Peering should be set up before provisioning the node. If this field is set,
cidr_block field should not be specified. If the network that you want to peer the
TPU Node to is a Shared VPC network, the node must be created with this this field enabled.
*/
  public UseServiceNetworking?: boolean;

  // The GCP location for the TPU. If it is not provided, the provider zone is used.
  public Zone?: string;

  /*
The network endpoints where TPU workers can be accessed and sent work.
It is recommended that Tensorflow clients of the node first reach out
to the first (index 0) entry.
Structure is documented below.
*/
  public NetworkEndpoints?: Array<NodeNetworkEndpoint>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The user-supplied description of the TPU. Maximum of 512 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The GCP location for the TPU. If it is not provided, the provider zone is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CidrBlock",
        "The CIDR block that the TPU node will use when selecting an IP\naddress. This CIDR block must be a /29 block; the Compute Engine\nnetworks API forbids a smaller block, and using a larger block would\nbe wasteful (a node can only consume one IP address).\nErrors will occur if the CIDR block has already been used for a\ncurrently existing TPU node, the CIDR block conflicts with any\nsubnetworks in the user's provided network, or the provided network\nis peered with another network that is using that CIDR block.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The immutable name of the TPU.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        'The name of a network to peer the TPU node to. It must be a\npreexisting Compute Engine network inside of the project on which\nthis API has been activated. If none is provided, "default" will be\nused.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SchedulingConfig",
        "Sets the scheduling options for this TPU instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TensorflowVersion",
        "The version of Tensorflow running in the Node.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "UseServiceNetworking",
        "Whether the VPC peering for the node is set up through Service Networking API.\nThe VPC Peering should be set up before provisioning the node. If this field is set,\ncidr_block field should not be specified. If the network that you want to peer the\nTPU Node to is a Shared VPC network, the node must be created with this this field enabled.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AcceleratorType",
        "The type of hardware accelerators associated with this node.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user provided metadata.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
    ];
  }
}
