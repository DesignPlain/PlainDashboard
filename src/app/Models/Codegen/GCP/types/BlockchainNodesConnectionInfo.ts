import { BlockchainNodesConnectionInfoEndpointInfo } from "./BlockchainNodesConnectionInfoEndpointInfo";

export interface BlockchainNodesConnectionInfo {
  /*
(Output)
The endpoint information through which to interact with a blockchain node.
Structure is documented below.
*/
  EndpointInfos?: Array<BlockchainNodesConnectionInfoEndpointInfo>;

  /*
(Output)
A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name}
*/
  ServiceAttachment?: string;
}
