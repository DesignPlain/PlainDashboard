import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface macie2_ClassificationJobScheduleFrequency {
  // Specifies a monthly recurrence pattern for running the job.
  monthlySchedule?: number;

  // Specifies a weekly recurrence pattern for running the job.
  weeklySchedule?: string;

  // Specifies a daily recurrence pattern for running the job.
  dailySchedule?: boolean;
}

export function macie2_ClassificationJobScheduleFrequency_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'monthlySchedule',
      'Specifies a monthly recurrence pattern for running the job.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'weeklySchedule',
      'Specifies a weekly recurrence pattern for running the job.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'dailySchedule',
      'Specifies a daily recurrence pattern for running the job.',
      () => [],
      false,
      false,
    ),
  ];
}
