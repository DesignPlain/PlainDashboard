export interface PatchDeploymentOneTimeSchedule {
  /*
The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format,
accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  ExecuteTime?: string;
}
