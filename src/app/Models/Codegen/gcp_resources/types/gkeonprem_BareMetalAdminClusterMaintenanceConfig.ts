import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkeonprem_BareMetalAdminClusterMaintenanceConfig {
  /*
All IPv4 address from these ranges will be placed into maintenance mode.
Nodes in maintenance mode will be cordoned and drained. When both of these
are true, the "baremetal.cluster.gke.io/maintenance" annotation will be set
on the node resource.
*/
  maintenanceAddressCidrBlocks?: Array<string>;
}

export function gkeonprem_BareMetalAdminClusterMaintenanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "maintenanceAddressCidrBlocks",
      'All IPv4 address from these ranges will be placed into maintenance mode.\nNodes in maintenance mode will be cordoned and drained. When both of these\nare true, the "baremetal.cluster.gke.io/maintenance" annotation will be set\non the node resource.',
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
