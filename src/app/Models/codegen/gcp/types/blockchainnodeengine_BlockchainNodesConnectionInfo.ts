import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo,
  blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo_GetTypes,
} from './blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo';

export interface blockchainnodeengine_BlockchainNodesConnectionInfo {
  /*
(Output)
The endpoint information through which to interact with a blockchain node.
Structure is documented below.
*/
  endpointInfos?: Array<blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo>;

  /*
(Output)
A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name}
*/
  serviceAttachment?: string;
}

export function blockchainnodeengine_BlockchainNodesConnectionInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'endpointInfos',
      '(Output)\nThe endpoint information through which to interact with a blockchain node.\nStructure is documented below.',
      () =>
        blockchainnodeengine_BlockchainNodesConnectionInfoEndpointInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceAttachment',
      '(Output)\nA service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name}',
      () => [],
      false,
      false,
    ),
  ];
}
