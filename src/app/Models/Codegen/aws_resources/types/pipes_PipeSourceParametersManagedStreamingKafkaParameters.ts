import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  pipes_PipeSourceParametersManagedStreamingKafkaParametersCredentials,
  pipes_PipeSourceParametersManagedStreamingKafkaParametersCredentials_GetTypes,
} from "./pipes_PipeSourceParametersManagedStreamingKafkaParametersCredentials";

export interface pipes_PipeSourceParametersManagedStreamingKafkaParameters {
  // The maximum number of records to include in each batch. Maximum value of 10000.
  batchSize?: number;

  // The name of the destination queue to consume. Maximum value of 200.
  consumerGroupId?: string;

  // The credentials needed to access the resource. Detailed below.
  credentials?: pipes_PipeSourceParametersManagedStreamingKafkaParametersCredentials;

  // The maximum length of a time to wait for events. Maximum value of 300.
  maximumBatchingWindowInSeconds?: number;

  // The position in a stream from which to start reading. Valid values: TRIM_HORIZON, LATEST.
  startingPosition?: string;

  // The name of the topic that the pipe will read from. Maximum length of 249.
  topicName?: string;
}

export function pipes_PipeSourceParametersManagedStreamingKafkaParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "batchSize",
      "The maximum number of records to include in each batch. Maximum value of 10000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "consumerGroupId",
      "The name of the destination queue to consume. Maximum value of 200.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "credentials",
      "The credentials needed to access the resource. Detailed below.",
      pipes_PipeSourceParametersManagedStreamingKafkaParametersCredentials_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumBatchingWindowInSeconds",
      "The maximum length of a time to wait for events. Maximum value of 300.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startingPosition",
      "The position in a stream from which to start reading. Valid values: TRIM_HORIZON, LATEST.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "topicName",
      "The name of the topic that the pipe will read from. Maximum length of 249.",
      [],
      true,
      true,
    ),
  ];
}
