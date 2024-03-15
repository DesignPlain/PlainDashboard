export interface JobScheduling {
  // Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.
  MaxFailuresTotal?: number;

  // Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.
  MaxFailuresPerHour?: number;
}
