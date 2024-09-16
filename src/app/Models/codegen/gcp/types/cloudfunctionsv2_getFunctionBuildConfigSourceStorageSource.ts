import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource {
  // Google Cloud Storage bucket containing the source
  bucket?: string;

  /*
Google Cloud Storage generation for the object. If the generation
is omitted, the latest generation will be used.
*/
  generation?: number;

  // Google Cloud Storage object containing the source.
  object?: string;
}

export function cloudfunctionsv2_getFunctionBuildConfigSourceStorageSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucket',
      'Google Cloud Storage bucket containing the source',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'generation',
      'Google Cloud Storage generation for the object. If the generation\nis omitted, the latest generation will be used.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'object',
      'Google Cloud Storage object containing the source.',
      () => [],
      true,
      false,
    ),
  ];
}
