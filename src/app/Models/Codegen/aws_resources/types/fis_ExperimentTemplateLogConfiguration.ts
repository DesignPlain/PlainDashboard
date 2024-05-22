import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  fis_ExperimentTemplateLogConfigurationCloudwatchLogsConfiguration,
  fis_ExperimentTemplateLogConfigurationCloudwatchLogsConfiguration_GetTypes,
} from "./fis_ExperimentTemplateLogConfigurationCloudwatchLogsConfiguration";
import {
  fis_ExperimentTemplateLogConfigurationS3Configuration,
  fis_ExperimentTemplateLogConfigurationS3Configuration_GetTypes,
} from "./fis_ExperimentTemplateLogConfigurationS3Configuration";

export interface fis_ExperimentTemplateLogConfiguration {
  // The configuration for experiment logging to Amazon CloudWatch Logs. See below.
  cloudwatchLogsConfiguration?: fis_ExperimentTemplateLogConfigurationCloudwatchLogsConfiguration;

  // The schema version. See [documentation](https://docs.aws.amazon.com/fis/latest/userguide/monitoring-logging.html#experiment-log-schema) for the list of schema versions.
  logSchemaVersion?: number;

  // The configuration for experiment logging to Amazon S3. See below.
  s3Configuration?: fis_ExperimentTemplateLogConfigurationS3Configuration;
}

export function fis_ExperimentTemplateLogConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogsConfiguration",
      "The configuration for experiment logging to Amazon CloudWatch Logs. See below.",
      fis_ExperimentTemplateLogConfigurationCloudwatchLogsConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "logSchemaVersion",
      "The schema version. See [documentation](https://docs.aws.amazon.com/fis/latest/userguide/monitoring-logging.html#experiment-log-schema) for the list of schema versions.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3Configuration",
      "The configuration for experiment logging to Amazon S3. See below.",
      fis_ExperimentTemplateLogConfigurationS3Configuration_GetTypes(),
      false,
      false,
    ),
  ];
}
