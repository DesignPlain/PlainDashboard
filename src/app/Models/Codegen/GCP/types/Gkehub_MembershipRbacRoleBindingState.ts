import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_MembershipRbacRoleBindingState {
  /*
(Output)
Code describes the state of a RBAC Role Binding resource.
*/
  Code?: string;
}

export function Gkehub_MembershipRbacRoleBindingState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Code",
      "(Output)\nCode describes the state of a RBAC Role Binding resource.",
      [],
      false,
      false,
    ),
  ];
}
