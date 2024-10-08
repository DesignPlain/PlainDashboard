import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface monitoring_UptimeCheckConfigHttpCheckAuthInfo {
  /*
The password to authenticate.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  // The username to authenticate.
  username?: string;
}

export function monitoring_UptimeCheckConfigHttpCheckAuthInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'password',
      'The password to authenticate.\n**Note**: This property is sensitive and will not be displayed in the plan.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'username',
      'The username to authenticate.',
      () => [],
      true,
      false,
    ),
  ];
}
