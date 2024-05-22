import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration {
  // Describes whether to use the default CloudWatch logging configuration for an application. Valid values: `CUSTOM`, `DEFAULT`. Set this attribute to `CUSTOM` in order for any specified `log_level` or `metrics_level` attribute values to be effective.
  configurationType?: string;

  // Describes the verbosity of the CloudWatch Logs for an application. Valid values: `DEBUG`, `ERROR`, `INFO`, `WARN`.
  logLevel?: string;

  // Describes the granularity of the CloudWatch Logs for an application. Valid values: `APPLICATION`, `OPERATOR`, `PARALLELISM`, `TASK`.
  metricsLevel?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "configurationType",
      "Describes whether to use the default CloudWatch logging configuration for an application. Valid values: `CUSTOM`, `DEFAULT`. Set this attribute to `CUSTOM` in order for any specified `log_level` or `metrics_level` attribute values to be effective.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logLevel",
      "Describes the verbosity of the CloudWatch Logs for an application. Valid values: `DEBUG`, `ERROR`, `INFO`, `WARN`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricsLevel",
      "Describes the granularity of the CloudWatch Logs for an application. Valid values: `APPLICATION`, `OPERATOR`, `PARALLELISM`, `TASK`.",
      [],
      false,
      false,
    ),
  ];
}
