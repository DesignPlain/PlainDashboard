export interface AttachedClusterLoggingConfigComponentConfig {
  /*
The components to be enabled.
Each value may be one of: `SYSTEM_COMPONENTS`, `WORKLOADS`.
*/
  EnableComponents?: Array<string>;
}
