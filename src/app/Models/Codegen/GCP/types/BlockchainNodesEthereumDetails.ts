import { BlockchainNodesEthereumDetailsAdditionalEndpoint } from "./BlockchainNodesEthereumDetailsAdditionalEndpoint";
import { BlockchainNodesEthereumDetailsGethDetails } from "./BlockchainNodesEthereumDetailsGethDetails";
import { BlockchainNodesEthereumDetailsValidatorConfig } from "./BlockchainNodesEthereumDetailsValidatorConfig";

export interface BlockchainNodesEthereumDetails {
  /*
User-provided key-value pairs
Structure is documented below.
*/
  GethDetails?: BlockchainNodesEthereumDetailsGethDetails;

  /*
The Ethereum environment being accessed.
Possible values are: `MAINNET`, `TESTNET_GOERLI_PRATER`, `TESTNET_SEPOLIA`.
*/
  Network?: string;

  /*
Configuration for validator-related parameters on the beacon client, and for any managed validator client.
Structure is documented below.
*/
  ValidatorConfig?: BlockchainNodesEthereumDetailsValidatorConfig;

  // Enables JSON-RPC access to functions in the debug namespace. Defaults to false.
  ApiEnableDebug?: boolean;

  /*
The execution client
Possible values are: `EXECUTION_CLIENT_UNSPECIFIED`, `GETH`, `ERIGON`.
*/
  ExecutionClient?: string;

  /*
The consensus client
Possible values are: `CONSENSUS_CLIENT_UNSPECIFIED`, `LIGHTHOUSE`.
*/
  ConsensusClient?: string;

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
  AdditionalEndpoints?: Array<BlockchainNodesEthereumDetailsAdditionalEndpoint>;

  // Enables JSON-RPC access to functions in the admin namespace. Defaults to false.
  ApiEnableAdmin?: boolean;
}
