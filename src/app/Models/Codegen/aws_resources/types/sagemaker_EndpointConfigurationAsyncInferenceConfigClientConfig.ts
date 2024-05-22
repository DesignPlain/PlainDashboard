import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      false,
      true,
    ),
  ];
}
