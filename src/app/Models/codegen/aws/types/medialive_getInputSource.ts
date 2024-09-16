import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_getInputSource {
  //
  username?: string;

  //
  passwordParam?: string;

  //
  url?: string;
}

export function medialive_getInputSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'passwordParam',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'url', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'username', '', () => [], true, false),
  ];
}
