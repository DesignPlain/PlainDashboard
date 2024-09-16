import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails {
  /*
Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE.
Possible values are: `FULL`, `ARCHIVE`.

<a name="nested_additional_endpoints"></a>The `additional_endpoints` block contains:
*/
  garbageCollectionMode?: string;
}

export function blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'garbageCollectionMode',
      'Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE.\nPossible values are: `FULL`, `ARCHIVE`.\n\n<a name="nested_additional_endpoints"></a>The `additional_endpoints` block contains:',
      () => [],
      false,
      true,
    ),
  ];
}
