import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  codedeploy_DeploymentConfigMinimumHealthyHosts,
  codedeploy_DeploymentConfigMinimumHealthyHosts_GetTypes,
} from "../types/codedeploy_DeploymentConfigMinimumHealthyHosts";
import {
  codedeploy_DeploymentConfigTrafficRoutingConfig,
  codedeploy_DeploymentConfigTrafficRoutingConfig_GetTypes,
} from "../types/codedeploy_DeploymentConfigTrafficRoutingConfig";

export interface DeploymentConfigArgs {
  // A minimum_healthy_hosts block. Required for `Server` compute platform. Minimum Healthy Hosts are documented below.
  minimumHealthyHosts?: codedeploy_DeploymentConfigMinimumHealthyHosts;

  // A traffic_routing_config block. Traffic Routing Config is documented below.
  trafficRoutingConfig?: codedeploy_DeploymentConfigTrafficRoutingConfig;

  // The compute platform can be `Server`, `Lambda`, or `ECS`. Default is `Server`.
  computePlatform?: string;

  // The name of the deployment config.
  deploymentConfigName?: string;
}
export class DeploymentConfig extends DS_Resource {
  // The ARN of the deployment config.
  public arn?: string;

  // The compute platform can be `Server`, `Lambda`, or `ECS`. Default is `Server`.
  public computePlatform?: string;

  // The AWS Assigned deployment config id
  public deploymentConfigId?: string;

  // The name of the deployment config.
  public deploymentConfigName?: string;

  // A minimum_healthy_hosts block. Required for `Server` compute platform. Minimum Healthy Hosts are documented below.
  public minimumHealthyHosts?: codedeploy_DeploymentConfigMinimumHealthyHosts;

  // A traffic_routing_config block. Traffic Routing Config is documented below.
  public trafficRoutingConfig?: codedeploy_DeploymentConfigTrafficRoutingConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "deploymentConfigName",
        "The name of the deployment config.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "minimumHealthyHosts",
        "A minimum_healthy_hosts block. Required for `Server` compute platform. Minimum Healthy Hosts are documented below.",
        () => codedeploy_DeploymentConfigMinimumHealthyHosts_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "trafficRoutingConfig",
        "A traffic_routing_config block. Traffic Routing Config is documented below.",
        () => codedeploy_DeploymentConfigTrafficRoutingConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "computePlatform",
        "The compute platform can be `Server`, `Lambda`, or `ECS`. Default is `Server`.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
