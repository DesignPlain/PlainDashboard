import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Edgecontainer_ClusterAuthorizationAdminUsers {
  /*
An active Google username.

- - -
*/
  Username?: string;
}

export function Edgecontainer_ClusterAuthorizationAdminUsers_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Username",
      "An active Google username.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
