import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface rekognition_StreamProcessorSettingsConnectedHome {
  // Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you can include in this list are: `PERSON`, `PET`, `PACKAGE`, and `ALL`.
  labels?: Array<string>;

  // Minimum confidence required to label an object in the video.
  minConfidence?: number;
}

export function rekognition_StreamProcessorSettingsConnectedHome_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'labels',
      'Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you can include in this list are: `PERSON`, `PET`, `PACKAGE`, and `ALL`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minConfidence',
      'Minimum confidence required to label an object in the video.',
      () => [],
      false,
      false,
    ),
  ];
}
