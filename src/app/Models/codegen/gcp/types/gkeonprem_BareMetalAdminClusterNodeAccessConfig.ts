import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_BareMetalAdminClusterNodeAccessConfig {
  /*
LoginUser is the user name used to access node machines.
It defaults to "root" if not set.
*/
  loginUser?: string;
}

export function gkeonprem_BareMetalAdminClusterNodeAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'loginUser',
      'LoginUser is the user name used to access node machines.\nIt defaults to "root" if not set.',
      () => [],
      false,
      false,
    ),
  ];
}
