import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelMaintenance {
  // The day of the week to use for maintenance.
  maintenanceDay?: string;

  // The hour maintenance will start.
  maintenanceStartTime?: string;
}

export function medialive_ChannelMaintenance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "maintenanceDay",
      "The day of the week to use for maintenance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maintenanceStartTime",
      "The hour maintenance will start.",
      [],
      true,
      false,
    ),
  ];
}
