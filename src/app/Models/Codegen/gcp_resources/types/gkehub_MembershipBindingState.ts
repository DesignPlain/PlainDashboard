import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkehub_MembershipBindingState {
  /*
(Output)
Code describes the state of a MembershipBinding resource.
*/
  code?: string;
}

export function gkehub_MembershipBindingState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "code",
      "(Output)\nCode describes the state of a MembershipBinding resource.",
      [],
      false,
      false,
    ),
  ];
}
