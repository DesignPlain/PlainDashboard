import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetric,
  appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetric_GetTypes,
} from './appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetric';

export interface appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStat {
  // Structure that defines the CloudWatch metric to return, including the metric name, namespace, and dimensions.
  metric?: appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetric;

  // Statistic of the metrics to return.
  stat?: string;

  // Unit of the metrics to return.
  unit?: string;
}

export function appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'metric',
      'Structure that defines the CloudWatch metric to return, including the metric name, namespace, and dimensions.',
      () =>
        appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetric_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'stat',
      'Statistic of the metrics to return.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'unit',
      'Unit of the metrics to return.',
      () => [],
      false,
      false,
    ),
  ];
}
