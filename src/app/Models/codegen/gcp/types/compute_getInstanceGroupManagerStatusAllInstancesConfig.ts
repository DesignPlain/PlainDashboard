import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getInstanceGroupManagerStatusAllInstancesConfig {
  // A bit indicating whether this configuration has been applied to all managed instances in the group.
  effective?: boolean;
}

export function compute_getInstanceGroupManagerStatusAllInstancesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "effective",
      "A bit indicating whether this configuration has been applied to all managed instances in the group.",
      () => [],
      true,
      false,
    ),
  ];
}
