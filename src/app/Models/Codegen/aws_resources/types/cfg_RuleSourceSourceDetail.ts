import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cfg_RuleSourceSourceDetail {
  // The source of the event, such as an AWS service, that triggers AWS Config to evaluate your AWSresources. This defaults to `aws.config` and is the only valid value.
  eventSource?: string;

  // The frequency that you want AWS Config to run evaluations for a rule that istriggered periodically. If specified, requires `message_type` to be `ScheduledNotification`.
  maximumExecutionFrequency?: string;

  // The type of notification that triggers AWS Config to run an evaluation for a rule. You canspecify the following notification types:
  messageType?: string;
}

export function cfg_RuleSourceSourceDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "maximumExecutionFrequency",
      "The frequency that you want AWS Config to run evaluations for a rule that istriggered periodically. If specified, requires `message_type` to be `ScheduledNotification`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageType",
      "The type of notification that triggers AWS Config to run an evaluation for a rule. You canspecify the following notification types:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventSource",
      "The source of the event, such as an AWS service, that triggers AWS Config to evaluate your AWSresources. This defaults to `aws.config` and is the only valid value.",
      [],
      false,
      false,
    ),
  ];
}
