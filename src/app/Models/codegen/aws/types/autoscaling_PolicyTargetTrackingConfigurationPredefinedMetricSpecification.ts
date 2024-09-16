import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface autoscaling_PolicyTargetTrackingConfigurationPredefinedMetricSpecification {
  // Metric type.
  predefinedMetricType?: string;

  // Identifies the resource associated with the metric type.
  resourceLabel?: string;
}

export function autoscaling_PolicyTargetTrackingConfigurationPredefinedMetricSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'predefinedMetricType',
      'Metric type.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourceLabel',
      'Identifies the resource associated with the metric type.',
      () => [],
      false,
      false,
    ),
  ];
}
