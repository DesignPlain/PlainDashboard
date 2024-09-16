import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iot_TopicRuleCloudwatchLog {
  // The IAM role ARN that allows access to the CloudWatch alarm.
  roleArn?: string;

  // The payload that contains a JSON array of records will be sent to CloudWatch via a batch call.
  batchMode?: boolean;

  // The CloudWatch log group name.
  logGroupName?: string;
}

export function iot_TopicRuleCloudwatchLog_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The IAM role ARN that allows access to the CloudWatch alarm.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'batchMode',
      'The payload that contains a JSON array of records will be sent to CloudWatch via a batch call.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logGroupName',
      'The CloudWatch log group name.',
      () => [],
      true,
      false,
    ),
  ];
}
