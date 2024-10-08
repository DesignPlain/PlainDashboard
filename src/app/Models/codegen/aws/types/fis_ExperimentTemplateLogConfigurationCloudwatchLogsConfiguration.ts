import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface fis_ExperimentTemplateLogConfigurationCloudwatchLogsConfiguration {
  // The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.
  logGroupArn?: string;
}

export function fis_ExperimentTemplateLogConfigurationCloudwatchLogsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'logGroupArn',
      'The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.',
      () => [],
      true,
      false,
    ),
  ];
}
