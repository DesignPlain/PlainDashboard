import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lambda_EventSourceMappingAmazonManagedKafkaEventSourceConfig {
  // A Kafka consumer group ID between 1 and 200 characters for use when creating this event source mapping. If one is not specified, this value will be automatically generated. See [AmazonManagedKafkaEventSourceConfig Syntax](https://docs.aws.amazon.com/lambda/latest/dg/API_AmazonManagedKafkaEventSourceConfig.html).
  consumerGroupId?: string;
}

export function lambda_EventSourceMappingAmazonManagedKafkaEventSourceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "consumerGroupId",
      "A Kafka consumer group ID between 1 and 200 characters for use when creating this event source mapping. If one is not specified, this value will be automatically generated. See [AmazonManagedKafkaEventSourceConfig Syntax](https://docs.aws.amazon.com/lambda/latest/dg/API_AmazonManagedKafkaEventSourceConfig.html).",
      [],
      false,
      true,
    ),
  ];
}
