import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  elasticsearch_DomainAutoTuneOptionsMaintenanceScheduleDuration,
  elasticsearch_DomainAutoTuneOptionsMaintenanceScheduleDuration_GetTypes,
} from "./elasticsearch_DomainAutoTuneOptionsMaintenanceScheduleDuration";

export interface elasticsearch_DomainAutoTuneOptionsMaintenanceSchedule {
  // Date and time at which to start the Auto-Tune maintenance schedule in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  startAt?: string;

  // A cron expression specifying the recurrence pattern for an Auto-Tune maintenance schedule.
  cronExpressionForRecurrence?: string;

  // Configuration block for the duration of the Auto-Tune maintenance window. Detailed below.
  duration?: elasticsearch_DomainAutoTuneOptionsMaintenanceScheduleDuration;
}

export function elasticsearch_DomainAutoTuneOptionsMaintenanceSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "startAt",
      "Date and time at which to start the Auto-Tune maintenance schedule in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cronExpressionForRecurrence",
      "A cron expression specifying the recurrence pattern for an Auto-Tune maintenance schedule.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "duration",
      "Configuration block for the duration of the Auto-Tune maintenance window. Detailed below.",
      elasticsearch_DomainAutoTuneOptionsMaintenanceScheduleDuration_GetTypes(),
      true,
      false,
    ),
  ];
}
