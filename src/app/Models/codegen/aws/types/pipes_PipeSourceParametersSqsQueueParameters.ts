import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface pipes_PipeSourceParametersSqsQueueParameters {
  // The maximum number of records to include in each batch. Maximum value of 10000.
  batchSize?: number;

  // The maximum length of a time to wait for events. Maximum value of 300.
  maximumBatchingWindowInSeconds?: number;
}

export function pipes_PipeSourceParametersSqsQueueParameters_GetTypes(): DynamicUIProps[] {
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
      InputType.Number,
      "maximumBatchingWindowInSeconds",
      "The maximum length of a time to wait for events. Maximum value of 300.",
      () => [],
      false,
      false,
    ),
  ];
}
