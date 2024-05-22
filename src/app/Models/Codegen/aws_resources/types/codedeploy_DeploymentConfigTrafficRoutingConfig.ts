import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedCanary,
  codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedCanary_GetTypes,
} from "./codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedCanary";
import {
  codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedLinear,
  codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedLinear_GetTypes,
} from "./codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedLinear";

export interface codedeploy_DeploymentConfigTrafficRoutingConfig {
  // The time based canary configuration information. If `type` is `TimeBasedLinear`, use `time_based_linear` instead.
  timeBasedCanary?: codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedCanary;

  // The time based linear configuration information. If `type` is `TimeBasedCanary`, use `time_based_canary` instead.
  timeBasedLinear?: codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedLinear;

  // Type of traffic routing config. One of `TimeBasedCanary`, `TimeBasedLinear`, `AllAtOnce`.
  type?: string;
}

export function codedeploy_DeploymentConfigTrafficRoutingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "timeBasedCanary",
      "The time based canary configuration information. If `type` is `TimeBasedLinear`, use `time_based_linear` instead.",
      codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedCanary_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeBasedLinear",
      "The time based linear configuration information. If `type` is `TimeBasedCanary`, use `time_based_canary` instead.",
      codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedLinear_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of traffic routing config. One of `TimeBasedCanary`, `TimeBasedLinear`, `AllAtOnce`.",
      [],
      false,
      true,
    ),
  ];
}
