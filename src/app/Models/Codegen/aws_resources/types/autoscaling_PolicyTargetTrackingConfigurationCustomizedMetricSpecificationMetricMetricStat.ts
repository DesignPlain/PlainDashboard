import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric,
  autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric_GetTypes,
} from "./autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric";

export interface autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStat {
  // Statistic of the metrics to return.
  stat?: string;

  // Unit of the metrics to return.
  unit?: string;

  // Structure that defines the CloudWatch metric to return, including the metric name, namespace, and dimensions.
  metric?: autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric;
}

export function autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "stat",
      "Statistic of the metrics to return.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "unit",
      "Unit of the metrics to return.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "metric",
      "Structure that defines the CloudWatch metric to return, including the metric name, namespace, and dimensions.",
      autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric_GetTypes(),
      true,
      false,
    ),
  ];
}
