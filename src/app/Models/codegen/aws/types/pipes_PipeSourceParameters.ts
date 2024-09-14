import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  pipes_PipeSourceParametersSqsQueueParameters,
  pipes_PipeSourceParametersSqsQueueParameters_GetTypes,
} from "./pipes_PipeSourceParametersSqsQueueParameters";
import {
  pipes_PipeSourceParametersActivemqBrokerParameters,
  pipes_PipeSourceParametersActivemqBrokerParameters_GetTypes,
} from "./pipes_PipeSourceParametersActivemqBrokerParameters";
import {
  pipes_PipeSourceParametersDynamodbStreamParameters,
  pipes_PipeSourceParametersDynamodbStreamParameters_GetTypes,
} from "./pipes_PipeSourceParametersDynamodbStreamParameters";
import {
  pipes_PipeSourceParametersFilterCriteria,
  pipes_PipeSourceParametersFilterCriteria_GetTypes,
} from "./pipes_PipeSourceParametersFilterCriteria";
import {
  pipes_PipeSourceParametersKinesisStreamParameters,
  pipes_PipeSourceParametersKinesisStreamParameters_GetTypes,
} from "./pipes_PipeSourceParametersKinesisStreamParameters";
import {
  pipes_PipeSourceParametersManagedStreamingKafkaParameters,
  pipes_PipeSourceParametersManagedStreamingKafkaParameters_GetTypes,
} from "./pipes_PipeSourceParametersManagedStreamingKafkaParameters";
import {
  pipes_PipeSourceParametersRabbitmqBrokerParameters,
  pipes_PipeSourceParametersRabbitmqBrokerParameters_GetTypes,
} from "./pipes_PipeSourceParametersRabbitmqBrokerParameters";
import {
  pipes_PipeSourceParametersSelfManagedKafkaParameters,
  pipes_PipeSourceParametersSelfManagedKafkaParameters_GetTypes,
} from "./pipes_PipeSourceParametersSelfManagedKafkaParameters";

export interface pipes_PipeSourceParameters {
  // The collection of event patterns used to [filter events](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-filtering.html). Detailed below.
  filterCriteria?: pipes_PipeSourceParametersFilterCriteria;

  // The parameters for using a Kinesis stream as a source. Detailed below.
  kinesisStreamParameters?: pipes_PipeSourceParametersKinesisStreamParameters;

  // The parameters for using an MSK stream as a source. Detailed below.
  managedStreamingKafkaParameters?: pipes_PipeSourceParametersManagedStreamingKafkaParameters;

  // The parameters for using a Rabbit MQ broker as a source. Detailed below.
  rabbitmqBrokerParameters?: pipes_PipeSourceParametersRabbitmqBrokerParameters;

  // The parameters for using a self-managed Apache Kafka stream as a source. Detailed below.
  selfManagedKafkaParameters?: pipes_PipeSourceParametersSelfManagedKafkaParameters;

  // The parameters for using a Amazon SQS stream as a source. Detailed below.
  sqsQueueParameters?: pipes_PipeSourceParametersSqsQueueParameters;

  // The parameters for using an Active MQ broker as a source. Detailed below.
  activemqBrokerParameters?: pipes_PipeSourceParametersActivemqBrokerParameters;

  // The parameters for using a DynamoDB stream as a source.  Detailed below.
  dynamodbStreamParameters?: pipes_PipeSourceParametersDynamodbStreamParameters;
}

export function pipes_PipeSourceParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "selfManagedKafkaParameters",
      "The parameters for using a self-managed Apache Kafka stream as a source. Detailed below.",
      () => pipes_PipeSourceParametersSelfManagedKafkaParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqsQueueParameters",
      "The parameters for using a Amazon SQS stream as a source. Detailed below.",
      () => pipes_PipeSourceParametersSqsQueueParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "activemqBrokerParameters",
      "The parameters for using an Active MQ broker as a source. Detailed below.",
      () => pipes_PipeSourceParametersActivemqBrokerParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dynamodbStreamParameters",
      "The parameters for using a DynamoDB stream as a source.  Detailed below.",
      () => pipes_PipeSourceParametersDynamodbStreamParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "filterCriteria",
      "The collection of event patterns used to [filter events](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-filtering.html). Detailed below.",
      () => pipes_PipeSourceParametersFilterCriteria_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisStreamParameters",
      "The parameters for using a Kinesis stream as a source. Detailed below.",
      () => pipes_PipeSourceParametersKinesisStreamParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "managedStreamingKafkaParameters",
      "The parameters for using an MSK stream as a source. Detailed below.",
      () =>
        pipes_PipeSourceParametersManagedStreamingKafkaParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rabbitmqBrokerParameters",
      "The parameters for using a Rabbit MQ broker as a source. Detailed below.",
      () => pipes_PipeSourceParametersRabbitmqBrokerParameters_GetTypes(),
      false,
      false,
    ),
  ];
}
