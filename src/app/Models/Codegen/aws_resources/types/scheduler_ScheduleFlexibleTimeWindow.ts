import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface scheduler_ScheduleFlexibleTimeWindow {
  // Maximum time window during which a schedule can be invoked. Ranges from `1` to `1440` minutes.
  maximumWindowInMinutes?: number;

  // Determines whether the schedule is invoked within a flexible time window. One of: `OFF`, `FLEXIBLE`.
  mode?: string;
}

export function scheduler_ScheduleFlexibleTimeWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumWindowInMinutes",
      "Maximum time window during which a schedule can be invoked. Ranges from `1` to `1440` minutes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Determines whether the schedule is invoked within a flexible time window. One of: `OFF`, `FLEXIBLE`.",
      [],
      true,
      false,
    ),
  ];
}
