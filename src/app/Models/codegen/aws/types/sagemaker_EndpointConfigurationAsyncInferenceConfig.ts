import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig,
  sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig_GetTypes,
} from "./sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig";
import {
  sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig,
  sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig_GetTypes,
} from "./sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig";

export interface sagemaker_EndpointConfigurationAsyncInferenceConfig {
  // Configures the behavior of the client used by Amazon SageMaker to interact with the model container during asynchronous inference.
  clientConfig?: sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig;

  // Specifies the configuration for asynchronous inference invocation outputs.
  outputConfig?: sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig;
}

export function sagemaker_EndpointConfigurationAsyncInferenceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "clientConfig",
      "Configures the behavior of the client used by Amazon SageMaker to interact with the model container during asynchronous inference.",
      () =>
        sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "outputConfig",
      "Specifies the configuration for asynchronous inference invocation outputs.",
      () =>
        sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig_GetTypes(),
      true,
      true,
    ),
  ];
}
