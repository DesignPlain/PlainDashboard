import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_EndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize,
  sagemaker_EndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize_GetTypes,
} from "./sagemaker_EndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize";
import {
  sagemaker_EndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize,
  sagemaker_EndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize_GetTypes,
} from "./sagemaker_EndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize";

export interface sagemaker_EndpointDeploymentConfigRollingUpdatePolicy {
  // Batch size for each rolling step to provision capacity and turn on traffic on the new endpoint fleet, and terminate capacity on the old endpoint fleet. Value must be between 5%!t(MISSING)o 50%!o(MISSING)f the variant's total instance count. See Maximum Batch Size.
  maximumBatchSize?: sagemaker_EndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize;

  // The time limit for the total deployment. Exceeding this limit causes a timeout. Valid values are between `600` and `14400`.
  maximumExecutionTimeoutInSeconds?: number;

  // Batch size for rollback to the old endpoint fleet. Each rolling step to provision capacity and turn on traffic on the old endpoint fleet, and terminate capacity on the new endpoint fleet. If this field is absent, the default value will be set to 100%!o(MISSING)f total capacity which means to bring up the whole capacity of the old fleet at once during rollback. See Rollback Maximum Batch Size.
  rollbackMaximumBatchSize?: sagemaker_EndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize;

  // The length of the baking period, during which SageMaker monitors alarms for each batch on the new fleet. Valid values are between `0` and `3600`.
  waitIntervalInSeconds?: number;
}

export function sagemaker_EndpointDeploymentConfigRollingUpdatePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "maximumBatchSize",
      "Batch size for each rolling step to provision capacity and turn on traffic on the new endpoint fleet, and terminate capacity on the old endpoint fleet. Value must be between 5% to 50% of the variant's total instance count. See Maximum Batch Size.",
      sagemaker_EndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumExecutionTimeoutInSeconds",
      "The time limit for the total deployment. Exceeding this limit causes a timeout. Valid values are between `600` and `14400`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rollbackMaximumBatchSize",
      "Batch size for rollback to the old endpoint fleet. Each rolling step to provision capacity and turn on traffic on the old endpoint fleet, and terminate capacity on the new endpoint fleet. If this field is absent, the default value will be set to 100% of total capacity which means to bring up the whole capacity of the old fleet at once during rollback. See Rollback Maximum Batch Size.",
      sagemaker_EndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "waitIntervalInSeconds",
      "The length of the baking period, during which SageMaker monitors alarms for each batch on the new fleet. Valid values are between `0` and `3600`.",
      [],
      true,
      false,
    ),
  ];
}
