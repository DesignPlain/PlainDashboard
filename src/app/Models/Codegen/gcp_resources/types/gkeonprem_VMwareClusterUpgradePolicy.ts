import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkeonprem_VMwareClusterUpgradePolicy {
  // Controls whether the upgrade applies to the control plane only.
  controlPlaneOnly?: boolean;
}

export function gkeonprem_VMwareClusterUpgradePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "controlPlaneOnly",
      "Controls whether the upgrade applies to the control plane only.",
      [],
      false,
      false,
    ),
  ];
}
