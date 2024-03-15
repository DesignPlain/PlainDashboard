export interface ApplicationFeatureSettings {
  /*
Set to false to use the legacy health check instead of the readiness
and liveness checks.
*/
  SplitHealthChecks?: boolean;
}
