import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig,
  sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig_GetTypes,
} from "./sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig";
import {
  sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig,
  sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig_GetTypes,
} from "./sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig";

export interface sagemaker_EndpointConfigurationAsyncInferenceConfig {
  // Specifies the configuration for asynchronous inference invocation outputs.
  outputConfig?: sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig;

  // Configures the behavior of the client used by Amazon SageMaker to interact with the model container during asynchronous inference.
  clientConfig?: sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig;
}

export function sagemaker_EndpointConfigurationAsyncInferenceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "clientConfig",
      "Configures the behavior of the client used by Amazon SageMaker to interact with the model container during asynchronous inference.",
      sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "outputConfig",
      "Specifies the configuration for asynchronous inference invocation outputs.",
      sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig_GetTypes(),
      true,
      true,
    ),
  ];
}
