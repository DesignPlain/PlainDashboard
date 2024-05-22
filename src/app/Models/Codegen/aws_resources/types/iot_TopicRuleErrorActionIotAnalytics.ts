import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iot_TopicRuleErrorActionIotAnalytics {
  // The payload that contains a JSON array of records will be sent to IoT Analytics via a batch call.
  batchMode?: boolean;

  // Name of AWS IOT Analytics channel.
  channelName?: string;

  // The ARN of the IAM role that grants access.
  roleArn?: string;
}

export function iot_TopicRuleErrorActionIotAnalytics_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "batchMode",
      "The payload that contains a JSON array of records will be sent to IoT Analytics via a batch call.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "channelName",
      "Name of AWS IOT Analytics channel.",
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
