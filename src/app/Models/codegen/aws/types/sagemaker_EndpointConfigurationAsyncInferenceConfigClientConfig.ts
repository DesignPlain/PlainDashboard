import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig {
  // The maximum number of concurrent requests sent by the SageMaker client to the model container. If no value is provided, Amazon SageMaker will choose an optimal value for you.
  maxConcurrentInvocationsPerInstance?: number;
}

export function sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxConcurrentInvocationsPerInstance",
      "The maximum number of concurrent requests sent by the SageMaker client to the model container. If no value is provided, Amazon SageMaker will choose an optimal value for you.",
      () => [],
      false,
      true,
    ),
  ];
}
