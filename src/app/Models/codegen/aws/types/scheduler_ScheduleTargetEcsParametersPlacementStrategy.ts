import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface scheduler_ScheduleTargetEcsParametersPlacementStrategy {
  // The field to apply the placement strategy against.
  field?: string;

  // The type of placement strategy. One of: `random`, `spread`, `binpack`.
  type?: string;
}

export function scheduler_ScheduleTargetEcsParametersPlacementStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "field",
      "The field to apply the placement strategy against.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of placement strategy. One of: `random`, `spread`, `binpack`.",
      () => [],
      true,
      false,
    ),
  ];
}
