export interface PreventionJobTriggerTriggerSchedule {
  /*
With this option a job is started a regular periodic basis. For example: every day (86400 seconds).
A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs.
This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

- - -
*/
  RecurrencePeriodDuration?: string;
}
