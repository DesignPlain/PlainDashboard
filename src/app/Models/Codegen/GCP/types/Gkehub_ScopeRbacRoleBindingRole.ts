import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_ScopeRbacRoleBindingRole {
  /*
PredefinedRole is an ENUM representation of the default Kubernetes Roles
Possible values are: `UNKNOWN`, `ADMIN`, `EDIT`, `VIEW`.

- - -
*/
  PredefinedRole?: string;
}

export function Gkehub_ScopeRbacRoleBindingRole_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PredefinedRole",
      "PredefinedRole is an ENUM representation of the default Kubernetes Roles\nPossible values are: `UNKNOWN`, `ADMIN`, `EDIT`, `VIEW`.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
