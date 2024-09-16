import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appstream_StackApplicationSettings {
  // Whether application settings should be persisted.
  enabled?: boolean;

  /*
Name of the settings group.
Required when `enabled` is `true`.
Can be up to 100 characters.
*/
  settingsGroup?: string;
}

export function appstream_StackApplicationSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether application settings should be persisted.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'settingsGroup',
      'Name of the settings group.\nRequired when `enabled` is `true`.\nCan be up to 100 characters.',
      () => [],
      false,
      false,
    ),
  ];
}
