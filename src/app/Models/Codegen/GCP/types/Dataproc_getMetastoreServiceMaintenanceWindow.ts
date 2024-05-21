import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_getMetastoreServiceMaintenanceWindow {
  // The hour of day (0-23) when the window starts.
  hourOfDay?: number;

  // The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  dayOfWeek?: string;
}

export function dataproc_getMetastoreServiceMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "hourOfDay",
      "The hour of day (0-23) when the window starts.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dayOfWeek",
      'The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]',
      [],
      true,
      false,
    ),
  ];
}
