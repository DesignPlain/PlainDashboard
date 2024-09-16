import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_EndpointDeploymentConfigAutoRollbackConfigurationAlarm {
  // The name of a CloudWatch alarm in your account.
  alarmName?: string;
}

export function sagemaker_EndpointDeploymentConfigAutoRollbackConfigurationAlarm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'alarmName',
      'The name of a CloudWatch alarm in your account.',
      () => [],
      true,
      false,
    ),
  ];
}
