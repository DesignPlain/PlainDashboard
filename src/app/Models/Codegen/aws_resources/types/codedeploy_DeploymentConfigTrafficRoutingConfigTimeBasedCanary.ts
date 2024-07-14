import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedCanary {
  // The percentage of traffic to shift in the first increment of a `TimeBasedCanary` deployment.
  percentage?: number;

  // The number of minutes between the first and second traffic shifts of a `TimeBasedCanary` deployment.
  interval?: number;
}

export function codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedCanary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "percentage",
      "The percentage of traffic to shift in the first increment of a `TimeBasedCanary` deployment.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "interval",
      "The number of minutes between the first and second traffic shifts of a `TimeBasedCanary` deployment.",
      [],
      false,
      true,
    ),
  ];
}
