import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkehub_ScopeRbacRoleBindingRole {
  /*
PredefinedRole is an ENUM representation of the default Kubernetes Roles
Possible values are: `UNKNOWN`, `ADMIN`, `EDIT`, `VIEW`.

- - -
*/
  predefinedRole?: string;
}

export function gkehub_ScopeRbacRoleBindingRole_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "predefinedRole",
      "PredefinedRole is an ENUM representation of the default Kubernetes Roles\nPossible values are: `UNKNOWN`, `ADMIN`, `EDIT`, `VIEW`.\n\n- - -",
      () => [],
      false,
      false,
    ),
  ];
}
