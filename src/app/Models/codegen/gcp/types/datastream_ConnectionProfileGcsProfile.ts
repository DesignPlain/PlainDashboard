import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datastream_ConnectionProfileGcsProfile {
  // The Cloud Storage bucket name.
  bucket?: string;

  // The root path inside the Cloud Storage bucket.
  rootPath?: string;
}

export function datastream_ConnectionProfileGcsProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucket',
      'The Cloud Storage bucket name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'rootPath',
      'The root path inside the Cloud Storage bucket.',
      () => [],
      false,
      false,
    ),
  ];
}
