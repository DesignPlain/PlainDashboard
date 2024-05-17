import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo {
  /*
(Output)
The assigned URL for the node WebSockets API endpoint.
*/
  WebsocketsApiEndpoint?: string;

  /*
(Output)
The assigned URL for the node JSON-RPC API endpoint.
*/
  JsonRpcApiEndpoint?: string;
}

export function Blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "WebsocketsApiEndpoint",
      "(Output)\nThe assigned URL for the node WebSockets API endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "JsonRpcApiEndpoint",
      "(Output)\nThe assigned URL for the node JSON-RPC API endpoint.",
      [],
      false,
      false,
    ),
  ];
}
