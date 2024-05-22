import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesisanalyticsv2_ApplicationCloudwatchLoggingOptions {
  //
  cloudwatchLoggingOptionId?: string;

  // The ARN of the CloudWatch log stream to receive application messages.
  logStreamArn?: string;
}

export function kinesisanalyticsv2_ApplicationCloudwatchLoggingOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cloudwatchLoggingOptionId",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logStreamArn",
      "The ARN of the CloudWatch log stream to receive application messages.",
      [],
      true,
      false,
    ),
  ];
}
