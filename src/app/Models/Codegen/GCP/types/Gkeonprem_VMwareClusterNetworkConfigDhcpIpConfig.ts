import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig {
  /*
enabled is a flag to mark if DHCP IP allocation is
used for VMware user clusters.
*/
  Enabled?: boolean;
}

export function Gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "enabled is a flag to mark if DHCP IP allocation is\nused for VMware user clusters.",
      [],
      true,
      false,
    ),
  ];
}
