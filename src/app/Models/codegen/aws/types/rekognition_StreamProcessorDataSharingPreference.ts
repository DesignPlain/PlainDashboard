import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface rekognition_StreamProcessorDataSharingPreference {
  // Whether you are sharing data with Rekognition to improve model performance.
  optIn?: boolean;
}

export function rekognition_StreamProcessorDataSharingPreference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'optIn',
      'Whether you are sharing data with Rekognition to improve model performance.',
      () => [],
      true,
      false,
    ),
  ];
}
