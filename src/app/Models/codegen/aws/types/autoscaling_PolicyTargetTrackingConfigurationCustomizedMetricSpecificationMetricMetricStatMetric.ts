import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension,
  autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension_GetTypes,
} from './autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension';

export interface autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric {
  // Dimensions of the metric.
  dimensions?: Array<autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension>;

  // Name of the metric.
  metricName?: string;

  // Namespace of the metric.
  namespace?: string;
}

export function autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'dimensions',
      'Dimensions of the metric.',
      () =>
        autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'metricName',
      'Name of the metric.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'namespace',
      'Namespace of the metric.',
      () => [],
      true,
      false,
    ),
  ];
}
