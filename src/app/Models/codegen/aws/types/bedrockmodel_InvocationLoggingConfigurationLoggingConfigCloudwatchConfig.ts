import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config,
  bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config_GetTypes,
} from "./bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config";

export interface bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfig {
  // S3 configuration for delivering a large amount of data.
  largeDataDeliveryS3Config?: bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config;

  // Log group name.
  logGroupName?: string;

  // The role ARN.
  roleArn?: string;
}

export function bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "largeDataDeliveryS3Config",
      "S3 configuration for delivering a large amount of data.",
      () =>
        bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logGroupName",
      "Log group name.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The role ARN.",
      () => [],
      false,
      false,
    ),
  ];
}
