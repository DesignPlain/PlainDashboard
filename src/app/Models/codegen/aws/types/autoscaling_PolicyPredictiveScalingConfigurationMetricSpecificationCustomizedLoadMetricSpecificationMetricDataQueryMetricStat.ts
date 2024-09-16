import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric,
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric_GetTypes,
} from './autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric';

export interface autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat {
  // Structure that defines the CloudWatch metric to return, including the metric name, namespace, and dimensions.
  metric?: autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric;

  // Statistic of the metrics to return.
  stat?: string;

  // Unit of the metrics to return.
  unit?: string;
}

export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'metric',
      'Structure that defines the CloudWatch metric to return, including the metric name, namespace, and dimensions.',
      () =>
        autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric_GetTypes(),
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
