import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface secretsmanager_SecretRotationRotationRules {
  // Specifies the number of days between automatic scheduled rotations of the secret. Either `automatically_after_days` or `schedule_expression` must be specified.
  automaticallyAfterDays?: number;

  // The length of the rotation window in hours. For example, `3h` for a three hour window.
  duration?: string;

  // A `cron()` or `rate()` expression that defines the schedule for rotating your secret. Either `automatically_after_days` or `schedule_expression` must be specified.
  scheduleExpression?: string;
}

export function secretsmanager_SecretRotationRotationRules_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "automaticallyAfterDays",
      "Specifies the number of days between automatic scheduled rotations of the secret. Either `automatically_after_days` or `schedule_expression` must be specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "duration",
      "The length of the rotation window in hours. For example, `3h` for a three hour window.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scheduleExpression",
      "A `cron()` or `rate()` expression that defines the schedule for rotating your secret. Either `automatically_after_days` or `schedule_expression` must be specified.",
      [],
      false,
      false,
    ),
  ];
}
