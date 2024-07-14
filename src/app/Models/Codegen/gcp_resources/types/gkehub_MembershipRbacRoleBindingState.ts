import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkehub_MembershipRbacRoleBindingState {
  /*
(Output)
Code describes the state of a RBAC Role Binding resource.
*/
  code?: string;
}

export function gkehub_MembershipRbacRoleBindingState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "code",
      "(Output)\nCode describes the state of a RBAC Role Binding resource.",
      [],
      false,
      false,
    ),
  ];
}
