import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_ScopeState {
  /*
(Output)
Code describes the state of a Scope resource.
*/
  Code?: string;
}

export function Gkehub_ScopeState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Code",
      "(Output)\nCode describes the state of a Scope resource.",
      [],
      false,
      false,
    ),
  ];
}
