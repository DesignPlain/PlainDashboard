import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_EndpointDeploymentConfigAutoRollbackConfiguration,
  sagemaker_EndpointDeploymentConfigAutoRollbackConfiguration_GetTypes,
} from "./sagemaker_EndpointDeploymentConfigAutoRollbackConfiguration";
import {
  sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicy,
  sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicy_GetTypes,
} from "./sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicy";
import {
  sagemaker_EndpointDeploymentConfigRollingUpdatePolicy,
  sagemaker_EndpointDeploymentConfigRollingUpdatePolicy_GetTypes,
} from "./sagemaker_EndpointDeploymentConfigRollingUpdatePolicy";

export interface sagemaker_EndpointDeploymentConfig {
  // Automatic rollback configuration for handling endpoint deployment failures and recovery. See Auto Rollback Configuration.
  autoRollbackConfiguration?: sagemaker_EndpointDeploymentConfigAutoRollbackConfiguration;

  // Update policy for a blue/green deployment. If this update policy is specified, SageMaker creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips traffic to the new fleet according to the specified traffic routing configuration. Only one update policy should be used in the deployment configuration. If no update policy is specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting by default. See Blue Green Update Config.
  blueGreenUpdatePolicy?: sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicy;

  // Specifies a rolling deployment strategy for updating a SageMaker endpoint. See Rolling Update Policy.
  rollingUpdatePolicy?: sagemaker_EndpointDeploymentConfigRollingUpdatePolicy;
}

export function sagemaker_EndpointDeploymentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "autoRollbackConfiguration",
      "Automatic rollback configuration for handling endpoint deployment failures and recovery. See Auto Rollback Configuration.",
      () =>
        sagemaker_EndpointDeploymentConfigAutoRollbackConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "blueGreenUpdatePolicy",
      "Update policy for a blue/green deployment. If this update policy is specified, SageMaker creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips traffic to the new fleet according to the specified traffic routing configuration. Only one update policy should be used in the deployment configuration. If no update policy is specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting by default. See Blue Green Update Config.",
      () => sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rollingUpdatePolicy",
      "Specifies a rolling deployment strategy for updating a SageMaker endpoint. See Rolling Update Policy.",
      () => sagemaker_EndpointDeploymentConfigRollingUpdatePolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
