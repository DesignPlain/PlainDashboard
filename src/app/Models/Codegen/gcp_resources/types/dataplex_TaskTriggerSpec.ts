import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataplex_TaskTriggerSpec {
  // Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.
  disabled?: boolean;

  // Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.
  maxRetries?: number;

  // Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 - - - -, or TZ=America/New_York 1 - - - -. This field is required for RECURRING tasks.
  schedule?: string;

  // The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.
  startTime?: string;

  /*
Trigger type of the user-specified Task
Possible values are: `ON_DEMAND`, `RECURRING`.
*/
  type?: string;
}

export function dataplex_TaskTriggerSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "schedule",
      "Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Trigger type of the user-specified Task\nPossible values are: `ON_DEMAND`, `RECURRING`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disabled",
      "Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxRetries",
      "Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.",
      [],
      false,
      false,
    ),
  ];
}
