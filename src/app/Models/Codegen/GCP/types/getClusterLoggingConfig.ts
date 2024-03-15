export interface getClusterLoggingConfig {
  // GKE components exposing logs. Valid values include SYSTEM_COMPONENTS, APISERVER, CONTROLLER_MANAGER, SCHEDULER, and WORKLOADS.
  EnableComponents?: Array<string>;
}
