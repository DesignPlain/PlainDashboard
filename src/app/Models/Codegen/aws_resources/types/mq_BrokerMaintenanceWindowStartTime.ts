import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mq_BrokerMaintenanceWindowStartTime {
  // Time, in 24-hour format, e.g., `02:00`.
  timeOfDay?: string;

  // Time zone in either the Country/City format or the UTC offset format, e.g., `CET`.
  timeZone?: string;

  // Day of the week, e.g., `MONDAY`, `TUESDAY`, or `WEDNESDAY`.
  dayOfWeek?: string;
}

export function mq_BrokerMaintenanceWindowStartTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "timeOfDay",
      "Time, in 24-hour format, e.g., `02:00`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeZone",
      "Time zone in either the Country/City format or the UTC offset format, e.g., `CET`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dayOfWeek",
      "Day of the week, e.g., `MONDAY`, `TUESDAY`, or `WEDNESDAY`.",
      [],
      true,
      false,
    ),
  ];
}
