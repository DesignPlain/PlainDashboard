import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkehub_FleetState {
  /*
(Output)
Describes the state of a Fleet resource.
*/
  code?: string;
}

export function gkehub_FleetState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "code",
      "(Output)\nDescribes the state of a Fleet resource.",
      [],
      false,
      false,
    ),
  ];
}
