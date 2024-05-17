import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_ClusterInitialUser {
  /*
The initial password for the user.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // The database username.
  User?: string;
}

export function Alloydb_ClusterInitialUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Password",
      "The initial password for the user.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "User",
      "The database username.",
      [],
      false,
      false,
    ),
  ];
}
