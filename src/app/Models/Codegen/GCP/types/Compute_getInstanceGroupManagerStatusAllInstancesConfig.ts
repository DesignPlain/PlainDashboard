import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getInstanceGroupManagerStatusAllInstancesConfig {
  // A bit indicating whether this configuration has been applied to all managed instances in the group.
  Effective?: boolean;
}

export function Compute_getInstanceGroupManagerStatusAllInstancesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Effective",
      "A bit indicating whether this configuration has been applied to all managed instances in the group.",
      [],
      true,
      false,
    ),
  ];
}
