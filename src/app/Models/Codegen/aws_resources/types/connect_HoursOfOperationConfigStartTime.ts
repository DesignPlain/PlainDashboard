import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface connect_HoursOfOperationConfigStartTime {
  // Specifies the hour of opening.
  hours?: number;

  // Specifies the minute of opening.
  minutes?: number;
}

export function connect_HoursOfOperationConfigStartTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "hours",
      "Specifies the hour of opening.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minutes",
      "Specifies the minute of opening.",
      [],
      true,
      false,
    ),
  ];
}
