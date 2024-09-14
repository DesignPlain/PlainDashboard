import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataproc_getMetastoreServiceMaintenanceWindow {
  // The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  dayOfWeek?: string;

  // The hour of day (0-23) when the window starts.
  hourOfDay?: number;
}

export function dataproc_getMetastoreServiceMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dayOfWeek",
      'The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "hourOfDay",
      "The hour of day (0-23) when the window starts.",
      () => [],
      true,
      false,
    ),
  ];
}