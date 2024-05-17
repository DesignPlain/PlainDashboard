import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterStorage {
  /*
Whether or not to deploy vSphere CSI components in the VMware User Cluster.
Enabled by default.
*/
  VsphereCsiDisabled?: boolean;
}

export function Gkeonprem_VMwareClusterStorage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "VsphereCsiDisabled",
      "Whether or not to deploy vSphere CSI components in the VMware User Cluster.\nEnabled by default.",
      [],
      true,
      false,
    ),
  ];
}
