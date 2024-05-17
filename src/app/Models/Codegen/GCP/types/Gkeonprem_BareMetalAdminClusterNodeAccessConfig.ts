import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalAdminClusterNodeAccessConfig {
  /*
LoginUser is the user name used to access node machines.
It defaults to "root" if not set.
*/
  LoginUser?: string;
}

export function Gkeonprem_BareMetalAdminClusterNodeAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LoginUser",
      'LoginUser is the user name used to access node machines.\nIt defaults to "root" if not set.',
      [],
      false,
      false,
    ),
  ];
}
