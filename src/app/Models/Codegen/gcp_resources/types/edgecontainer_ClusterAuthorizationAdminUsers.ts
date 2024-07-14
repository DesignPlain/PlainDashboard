import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface edgecontainer_ClusterAuthorizationAdminUsers {
  /*
An active Google username.

- - -
*/
  username?: string;
}

export function edgecontainer_ClusterAuthorizationAdminUsers_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "username",
      "An active Google username.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
