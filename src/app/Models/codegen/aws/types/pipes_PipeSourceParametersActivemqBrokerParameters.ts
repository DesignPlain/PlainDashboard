import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  pipes_PipeSourceParametersActivemqBrokerParametersCredentials,
  pipes_PipeSourceParametersActivemqBrokerParametersCredentials_GetTypes,
} from "./pipes_PipeSourceParametersActivemqBrokerParametersCredentials";

export interface pipes_PipeSourceParametersActivemqBrokerParameters {
  // The maximum number of records to include in each batch. Maximum value of 10000.
  batchSize?: number;

  // The credentials needed to access the resource. Detailed below.
  credentials?: pipes_PipeSourceParametersActivemqBrokerParametersCredentials;

  // The maximum length of a time to wait for events. Maximum value of 300.
  maximumBatchingWindowInSeconds?: number;

  // The name of the destination queue to consume. Maximum length of 1000.
  queueName?: string;
}

export function pipes_PipeSourceParametersActivemqBrokerParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "batchSize",
      "The maximum number of records to include in each batch. Maximum value of 10000.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "credentials",
      "The credentials needed to access the resource. Detailed below.",
      () =>
        pipes_PipeSourceParametersActivemqBrokerParametersCredentials_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumBatchingWindowInSeconds",
      "The maximum length of a time to wait for events. Maximum value of 300.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queueName",
      "The name of the destination queue to consume. Maximum length of 1000.",
      () => [],
      true,
      true,
    ),
  ];
}
