import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_EndpointDeploymentConfigAutoRollbackConfigurationAlarm,
  sagemaker_EndpointDeploymentConfigAutoRollbackConfigurationAlarm_GetTypes,
} from "./sagemaker_EndpointDeploymentConfigAutoRollbackConfigurationAlarm";

export interface sagemaker_EndpointDeploymentConfigAutoRollbackConfiguration {
  // List of CloudWatch alarms in your account that are configured to monitor metrics on an endpoint. If any alarms are tripped during a deployment, SageMaker rolls back the deployment. See Alarms.
  alarms?: Array<sagemaker_EndpointDeploymentConfigAutoRollbackConfigurationAlarm>;
}

export function sagemaker_EndpointDeploymentConfigAutoRollbackConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "alarms",
      "List of CloudWatch alarms in your account that are configured to monitor metrics on an endpoint. If any alarms are tripped during a deployment, SageMaker rolls back the deployment. See Alarms.",
      sagemaker_EndpointDeploymentConfigAutoRollbackConfigurationAlarm_GetTypes(),
      false,
      false,
    ),
  ];
}
