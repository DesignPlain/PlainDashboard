import { PreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField } from "./PreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField";

export interface PreventionJobTriggerInspectJobStorageConfigTimespanConfig {
  // Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied.
  StartTime?: string;

  /*
Specification of the field containing the timestamp of scanned items.
Structure is documented below.
*/
  TimestampField?: PreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField;

  /*
When the job is started by a JobTrigger we will automatically figure out a valid startTime to avoid
scanning files that have not been modified since the last time the JobTrigger executed. This will
be based on the time of the execution of the last run of the JobTrigger or the timespan endTime
used in the last run of the JobTrigger.
*/
  EnableAutoPopulationOfTimespanConfig?: boolean;

  // Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied.
  EndTime?: string;
}
