import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  iot_TopicRuleKafkaHeader,
  iot_TopicRuleKafkaHeader_GetTypes,
} from "./iot_TopicRuleKafkaHeader";

export interface iot_TopicRuleKafka {
  // Properties of the Apache Kafka producer client. For more info, see the [AWS documentation](https://docs.aws.amazon.com/iot/latest/developerguide/apache-kafka-rule-action.html).
  clientProperties?: Map<string, string>;

  // The ARN of Kafka action's VPC `aws.iot.TopicRuleDestination`.
  destinationArn?: string;

  // The list of Kafka headers that you specify. Nested arguments below.
  headers?: Array<iot_TopicRuleKafkaHeader>;

  // The Kafka message key.
  key?: string;

  // The Kafka message partition.
  partition?: string;

  // The Kafka topic for messages to be sent to the Kafka broker.
  topic?: string;
}

export function iot_TopicRuleKafka_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destinationArn",
      "The ARN of Kafka action's VPC `aws.iot.TopicRuleDestination`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "The list of Kafka headers that you specify. Nested arguments below.",
      () => iot_TopicRuleKafkaHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The Kafka message key.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "partition",
      "The Kafka message partition.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "topic",
      "The Kafka topic for messages to be sent to the Kafka broker.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "clientProperties",
      "Properties of the Apache Kafka producer client. For more info, see the [AWS documentation](https://docs.aws.amazon.com/iot/latest/developerguide/apache-kafka-rule-action.html).",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
