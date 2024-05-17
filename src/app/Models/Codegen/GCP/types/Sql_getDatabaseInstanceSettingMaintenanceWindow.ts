import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstanceSettingMaintenanceWindow {
  // Hour of day (0-23), ignored if day not set
  Hour?: number;

  // Receive updates earlier (canary) or later (stable)
  UpdateTrack?: string;

  // Day of week (1-7), starting on Monday
  Day?: number;
}

export function Sql_getDatabaseInstanceSettingMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Hour",
      "Hour of day (0-23), ignored if day not set",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTrack",
      "Receive updates earlier (canary) or later (stable)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Day",
      "Day of week (1-7), starting on Monday",
      [],
      true,
      false,
    ),
  ];
}
