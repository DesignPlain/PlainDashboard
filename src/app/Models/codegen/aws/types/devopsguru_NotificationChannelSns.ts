import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface devopsguru_NotificationChannelSns {
  // Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic.
  topicArn?: string;
}

export function devopsguru_NotificationChannelSns_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "topicArn",
      "Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic.",
      () => [],
      true,
      false,
    ),
  ];
}
