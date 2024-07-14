import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkeonprem_VMwareClusterStorage {
  /*
Whether or not to deploy vSphere CSI components in the VMware User Cluster.
Enabled by default.
*/
  vsphereCsiDisabled?: boolean;
}

export function gkeonprem_VMwareClusterStorage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "vsphereCsiDisabled",
      "Whether or not to deploy vSphere CSI components in the VMware User Cluster.\nEnabled by default.",
      [],
      true,
      false,
    ),
  ];
}
