import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_EndpointConfigurationDataCaptureConfigCaptureOption {
  // Specifies the data to be captured. Should be one of `Input` or `Output`.
  captureMode?: string;
}

export function sagemaker_EndpointConfigurationDataCaptureConfigCaptureOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "captureMode",
      "Specifies the data to be captured. Should be one of `Input` or `Output`.",
      [],
      true,
      true,
    ),
  ];
}
