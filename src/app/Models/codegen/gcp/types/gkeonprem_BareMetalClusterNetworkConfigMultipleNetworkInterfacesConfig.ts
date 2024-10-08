import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig {
  /*
Whether to enable multiple network interfaces for your pods.
When set network_config.advanced_networking is automatically
set to true.
*/
  enabled?: boolean;
}

export function gkeonprem_BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether to enable multiple network interfaces for your pods.\nWhen set network_config.advanced_networking is automatically\nset to true.',
      () => [],
      false,
      false,
    ),
  ];
}
