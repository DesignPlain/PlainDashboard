export interface TaskTriggerSpec {
  // Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.
  Disabled?: boolean;

  // Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.
  MaxRetries?: number;

  // Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 - - - -, or TZ=America/New_York 1 - - - -. This field is required for RECURRING tasks.
  Schedule?: string;

  // The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.
  StartTime?: string;

  /*
Trigger type of the user-specified Task
Possible values are: `ON_DEMAND`, `RECURRING`.
*/
  Type?: string;
}
