import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface connect_getHoursOfOperationConfigEndTime {
  // Hour of opening.
  hours?: number;

  // Minute of opening.
  minutes?: number;
}

export function connect_getHoursOfOperationConfigEndTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "hours",
      "Hour of opening.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minutes",
      "Minute of opening.",
      () => [],
      true,
      false,
    ),
  ];
}
