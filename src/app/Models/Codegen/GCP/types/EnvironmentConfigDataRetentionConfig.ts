import { EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig } from "./EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig";

export interface EnvironmentConfigDataRetentionConfig {
  // Optional. The configuration setting for Task Logs.
  TaskLogsRetentionConfigs?: Array<EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig>;
}
