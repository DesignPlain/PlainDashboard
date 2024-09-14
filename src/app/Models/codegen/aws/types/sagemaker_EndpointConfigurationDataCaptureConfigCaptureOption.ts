import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_EndpointConfigurationDataCaptureConfigCaptureOption {
  // Specifies the data to be captured. Should be one of `Input`, `Output` or `InputAndOutput`.
  captureMode?: string;
}

export function sagemaker_EndpointConfigurationDataCaptureConfigCaptureOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "captureMode",
      "Specifies the data to be captured. Should be one of `Input`, `Output` or `InputAndOutput`.",
      () => [],
      true,
      true,
    ),
  ];
}
