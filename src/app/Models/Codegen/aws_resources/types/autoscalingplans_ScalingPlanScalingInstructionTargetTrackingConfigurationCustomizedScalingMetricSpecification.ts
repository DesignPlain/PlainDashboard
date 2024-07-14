import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification {
  // Dimensions of the metric.
  dimensions?: Map<string, string>;

  // Name of the metric.
  metricName?: string;

  // Namespace of the metric.
  namespace?: string;

  // Statistic of the metric. Valid values: `Average`, `Maximum`, `Minimum`, `SampleCount`, `Sum`.
  statistic?: string;

  // Unit of the metric.
  unit?: string;
}

export function autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metricName",
      "Name of the metric.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Namespace of the metric.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "statistic",
      "Statistic of the metric. Valid values: `Average`, `Maximum`, `Minimum`, `SampleCount`, `Sum`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "unit",
      "Unit of the metric.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "dimensions",
      "Dimensions of the metric.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
