import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_getMetastoreServiceMaintenanceWindow {
  // The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  DayOfWeek?: string;

  // The hour of day (0-23) when the window starts.
  HourOfDay?: number;
}

export function Dataproc_getMetastoreServiceMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DayOfWeek",
      'The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "HourOfDay",
      "The hour of day (0-23) when the window starts.",
      [],
      true,
      false,
    ),
  ];
}
