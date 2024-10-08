import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_EndpointConfigurationDataCaptureConfigCaptureContentTypeHeader {
  // The CSV content type headers to capture.
  csvContentTypes?: Array<string>;

  // The JSON content type headers to capture.
  jsonContentTypes?: Array<string>;
}

export function sagemaker_EndpointConfigurationDataCaptureConfigCaptureContentTypeHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'csvContentTypes',
      'The CSV content type headers to capture.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'jsonContentTypes',
      'The JSON content type headers to capture.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
