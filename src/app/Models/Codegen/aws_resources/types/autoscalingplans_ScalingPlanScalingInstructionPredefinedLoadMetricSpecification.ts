import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface autoscalingplans_ScalingPlanScalingInstructionPredefinedLoadMetricSpecification {
  // Metric type. Valid values: `ALBTargetGroupRequestCount`, `ASGTotalCPUUtilization`, `ASGTotalNetworkIn`, `ASGTotalNetworkOut`.
  predefinedLoadMetricType?: string;

  // Identifies the resource associated with the metric type.
  resourceLabel?: string;
}

export function autoscalingplans_ScalingPlanScalingInstructionPredefinedLoadMetricSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "predefinedLoadMetricType",
      "Metric type. Valid values: `ALBTargetGroupRequestCount`, `ASGTotalCPUUtilization`, `ASGTotalNetworkIn`, `ASGTotalNetworkOut`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceLabel",
      "Identifies the resource associated with the metric type.",
      [],
      false,
      false,
    ),
  ];
}
