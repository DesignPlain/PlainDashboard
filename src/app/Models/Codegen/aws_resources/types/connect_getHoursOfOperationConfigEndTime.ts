import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface connect_getHoursOfOperationConfigEndTime {
  // Minute of opening.
  minutes?: number;

  // Hour of opening.
  hours?: number;
}

export function connect_getHoursOfOperationConfigEndTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "hours",
      "Hour of opening.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minutes",
      "Minute of opening.",
      [],
      true,
      false,
    ),
  ];
}
