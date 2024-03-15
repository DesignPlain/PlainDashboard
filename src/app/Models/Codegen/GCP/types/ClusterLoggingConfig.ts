export interface ClusterLoggingConfig {
  /*
The GKE components exposing logs. Supported values include:
`SYSTEM_COMPONENTS`, `APISERVER`, `CONTROLLER_MANAGER`, `SCHEDULER`, and `WORKLOADS`.
*/
  EnableComponents?: Array<string>;
}
