import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  codedeploy_DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption,
  codedeploy_DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption_GetTypes,
} from "./codedeploy_DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption";
import {
  codedeploy_DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess,
  codedeploy_DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess_GetTypes,
} from "./codedeploy_DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess";
import {
  codedeploy_DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption,
  codedeploy_DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption_GetTypes,
} from "./codedeploy_DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption";

export interface codedeploy_DeploymentGroupBlueGreenDeploymentConfig {
  // Information about how instances are provisioned for a replacement environment in a blue/green deployment (documented below).
  greenFleetProvisioningOption?: codedeploy_DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption;

  /*
Information about whether to terminate instances in the original fleet during a blue/green deployment (documented below).

_Only one `blue_green_deployment_config` is allowed_.
*/
  terminateBlueInstancesOnDeploymentSuccess?: codedeploy_DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess;

  // Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment (documented below).
  deploymentReadyOption?: codedeploy_DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption;
}

export function codedeploy_DeploymentGroupBlueGreenDeploymentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "greenFleetProvisioningOption",
      "Information about how instances are provisioned for a replacement environment in a blue/green deployment (documented below).",
      () =>
        codedeploy_DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "terminateBlueInstancesOnDeploymentSuccess",
      "Information about whether to terminate instances in the original fleet during a blue/green deployment (documented below).\n\n_Only one `blue_green_deployment_config` is allowed_.",
      () =>
        codedeploy_DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "deploymentReadyOption",
      "Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment (documented below).",
      () =>
        codedeploy_DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption_GetTypes(),
      false,
      false,
    ),
  ];
}
