import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedLinear {
  // The number of minutes between each incremental traffic shift of a `TimeBasedLinear` deployment.
  interval?: number;

  // The percentage of traffic that is shifted at the start of each increment of a `TimeBasedLinear` deployment.
  percentage?: number;
}

export function codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedLinear_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'interval',
      'The number of minutes between each incremental traffic shift of a `TimeBasedLinear` deployment.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'percentage',
      'The percentage of traffic that is shifted at the start of each increment of a `TimeBasedLinear` deployment.',
      () => [],
      false,
      true,
    ),
  ];
}
