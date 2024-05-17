import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails,
  Blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails_GetTypes,
} from "./Blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails";
import {
  Blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint,
  Blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint_GetTypes,
} from "./Blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint";
import {
  Blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig,
  Blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig_GetTypes,
} from "./Blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig";

export interface Blockchainnodeengine_BlockchainNodesEthereumDetails {
  /*
The execution client
Possible values are: `EXECUTION_CLIENT_UNSPECIFIED`, `GETH`, `ERIGON`.
*/
  ExecutionClient?: string;

  /*
Configuration for validator-related parameters on the beacon client, and for any managed validator client.
Structure is documented below.
*/
  ValidatorConfig?: Blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig;

  // Enables JSON-RPC access to functions in the admin namespace. Defaults to false.
  ApiEnableAdmin?: boolean;

  /*
The consensus client
Possible values are: `CONSENSUS_CLIENT_UNSPECIFIED`, `LIGHTHOUSE`.
*/
  ConsensusClient?: string;

  /*
User-provided key-value pairs
Structure is documented below.
*/
  GethDetails?: Blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails;

  /*
The Ethereum environment being accessed.
Possible values are: `MAINNET`, `TESTNET_GOERLI_PRATER`, `TESTNET_SEPOLIA`.
*/
  Network?: string;

  /*
The type of Ethereum node.
Possible values are: `LIGHT`, `FULL`, `ARCHIVE`.
*/
  NodeType?: string;

  /*
(Output)
User-provided key-value pairs
Structure is documented below.
*/
  AdditionalEndpoints?: Array<Blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint>;

  // Enables JSON-RPC access to functions in the debug namespace. Defaults to false.
  ApiEnableDebug?: boolean;
}

export function Blockchainnodeengine_BlockchainNodesEthereumDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExecutionClient",
      "The execution client\nPossible values are: `EXECUTION_CLIENT_UNSPECIFIED`, `GETH`, `ERIGON`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ApiEnableAdmin",
      "Enables JSON-RPC access to functions in the admin namespace. Defaults to false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConsensusClient",
      "The consensus client\nPossible values are: `CONSENSUS_CLIENT_UNSPECIFIED`, `LIGHTHOUSE`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Network",
      "The Ethereum environment being accessed.\nPossible values are: `MAINNET`, `TESTNET_GOERLI_PRATER`, `TESTNET_SEPOLIA`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ValidatorConfig",
      "Configuration for validator-related parameters on the beacon client, and for any managed validator client.\nStructure is documented below.",
      Blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GethDetails",
      "User-provided key-value pairs\nStructure is documented below.",
      Blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NodeType",
      "The type of Ethereum node.\nPossible values are: `LIGHT`, `FULL`, `ARCHIVE`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalEndpoints",
      "(Output)\nUser-provided key-value pairs\nStructure is documented below.",
      Blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ApiEnableDebug",
      "Enables JSON-RPC access to functions in the debug namespace. Defaults to false.",
      [],
      false,
      true,
    ),
  ];
}
