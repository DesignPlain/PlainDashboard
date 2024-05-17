import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterUpgradePolicy {
  // Controls whether the upgrade applies to the control plane only.
  ControlPlaneOnly?: boolean;
}

export function Gkeonprem_VMwareClusterUpgradePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "ControlPlaneOnly",
      "Controls whether the upgrade applies to the control plane only.",
      [],
      false,
      false,
    ),
  ];
}
