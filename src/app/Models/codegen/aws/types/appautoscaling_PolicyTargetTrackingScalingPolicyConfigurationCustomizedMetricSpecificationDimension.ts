import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension {
  // Name of the dimension.
  name?: string;

  // Value of the dimension.
  value?: string;
}

export function appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the dimension.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Value of the dimension.',
      () => [],
      true,
      false,
    ),
  ];
}
