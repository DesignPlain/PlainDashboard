import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo {
  /*
(Output)
The assigned URL for the node JSON-RPC API endpoint.
*/
  jsonRpcApiEndpoint?: string;

  /*
(Output)
The assigned URL for the node WebSockets API endpoint.
*/
  websocketsApiEndpoint?: string;
}

export function blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "jsonRpcApiEndpoint",
      "(Output)\nThe assigned URL for the node JSON-RPC API endpoint.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "websocketsApiEndpoint",
      "(Output)\nThe assigned URL for the node WebSockets API endpoint.",
      () => [],
      false,
      false,
    ),
  ];
}
