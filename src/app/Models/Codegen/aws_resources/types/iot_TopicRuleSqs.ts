import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_TopicRuleSqs {
  // Specifies whether to use Base64 encoding.
  useBase64?: boolean;

  // The URL of the Amazon SQS queue.
  queueUrl?: string;

  // The ARN of the IAM role that grants access.
  roleArn?: string;
}

export function iot_TopicRuleSqs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "useBase64",
      "Specifies whether to use Base64 encoding.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queueUrl",
      "The URL of the Amazon SQS queue.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM role that grants access.",
      [],
      true,
      false,
    ),
  ];
}
