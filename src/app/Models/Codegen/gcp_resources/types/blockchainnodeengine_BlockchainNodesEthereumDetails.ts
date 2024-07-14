import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint,
  blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint_GetTypes,
} from "./blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint";
import {
  blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig,
  blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig_GetTypes,
} from "./blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig";
import {
  blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails,
  blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails_GetTypes,
} from "./blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails";

export interface blockchainnodeengine_BlockchainNodesEthereumDetails {
  /*
(Output)
User-provided key-value pairs
Structure is documented below.
*/
  additionalEndpoints?: Array<blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint>;

  // Enables JSON-RPC access to functions in the admin namespace. Defaults to false.
  apiEnableAdmin?: boolean;

  /*
The execution client
Possible values are: `EXECUTION_CLIENT_UNSPECIFIED`, `GETH`, `ERIGON`.
*/
  executionClient?: string;

  /*
The Ethereum environment being accessed.
Possible values are: `MAINNET`, `TESTNET_GOERLI_PRATER`, `TESTNET_SEPOLIA`.
*/
  network?: string;

  /*
The type of Ethereum node.
Possible values are: `LIGHT`, `FULL`, `ARCHIVE`.
*/
  nodeType?: string;

  /*
Configuration for validator-related parameters on the beacon client, and for any managed validator client.
Structure is documented below.
*/
  validatorConfig?: blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig;

  // Enables JSON-RPC access to functions in the debug namespace. Defaults to false.
  apiEnableDebug?: boolean;

  /*
The consensus client
Possible values are: `CONSENSUS_CLIENT_UNSPECIFIED`, `LIGHTHOUSE`.
*/
  consensusClient?: string;

  /*
User-provided key-value pairs
Structure is documented below.
*/
  gethDetails?: blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails;
}

export function blockchainnodeengine_BlockchainNodesEthereumDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "apiEnableAdmin",
      "Enables JSON-RPC access to functions in the admin namespace. Defaults to false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      "The Ethereum environment being accessed.\nPossible values are: `MAINNET`, `TESTNET_GOERLI_PRATER`, `TESTNET_SEPOLIA`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "apiEnableDebug",
      "Enables JSON-RPC access to functions in the debug namespace. Defaults to false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "consensusClient",
      "The consensus client\nPossible values are: `CONSENSUS_CLIENT_UNSPECIFIED`, `LIGHTHOUSE`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalEndpoints",
      "(Output)\nUser-provided key-value pairs\nStructure is documented below.",
      blockchainnodeengine_BlockchainNodesEthereumDetailsAdditionalEndpoint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionClient",
      "The execution client\nPossible values are: `EXECUTION_CLIENT_UNSPECIFIED`, `GETH`, `ERIGON`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeType",
      "The type of Ethereum node.\nPossible values are: `LIGHT`, `FULL`, `ARCHIVE`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "validatorConfig",
      "Configuration for validator-related parameters on the beacon client, and for any managed validator client.\nStructure is documented below.",
      blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gethDetails",
      "User-provided key-value pairs\nStructure is documented below.",
      blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails_GetTypes(),
      false,
      false,
    ),
  ];
}
