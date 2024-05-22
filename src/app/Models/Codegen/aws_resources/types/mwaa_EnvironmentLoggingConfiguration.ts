import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  mwaa_EnvironmentLoggingConfigurationTaskLogs,
  mwaa_EnvironmentLoggingConfigurationTaskLogs_GetTypes,
} from "./mwaa_EnvironmentLoggingConfigurationTaskLogs";
import {
  mwaa_EnvironmentLoggingConfigurationWebserverLogs,
  mwaa_EnvironmentLoggingConfigurationWebserverLogs_GetTypes,
} from "./mwaa_EnvironmentLoggingConfigurationWebserverLogs";
import {
  mwaa_EnvironmentLoggingConfigurationWorkerLogs,
  mwaa_EnvironmentLoggingConfigurationWorkerLogs_GetTypes,
} from "./mwaa_EnvironmentLoggingConfigurationWorkerLogs";
import {
  mwaa_EnvironmentLoggingConfigurationDagProcessingLogs,
  mwaa_EnvironmentLoggingConfigurationDagProcessingLogs_GetTypes,
} from "./mwaa_EnvironmentLoggingConfigurationDagProcessingLogs";
import {
  mwaa_EnvironmentLoggingConfigurationSchedulerLogs,
  mwaa_EnvironmentLoggingConfigurationSchedulerLogs_GetTypes,
} from "./mwaa_EnvironmentLoggingConfigurationSchedulerLogs";

export interface mwaa_EnvironmentLoggingConfiguration {
  // (Optional) Log configuration options for processing DAGs. See Module logging configuration for more information. Disabled by default.
  dagProcessingLogs?: mwaa_EnvironmentLoggingConfigurationDagProcessingLogs;

  // Log configuration options for the schedulers. See Module logging configuration for more information. Disabled by default.
  schedulerLogs?: mwaa_EnvironmentLoggingConfigurationSchedulerLogs;

  // Log configuration options for DAG tasks. See Module logging configuration for more information. Enabled by default with `INFO` log level.
  taskLogs?: mwaa_EnvironmentLoggingConfigurationTaskLogs;

  // Log configuration options for the webservers. See Module logging configuration for more information. Disabled by default.
  webserverLogs?: mwaa_EnvironmentLoggingConfigurationWebserverLogs;

  // Log configuration options for the workers. See Module logging configuration for more information. Disabled by default.
  workerLogs?: mwaa_EnvironmentLoggingConfigurationWorkerLogs;
}

export function mwaa_EnvironmentLoggingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "schedulerLogs",
      "Log configuration options for the schedulers. See Module logging configuration for more information. Disabled by default.",
      mwaa_EnvironmentLoggingConfigurationSchedulerLogs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "taskLogs",
      "Log configuration options for DAG tasks. See Module logging configuration for more information. Enabled by default with `INFO` log level.",
      mwaa_EnvironmentLoggingConfigurationTaskLogs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "webserverLogs",
      "Log configuration options for the webservers. See Module logging configuration for more information. Disabled by default.",
      mwaa_EnvironmentLoggingConfigurationWebserverLogs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "workerLogs",
      "Log configuration options for the workers. See Module logging configuration for more information. Disabled by default.",
      mwaa_EnvironmentLoggingConfigurationWorkerLogs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dagProcessingLogs",
      "(Optional) Log configuration options for processing DAGs. See Module logging configuration for more information. Disabled by default.",
      mwaa_EnvironmentLoggingConfigurationDagProcessingLogs_GetTypes(),
      false,
      false,
    ),
  ];
}
