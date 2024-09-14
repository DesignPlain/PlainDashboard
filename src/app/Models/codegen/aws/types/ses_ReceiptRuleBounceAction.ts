import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ses_ReceiptRuleBounceAction {
  // The ARN of an SNS topic to notify
  topicArn?: string;

  // The message to send
  message?: string;

  // The position of the action in the receipt rule
  position?: number;

  // The email address of the sender
  sender?: string;

  // The RFC 5321 SMTP reply code
  smtpReplyCode?: string;

  // The RFC 3463 SMTP enhanced status code
  statusCode?: string;
}

export function ses_ReceiptRuleBounceAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "topicArn",
      "The ARN of an SNS topic to notify",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "message",
      "The message to send",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "position",
      "The position of the action in the receipt rule",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sender",
      "The email address of the sender",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "smtpReplyCode",
      "The RFC 5321 SMTP reply code",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "statusCode",
      "The RFC 3463 SMTP enhanced status code",
      () => [],
      false,
      false,
    ),
  ];
}
