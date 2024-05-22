import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iot_TopicRuleErrorActionSns {
  // The ARN of the IAM role that grants access.
  roleArn?: string;

  // The ARN of the SNS topic.
  targetArn?: string;

  // The message format of the message to publish. Accepted values are "JSON" and "RAW".
  messageFormat?: string;
}

export function iot_TopicRuleErrorActionSns_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM role that grants access.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetArn",
      "The ARN of the SNS topic.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageFormat",
      'The message format of the message to publish. Accepted values are "JSON" and "RAW".',
      [],
      false,
      false,
    ),
  ];
}
