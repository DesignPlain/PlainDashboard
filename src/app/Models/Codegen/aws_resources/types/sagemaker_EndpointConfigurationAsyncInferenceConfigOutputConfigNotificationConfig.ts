import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig {
  // Amazon SNS topic to post a notification to when inference fails. If no topic is provided, no notification is sent on failure.
  errorTopic?: string;

  // The Amazon SNS topics where you want the inference response to be included. Valid values are `SUCCESS_NOTIFICATION_TOPIC` and `ERROR_NOTIFICATION_TOPIC`.
  includeInferenceResponseIns?: Array<string>;

  // Amazon SNS topic to post a notification to when inference completes successfully. If no topic is provided, no notification is sent on success.
  successTopic?: string;
}

export function sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "errorTopic",
      "Amazon SNS topic to post a notification to when inference fails. If no topic is provided, no notification is sent on failure.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includeInferenceResponseIns",
      "The Amazon SNS topics where you want the inference response to be included. Valid values are `SUCCESS_NOTIFICATION_TOPIC` and `ERROR_NOTIFICATION_TOPIC`.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "successTopic",
      "Amazon SNS topic to post a notification to when inference completes successfully. If no topic is provided, no notification is sent on success.",
      [],
      false,
      true,
    ),
  ];
}
