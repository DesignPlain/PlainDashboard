import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_getDatabaseInstancesInstanceSettingMaintenanceWindow {
  // Day of week (1-7), starting on Monday
  day?: number;

  // Hour of day (0-23), ignored if day not set
  hour?: number;

  // Receive updates earlier (canary) or later (stable)
  updateTrack?: string;
}

export function sql_getDatabaseInstancesInstanceSettingMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "day",
      "Day of week (1-7), starting on Monday",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "hour",
      "Hour of day (0-23), ignored if day not set",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "updateTrack",
      "Receive updates earlier (canary) or later (stable)",
      [],
      true,
      false,
    ),
  ];
}
