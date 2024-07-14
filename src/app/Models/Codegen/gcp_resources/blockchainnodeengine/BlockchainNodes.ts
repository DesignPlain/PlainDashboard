import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  blockchainnodeengine_BlockchainNodesConnectionInfo,
  blockchainnodeengine_BlockchainNodesConnectionInfo_GetTypes,
} from "../types/blockchainnodeengine_BlockchainNodesConnectionInfo";
import {
  blockchainnodeengine_BlockchainNodesEthereumDetails,
  blockchainnodeengine_BlockchainNodesEthereumDetails_GetTypes,
} from "../types/blockchainnodeengine_BlockchainNodesEthereumDetails";

export interface BlockchainNodesArgs {
  /*
User-provided key-value pairs
Structure is documented below.
*/
  ethereumDetails?: blockchainnodeengine_BlockchainNodesEthereumDetails;

  /*
User-provided key-value pairs

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // Location of Blockchain Node being created.
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
ID of the requesting object.


- - -
*/
  blockchainNodeId?: string;

  /*
User-provided key-value pairs
Possible values are: `ETHEREUM`.
*/
  blockchainType?: string;
}
export class BlockchainNodes extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
User-provided key-value pairs
Structure is documented below.
*/
  public ethereumDetails?: blockchainnodeengine_BlockchainNodesEthereumDetails;

  /*
User-provided key-value pairs

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The fully qualified name of the blockchain node. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node.
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
ID of the requesting object.


- - -
*/
  public blockchainNodeId?: string;

  /*
User-provided key-value pairs
Possible values are: `ETHEREUM`.
*/
  public blockchainType?: string;

  /*
The connection information through which to interact with a blockchain node.
Structure is documented below.
*/
  public connectionInfos?: Array<blockchainnodeengine_BlockchainNodesConnectionInfo>;

  // The timestamp at which the blockchain node was first created.
  public createTime?: string;

  // Location of Blockchain Node being created.
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The timestamp at which the blockchain node was last updated.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "User-provided key-value pairs\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location of Blockchain Node being created.",
        [],
        true,
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
        "blockchainNodeId",
        "ID of the requesting object.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "blockchainType",
        "User-provided key-value pairs\nPossible values are: `ETHEREUM`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ethereumDetails",
        "User-provided key-value pairs\nStructure is documented below.",
        blockchainnodeengine_BlockchainNodesEthereumDetails_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
