import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      "enabled",
      "Whether to enable multiple network interfaces for your pods.\nWhen set network_config.advanced_networking is automatically\nset to true.",
      [],
      false,
      false,
    ),
  ];
}
