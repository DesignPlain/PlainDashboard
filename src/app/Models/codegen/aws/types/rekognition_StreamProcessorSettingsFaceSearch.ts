import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface rekognition_StreamProcessorSettingsFaceSearch {
  // ID of a collection that contains faces that you want to search for.
  collectionId?: string;

  // Minimum face match confidence score that must be met to return a result for a recognized face.
  faceMatchThreshold?: number;
}

export function rekognition_StreamProcessorSettingsFaceSearch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'collectionId',
      'ID of a collection that contains faces that you want to search for.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'faceMatchThreshold',
      'Minimum face match confidence score that must be met to return a result for a recognized face.',
      () => [],
      false,
      false,
    ),
  ];
}
