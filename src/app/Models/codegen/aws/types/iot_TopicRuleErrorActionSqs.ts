import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iot_TopicRuleErrorActionSqs {
  // The URL of the Amazon SQS queue.
  queueUrl?: string;

  // The ARN of the IAM role that grants access.
  roleArn?: string;

  // Specifies whether to use Base64 encoding.
  useBase64?: boolean;
}

export function iot_TopicRuleErrorActionSqs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "queueUrl",
      "The URL of the Amazon SQS queue.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM role that grants access.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useBase64",
      "Specifies whether to use Base64 encoding.",
      () => [],
      true,
      false,
    ),
  ];
}
