export interface ClusterClusterTelemetry {
  /*
Telemetry integration for the cluster. Supported values (`ENABLED, DISABLED, SYSTEM_ONLY`);
`SYSTEM_ONLY` (Only system components are monitored and logged) is only available in GKE versions 1.15 and later.
*/
  Type?: string;
}
