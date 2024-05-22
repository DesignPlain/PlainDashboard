import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface scheduler_ScheduleTargetRetryPolicy {
  // Maximum number of retry attempts to make before the request fails. Ranges from `0` to `185` (default).
  maximumRetryAttempts?: number;

  // Maximum amount of time, in seconds, to continue to make retry attempts. Ranges from `60` to `86400` (default).
  maximumEventAgeInSeconds?: number;
}

export function scheduler_ScheduleTargetRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumRetryAttempts",
      "Maximum number of retry attempts to make before the request fails. Ranges from `0` to `185` (default).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumEventAgeInSeconds",
      "Maximum amount of time, in seconds, to continue to make retry attempts. Ranges from `60` to `86400` (default).",
      [],
      false,
      false,
    ),
  ];
}
