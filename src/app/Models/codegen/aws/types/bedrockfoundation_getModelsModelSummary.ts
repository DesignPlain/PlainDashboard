import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bedrockfoundation_getModelsModelSummary {
  // Customizations that the model supports.
  customizationsSupporteds?: Array<string>;

  // Inference types that the model supports.
  inferenceTypesSupporteds?: Array<string>;

  // Input modalities that the model supports.
  inputModalities?: Array<string>;

  // Model identifier.
  modelId?: string;

  // Output modalities that the model supports.
  outputModalities?: Array<string>;

  // Model provider name.
  providerName?: string;

  // Model ARN.
  modelArn?: string;

  // Model name.
  modelName?: string;

  // Indicates whether the model supports streaming.
  responseStreamingSupported?: boolean;
}

export function bedrockfoundation_getModelsModelSummary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "providerName",
      "Model provider name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "modelArn",
      "Model ARN.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "responseStreamingSupported",
      "Indicates whether the model supports streaming.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "outputModalities",
      "Output modalities that the model supports.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inferenceTypesSupporteds",
      "Inference types that the model supports.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inputModalities",
      "Input modalities that the model supports.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "modelId",
      "Model identifier.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "modelName",
      "Model name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customizationsSupporteds",
      "Customizations that the model supports.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
