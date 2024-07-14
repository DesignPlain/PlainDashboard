import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opensearch_getDomainAutoTuneOptionMaintenanceScheduleDuration,
  opensearch_getDomainAutoTuneOptionMaintenanceScheduleDuration_GetTypes,
} from "./opensearch_getDomainAutoTuneOptionMaintenanceScheduleDuration";

export interface opensearch_getDomainAutoTuneOptionMaintenanceSchedule {
  // Cron expression for an Auto-Tune maintenance schedule.
  cronExpressionForRecurrence?: string;

  // Configuration block for the duration of the Auto-Tune maintenance window.
  durations?: Array<opensearch_getDomainAutoTuneOptionMaintenanceScheduleDuration>;

  // Date and time at which the Auto-Tune maintenance schedule starts in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  startAt?: string;
}

export function opensearch_getDomainAutoTuneOptionMaintenanceSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "durations",
      "Configuration block for the duration of the Auto-Tune maintenance window.",
      opensearch_getDomainAutoTuneOptionMaintenanceScheduleDuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startAt",
      "Date and time at which the Auto-Tune maintenance schedule starts in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cronExpressionForRecurrence",
      "Cron expression for an Auto-Tune maintenance schedule.",
      [],
      true,
      false,
    ),
  ];
}
