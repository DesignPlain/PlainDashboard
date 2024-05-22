import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration {
  // The name of the log group for log publishing.
  logGroupName?: string;

  // The specified name prefix for log streams.
  logStreamNamePrefix?: string;
}

export function emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logGroupName",
      "The name of the log group for log publishing.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "logStreamNamePrefix",
      "The specified name prefix for log streams.",
      [],
      false,
      true,
    ),
  ];
}
