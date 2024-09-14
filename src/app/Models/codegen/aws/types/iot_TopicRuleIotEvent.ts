import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iot_TopicRuleIotEvent {
  // The ARN of the IAM role that grants access.
  roleArn?: string;

  // The payload that contains a JSON array of records will be sent to IoT Events via a batch call.
  batchMode?: boolean;

  // The name of the AWS IoT Events input.
  inputName?: string;

  // Use this to ensure that only one input (message) with a given messageId is processed by an AWS IoT Events detector.
  messageId?: string;
}

export function iot_TopicRuleIotEvent_GetTypes(): DynamicUIProps[] {
  return [
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
      "batchMode",
      "The payload that contains a JSON array of records will be sent to IoT Events via a batch call.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputName",
      "The name of the AWS IoT Events input.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageId",
      "Use this to ensure that only one input (message) with a given messageId is processed by an AWS IoT Events detector.",
      () => [],
      false,
      false,
    ),
  ];
}
