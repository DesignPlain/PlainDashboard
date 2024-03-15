export interface WorkflowTemplateJobScheduling {
  // Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. A job may be reported as thrashing if driver exits with non-zero code 4 times within 10 minute window. Maximum value is 10.
  MaxFailuresPerHour?: number;

  // Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. Maximum value is 240
  MaxFailuresTotal?: number;
}
