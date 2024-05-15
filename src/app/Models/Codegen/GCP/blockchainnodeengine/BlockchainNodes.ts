import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Blockchainnodeengine_BlockchainNodesEthereumDetails,
  Blockchainnodeengine_BlockchainNodesEthereumDetails_GetTypes,
} from "../types/Blockchainnodeengine_BlockchainNodesEthereumDetails";
import {
  Blockchainnodeengine_BlockchainNodesConnectionInfo,
  Blockchainnodeengine_BlockchainNodesConnectionInfo_GetTypes,
} from "../types/Blockchainnodeengine_BlockchainNodesConnectionInfo";

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
  EthereumDetails?: Blockchainnodeengine_BlockchainNodesEthereumDetails;

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
  // The fully qualified name of the blockchain node. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node.
  public Name?: string;

  // The timestamp at which the blockchain node was last updated.
  public UpdateTime?: string;

  /*
User-provided key-value pairs
Possible values are: `ETHEREUM`.
*/
  public BlockchainType?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
User-provided key-value pairs
Structure is documented below.
*/
  public EthereumDetails?: Blockchainnodeengine_BlockchainNodesEthereumDetails;

  /*
User-provided key-value pairs

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Location of Blockchain Node being created.
  public Location?: string;

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
ID of the requesting object.


- - -
*/
  public BlockchainNodeId?: string;

  /*
The connection information through which to interact with a blockchain node.
Structure is documented below.
*/
  public ConnectionInfos?: Array<Blockchainnodeengine_BlockchainNodesConnectionInfo>;

  // The timestamp at which the blockchain node was first created.
  public CreateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "User-provided key-value pairs\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of Blockchain Node being created.",
        [],
        true,
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
        InputType.String,
        "BlockchainNodeId",
        "ID of the requesting object.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "BlockchainType",
        "User-provided key-value pairs\nPossible values are: `ETHEREUM`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EthereumDetails",
        "User-provided key-value pairs\nStructure is documented below.",
        Blockchainnodeengine_BlockchainNodesEthereumDetails_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
