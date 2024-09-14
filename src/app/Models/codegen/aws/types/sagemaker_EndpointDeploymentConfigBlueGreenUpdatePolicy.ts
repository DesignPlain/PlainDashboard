import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration,
  sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration_GetTypes,
} from "./sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration";

export interface sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicy {
  // Defines the traffic routing strategy to shift traffic from the old fleet to the new fleet during an endpoint deployment. See Traffic Routing Configuration.
  trafficRoutingConfiguration?: sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;

  //
  maximumExecutionTimeoutInSeconds?: number;

  // Additional waiting time in seconds after the completion of an endpoint deployment before terminating the old endpoint fleet. Default is `0`. Valid values are between `0` and `3600`.
  terminationWaitInSeconds?: number;
}

export function sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "trafficRoutingConfiguration",
      "Defines the traffic routing strategy to shift traffic from the old fleet to the new fleet during an endpoint deployment. See Traffic Routing Configuration.",
      () =>
        sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumExecutionTimeoutInSeconds",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "terminationWaitInSeconds",
      "Additional waiting time in seconds after the completion of an endpoint deployment before terminating the old endpoint fleet. Default is `0`. Valid values are between `0` and `3600`.",
      () => [],
      false,
      false,
    ),
  ];
}
