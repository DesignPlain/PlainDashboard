import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfig,
  bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfig_GetTypes,
} from "./bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfig";
import {
  bedrockmodel_InvocationLoggingConfigurationLoggingConfigS3Config,
  bedrockmodel_InvocationLoggingConfigurationLoggingConfigS3Config_GetTypes,
} from "./bedrockmodel_InvocationLoggingConfigurationLoggingConfigS3Config";

export interface bedrockmodel_InvocationLoggingConfigurationLoggingConfig {
  // CloudWatch logging configuration.
  cloudwatchConfig?: bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfig;

  // Set to include embeddings data in the log delivery.
  embeddingDataDeliveryEnabled?: boolean;

  // Set to include image data in the log delivery.
  imageDataDeliveryEnabled?: boolean;

  // S3 configuration for storing log data.
  s3Config?: bedrockmodel_InvocationLoggingConfigurationLoggingConfigS3Config;

  // Set to include text data in the log delivery.
  textDataDeliveryEnabled?: boolean;
}

export function bedrockmodel_InvocationLoggingConfigurationLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "embeddingDataDeliveryEnabled",
      "Set to include embeddings data in the log delivery.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "imageDataDeliveryEnabled",
      "Set to include image data in the log delivery.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3Config",
      "S3 configuration for storing log data.",
      bedrockmodel_InvocationLoggingConfigurationLoggingConfigS3Config_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "textDataDeliveryEnabled",
      "Set to include text data in the log delivery.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchConfig",
      "CloudWatch logging configuration.",
      bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
