export interface DatascanExecutionStatus {
  /*
(Output)
The time when the latest DataScanJob started.
*/
  LatestJobEndTime?: string;

  /*
(Output)
The time when the latest DataScanJob ended.
*/
  LatestJobStartTime?: string;
}
