import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface macie2_ClassificationJobScheduleFrequency {
  // Specifies a daily recurrence pattern for running the job.
  dailySchedule?: boolean;

  /*
Specifies a monthly recurrence pattern for running the job.

The `s3_job_definition` object supports the following:
*/
  monthlySchedule?: number;

  // Specifies a weekly recurrence pattern for running the job.
  weeklySchedule?: string;
}

export function macie2_ClassificationJobScheduleFrequency_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "dailySchedule",
      "Specifies a daily recurrence pattern for running the job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "monthlySchedule",
      "Specifies a monthly recurrence pattern for running the job.\n\nThe `s3_job_definition` object supports the following:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "weeklySchedule",
      "Specifies a weekly recurrence pattern for running the job.",
      [],
      false,
      false,
    ),
  ];
}
