import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration,
  sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration_GetTypes,
} from "./sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration";

export interface sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicy {
  // Maximum execution timeout for the deployment. Note that the timeout value should be larger than the total waiting time specified in `termination_wait_in_seconds` and `wait_interval_in_seconds`. Valid values are between `600` and `14400`.
  maximumExecutionTimeoutInSeconds?: number;

  // Additional waiting time in seconds after the completion of an endpoint deployment before terminating the old endpoint fleet. Default is `0`. Valid values are between `0` and `3600`.
  terminationWaitInSeconds?: number;

  // Defines the traffic routing strategy to shift traffic from the old fleet to the new fleet during an endpoint deployment. See Traffic Routing Configuration.
  trafficRoutingConfiguration?: sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
}

export function sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumExecutionTimeoutInSeconds",
      "Maximum execution timeout for the deployment. Note that the timeout value should be larger than the total waiting time specified in `termination_wait_in_seconds` and `wait_interval_in_seconds`. Valid values are between `600` and `14400`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "terminationWaitInSeconds",
      "Additional waiting time in seconds after the completion of an endpoint deployment before terminating the old endpoint fleet. Default is `0`. Valid values are between `0` and `3600`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "trafficRoutingConfiguration",
      "Defines the traffic routing strategy to shift traffic from the old fleet to the new fleet during an endpoint deployment. See Traffic Routing Configuration.",
      sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
