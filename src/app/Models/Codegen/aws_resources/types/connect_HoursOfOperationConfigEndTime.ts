import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface connect_HoursOfOperationConfigEndTime {
  // Specifies the hour of closing.
  hours?: number;

  // Specifies the minute of closing.
  minutes?: number;
}

export function connect_HoursOfOperationConfigEndTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "hours",
      "Specifies the hour of closing.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minutes",
      "Specifies the minute of closing.",
      [],
      true,
      false,
    ),
  ];
}
