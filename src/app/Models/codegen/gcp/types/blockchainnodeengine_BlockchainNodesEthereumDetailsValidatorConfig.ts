import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig {
  // URLs for MEV-relay services to use for block building. When set, a managed MEV-boost service is configured on the beacon client.
  mevRelayUrls?: Array<string>;
}

export function blockchainnodeengine_BlockchainNodesEthereumDetailsValidatorConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'mevRelayUrls',
      'URLs for MEV-relay services to use for block building. When set, a managed MEV-boost service is configured on the beacon client.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
