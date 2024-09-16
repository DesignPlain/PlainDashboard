import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface emrserverless_ApplicationImageConfiguration {
  // The image URI.
  imageUri?: string;
}

export function emrserverless_ApplicationImageConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'imageUri',
      'The image URI.',
      () => [],
      true,
      false,
    ),
  ];
}
