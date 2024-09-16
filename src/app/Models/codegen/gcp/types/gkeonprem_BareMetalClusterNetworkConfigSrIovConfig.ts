import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_BareMetalClusterNetworkConfigSrIovConfig {
  // Whether to install the SR-IOV operator.
  enabled?: boolean;
}

export function gkeonprem_BareMetalClusterNetworkConfigSrIovConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether to install the SR-IOV operator.',
      () => [],
      false,
      false,
    ),
  ];
}
