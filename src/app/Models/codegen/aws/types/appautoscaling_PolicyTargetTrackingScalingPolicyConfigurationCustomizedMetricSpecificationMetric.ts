import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStat,
  appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStat_GetTypes,
} from './appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStat';

export interface appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetric {
  // Math expression used on the returned metric. You must specify either `expression` or `metric_stat`, but not both.
  expression?: string;

  // Short name for the metric used in target tracking scaling policy.
  id?: string;

  // Human-readable label for this metric or expression.
  label?: string;

  // Structure that defines CloudWatch metric to be used in target tracking scaling policy. You must specify either `expression` or `metric_stat`, but not both.
  metricStat?: appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStat;

  // Boolean that indicates whether to return the timestamps and raw data values of this metric, the default is true
  returnData?: boolean;
}

export function appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'expression',
      'Math expression used on the returned metric. You must specify either `expression` or `metric_stat`, but not both.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      'Short name for the metric used in target tracking scaling policy.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'label',
      'Human-readable label for this metric or expression.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'metricStat',
      'Structure that defines CloudWatch metric to be used in target tracking scaling policy. You must specify either `expression` or `metric_stat`, but not both.',
      () =>
        appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStat_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'returnData',
      'Boolean that indicates whether to return the timestamps and raw data values of this metric, the default is true',
      () => [],
      false,
      false,
    ),
  ];
}
