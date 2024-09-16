import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iot_TopicRuleErrorActionSns {
  // The message format of the message to publish. Accepted values are "JSON" and "RAW".
  messageFormat?: string;

  // The ARN of the IAM role that grants access.
  roleArn?: string;

  // The ARN of the SNS topic.
  targetArn?: string;
}

export function iot_TopicRuleErrorActionSns_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The ARN of the IAM role that grants access.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'targetArn',
      'The ARN of the SNS topic.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'messageFormat',
      'The message format of the message to publish. Accepted values are "JSON" and "RAW".',
      () => [],
      false,
      false,
    ),
  ];
}
