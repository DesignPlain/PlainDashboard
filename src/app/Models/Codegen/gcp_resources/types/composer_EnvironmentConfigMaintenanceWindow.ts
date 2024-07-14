import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface composer_EnvironmentConfigMaintenanceWindow {
  // Maintenance window recurrence. Format is a subset of RFC-5545 (https://tools.ietf.org/html/rfc5545) 'RRULE'. The only allowed values for 'FREQ' field are 'FREQ=DAILY' and 'FREQ=WEEKLY;BYDAY=...'. Example values: 'FREQ=WEEKLY;BYDAY=TU,WE', 'FREQ=DAILY'.
  recurrence?: string;

  // Start time of the first recurrence of the maintenance window.
  startTime?: string;

  // Maintenance window end time. It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to 'start_time'.
  endTime?: string;
}

export function composer_EnvironmentConfigMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "recurrence",
      "Maintenance window recurrence. Format is a subset of RFC-5545 (https://tools.ietf.org/html/rfc5545) 'RRULE'. The only allowed values for 'FREQ' field are 'FREQ=DAILY' and 'FREQ=WEEKLY;BYDAY=...'. Example values: 'FREQ=WEEKLY;BYDAY=TU,WE', 'FREQ=DAILY'.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "Start time of the first recurrence of the maintenance window.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endTime",
      "Maintenance window end time. It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to 'start_time'.",
      [],
      true,
      false,
    ),
  ];
}
