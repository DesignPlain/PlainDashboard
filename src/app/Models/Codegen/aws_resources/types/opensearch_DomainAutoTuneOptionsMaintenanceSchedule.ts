import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opensearch_DomainAutoTuneOptionsMaintenanceScheduleDuration,
  opensearch_DomainAutoTuneOptionsMaintenanceScheduleDuration_GetTypes,
} from "./opensearch_DomainAutoTuneOptionsMaintenanceScheduleDuration";

export interface opensearch_DomainAutoTuneOptionsMaintenanceSchedule {
  // A cron expression specifying the recurrence pattern for an Auto-Tune maintenance schedule.
  cronExpressionForRecurrence?: string;

  // Configuration block for the duration of the Auto-Tune maintenance window. Detailed below.
  duration?: opensearch_DomainAutoTuneOptionsMaintenanceScheduleDuration;

  // Date and time at which to start the Auto-Tune maintenance schedule in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  startAt?: string;
}

export function opensearch_DomainAutoTuneOptionsMaintenanceSchedule_GetTypes(): DynamicUIProps[] {
  return [
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
      opensearch_DomainAutoTuneOptionsMaintenanceScheduleDuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startAt",
      "Date and time at which to start the Auto-Tune maintenance schedule in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).",
      [],
      true,
      false,
    ),
  ];
}
