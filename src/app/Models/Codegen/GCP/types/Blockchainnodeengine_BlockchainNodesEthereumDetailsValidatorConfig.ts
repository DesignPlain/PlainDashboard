import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig {
  // URLs for MEV-relay services to use for block building. When set, a managed MEV-boost service is configured on the beacon client.
  MevRelayUrls?: Array<string>;
}

export function Blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "MevRelayUrls",
      "URLs for MEV-relay services to use for block building. When set, a managed MEV-boost service is configured on the beacon client.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
