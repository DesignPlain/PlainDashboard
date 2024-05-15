import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails {
  /*
Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE.
Possible values are: `FULL`, `ARCHIVE`.

<a name="nested_additional_endpoints"></a>The `additional_endpoints` block contains:
*/
  GarbageCollectionMode?: string;
}

export function Blockchainnodeengine_BlockchainNodesEthereumDetailsGethDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GarbageCollectionMode",
      'Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE.\nPossible values are: `FULL`, `ARCHIVE`.\n\n<a name="nested_additional_endpoints"></a>The `additional_endpoints` block contains:',
      [],
      false,
      true,
    ),
  ];
}
