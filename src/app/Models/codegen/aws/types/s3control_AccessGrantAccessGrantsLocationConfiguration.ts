import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3control_AccessGrantAccessGrantsLocationConfiguration {
  // Sub-prefix.
  s3SubPrefix?: string;
}

export function s3control_AccessGrantAccessGrantsLocationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      's3SubPrefix',
      'Sub-prefix.',
      () => [],
      false,
      false,
    ),
  ];
}
