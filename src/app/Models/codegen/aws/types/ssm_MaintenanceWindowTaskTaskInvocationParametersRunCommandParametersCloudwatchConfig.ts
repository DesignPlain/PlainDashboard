import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig {
  // The name of the CloudWatch log group where you want to send command output. If you don't specify a group name, Systems Manager automatically creates a log group for you. The log group uses the following naming format: aws/ssm/SystemsManagerDocumentName.
  cloudwatchLogGroupName?: string;

  // Enables Systems Manager to send command output to CloudWatch Logs.
  cloudwatchOutputEnabled?: boolean;
}

export function ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'cloudwatchLogGroupName',
      "The name of the CloudWatch log group where you want to send command output. If you don't specify a group name, Systems Manager automatically creates a log group for you. The log group uses the following naming format: aws/ssm/SystemsManagerDocumentName.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'cloudwatchOutputEnabled',
      'Enables Systems Manager to send command output to CloudWatch Logs.',
      () => [],
      false,
      false,
    ),
  ];
}
