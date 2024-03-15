import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BlockchainNodesEthereumDetails } from "../types/BlockchainNodesEthereumDetails";
import { BlockchainNodesConnectionInfo } from "../types/BlockchainNodesConnectionInfo";

export interface BlockchainNodesArgs {
  /*
ID of the requesting object.


- - -
*/
  BlockchainNodeId?: string;

  /*
User-provided key-value pairs
Possible values are: `ETHEREUM`.
*/
  BlockchainType?: string;

  /*
User-provided key-value pairs
Structure is documented below.
*/
  EthereumDetails?: BlockchainNodesEthereumDetails;

  /*
User-provided key-value pairs

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Location of Blockchain Node being created.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class BlockchainNodes extends Resource {
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

  /*
User-provided key-value pairs
Possible values are: `ETHEREUM`.
*/
  public BlockchainType?: string;

  /*
The connection information through which to interact with a blockchain node.
Structure is documented below.
*/
  public ConnectionInfos?: Array<BlockchainNodesConnectionInfo>;

  /*
User-provided key-value pairs
Structure is documented below.
*/
  public EthereumDetails?: BlockchainNodesEthereumDetails;

  /*
User-provided key-value pairs

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Location of Blockchain Node being created.
  public Location?: string;

  // The fully qualified name of the blockchain node. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node.
  public Name?: string;

  // The timestamp at which the blockchain node was last updated.
  public UpdateTime?: string;

  /*
ID of the requesting object.


- - -
*/
  public BlockchainNodeId?: string;

  // The timestamp at which the blockchain node was first created.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "User-provided key-value pairs\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of Blockchain Node being created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BlockchainNodeId",
        "ID of the requesting object.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "BlockchainType",
        "User-provided key-value pairs\nPossible values are: `ETHEREUM`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EthereumDetails",
        "User-provided key-value pairs\nStructure is documented below.",
      ),
    ];
  }
}
