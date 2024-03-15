export interface ClusterMaintenancePolicyWindowRecurringWindowWindow {
  /*
The time that the window ends. The end time must take place after the
start time.
*/
  EndTime?: string;

  // The time that the window first starts.
  StartTime?: string;
}
