import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo,
  Blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo_GetTypes,
} from "./Blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo";

export interface Blockchainnodeengine_BlockchainNodesConnectionInfo {
  /*
(Output)
The endpoint information through which to interact with a blockchain node.
Structure is documented below.
*/
  EndpointInfos?: Array<Blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo>;

  /*
(Output)
A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name}
*/
  ServiceAttachment?: string;
}

export function Blockchainnodeengine_BlockchainNodesConnectionInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "EndpointInfos",
      "(Output)\nThe endpoint information through which to interact with a blockchain node.\nStructure is documented below.",
      Blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAttachment",
      "(Output)\nA service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name}",
      [],
      false,
      false,
    ),
  ];
}
