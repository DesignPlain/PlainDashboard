export interface PipelineScheduleInfo {
  /*
(Output)
When the next Scheduler job is going to run.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  NextJobTime?: string;

  // Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.
  Schedule?: string;

  // Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.
  TimeZone?: string;
}
