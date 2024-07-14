import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

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
      [],
      false,
      false,
    ),
  ];
}
