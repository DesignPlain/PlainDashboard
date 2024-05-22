import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesis_FirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration,
  kinesis_FirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration";

export interface kinesis_FirehoseDeliveryStreamMskSourceConfiguration {
  // The authentication configuration of the Amazon MSK cluster. See `authentication_configuration` block below for details.
  authenticationConfiguration?: kinesis_FirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration;

  // The ARN of the Amazon MSK cluster.
  mskClusterArn?: string;

  // The topic name within the Amazon MSK cluster.
  topicName?: string;
}

export function kinesis_FirehoseDeliveryStreamMskSourceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "authenticationConfiguration",
      "The authentication configuration of the Amazon MSK cluster. See `authentication_configuration` block below for details.",
      kinesis_FirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "mskClusterArn",
      "The ARN of the Amazon MSK cluster.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "topicName",
      "The topic name within the Amazon MSK cluster.",
      [],
      true,
      true,
    ),
  ];
}
