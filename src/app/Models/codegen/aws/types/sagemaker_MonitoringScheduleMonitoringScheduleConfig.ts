import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_MonitoringScheduleMonitoringScheduleConfigScheduleConfig,
  sagemaker_MonitoringScheduleMonitoringScheduleConfigScheduleConfig_GetTypes,
} from "./sagemaker_MonitoringScheduleMonitoringScheduleConfigScheduleConfig";

export interface sagemaker_MonitoringScheduleMonitoringScheduleConfig {
  // The name of the monitoring job definition to schedule.
  monitoringJobDefinitionName?: string;

  // The type of the monitoring job definition to schedule. Valid values are `DataQuality`, `ModelQuality`, `ModelBias` or `ModelExplainability`
  monitoringType?: string;

  // Configures the monitoring schedule. Fields are documented below.
  scheduleConfig?: sagemaker_MonitoringScheduleMonitoringScheduleConfigScheduleConfig;
}

export function sagemaker_MonitoringScheduleMonitoringScheduleConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "monitoringJobDefinitionName",
      "The name of the monitoring job definition to schedule.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "monitoringType",
      "The type of the monitoring job definition to schedule. Valid values are `DataQuality`, `ModelQuality`, `ModelBias` or `ModelExplainability`",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scheduleConfig",
      "Configures the monitoring schedule. Fields are documented below.",
      () =>
        sagemaker_MonitoringScheduleMonitoringScheduleConfigScheduleConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
