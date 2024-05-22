import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  evidently_LaunchMetricMonitorMetricDefinition,
  evidently_LaunchMetricMonitorMetricDefinition_GetTypes,
} from "./evidently_LaunchMetricMonitorMetricDefinition";

export interface evidently_LaunchMetricMonitor {
  // A block that defines the metric. Detailed below.
  metricDefinition?: evidently_LaunchMetricMonitorMetricDefinition;
}

export function evidently_LaunchMetricMonitor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "metricDefinition",
      "A block that defines the metric. Detailed below.",
      evidently_LaunchMetricMonitorMetricDefinition_GetTypes(),
      true,
      false,
    ),
  ];
}
