import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_WorkteamNotificationConfiguration {
  // The ARN for the SNS topic to which notifications should be published.
  notificationTopicArn?: string;
}

export function sagemaker_WorkteamNotificationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "notificationTopicArn",
      "The ARN for the SNS topic to which notifications should be published.",
      () => [],
      false,
      false,
    ),
  ];
}
