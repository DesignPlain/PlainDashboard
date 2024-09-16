import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecification,
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecification_GetTypes,
} from './autoscaling_PolicyPredictiveScalingConfigurationMetricSpecification';

export interface autoscaling_PolicyPredictiveScalingConfiguration {
  // Amount of time, in seconds, by which the instance launch time can be advanced. Minimum is `0`.
  schedulingBufferTime?: string;

  // Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity of the Auto Scaling group. Valid values are `HonorMaxCapacity` or `IncreaseMaxCapacity`. Default is `HonorMaxCapacity`.
  maxCapacityBreachBehavior?: string;

  // Size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. Valid range is `0` to `100`. If set to `0`, Amazon EC2 Auto Scaling may scale capacity higher than the maximum capacity to equal but not exceed forecast capacity.
  maxCapacityBuffer?: string;

  // This structure includes the metrics and target utilization to use for predictive scaling.
  metricSpecification?: autoscaling_PolicyPredictiveScalingConfigurationMetricSpecification;

  // Predictive scaling mode. Valid values are `ForecastAndScale` and `ForecastOnly`. Default is `ForecastOnly`.
  mode?: string;
}

export function autoscaling_PolicyPredictiveScalingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'schedulingBufferTime',
      'Amount of time, in seconds, by which the instance launch time can be advanced. Minimum is `0`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'maxCapacityBreachBehavior',
      'Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity of the Auto Scaling group. Valid values are `HonorMaxCapacity` or `IncreaseMaxCapacity`. Default is `HonorMaxCapacity`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'maxCapacityBuffer',
      'Size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. Valid range is `0` to `100`. If set to `0`, Amazon EC2 Auto Scaling may scale capacity higher than the maximum capacity to equal but not exceed forecast capacity.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'metricSpecification',
      'This structure includes the metrics and target utilization to use for predictive scaling.',
      () =>
        autoscaling_PolicyPredictiveScalingConfigurationMetricSpecification_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'mode',
      'Predictive scaling mode. Valid values are `ForecastAndScale` and `ForecastOnly`. Default is `ForecastOnly`.',
      () => [],
      false,
      false,
    ),
  ];
}
