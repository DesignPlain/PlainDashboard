import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedCanary {
  // The number of minutes between the first and second traffic shifts of a `TimeBasedCanary` deployment.
  interval?: number;

  // The percentage of traffic to shift in the first increment of a `TimeBasedCanary` deployment.
  percentage?: number;
}

export function codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedCanary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'interval',
      'The number of minutes between the first and second traffic shifts of a `TimeBasedCanary` deployment.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'percentage',
      'The percentage of traffic to shift in the first increment of a `TimeBasedCanary` deployment.',
      () => [],
      false,
      true,
    ),
  ];
}
