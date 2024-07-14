import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_EndpointDeploymentConfigAutoRollbackConfigurationAlarm {
  // The name of a CloudWatch alarm in your account.
  alarmName?: string;
}

export function sagemaker_EndpointDeploymentConfigAutoRollbackConfigurationAlarm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "alarmName",
      "The name of a CloudWatch alarm in your account.",
      [],
      true,
      false,
    ),
  ];
}
