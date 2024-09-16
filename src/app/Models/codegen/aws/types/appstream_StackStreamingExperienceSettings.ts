import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appstream_StackStreamingExperienceSettings {
  /*
The preferred protocol that you want to use while streaming your application.
Valid values are `TCP` and `UDP`.
*/
  preferredProtocol?: string;
}

export function appstream_StackStreamingExperienceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'preferredProtocol',
      'The preferred protocol that you want to use while streaming your application.\nValid values are `TCP` and `UDP`.',
      () => [],
      false,
      false,
    ),
  ];
}
