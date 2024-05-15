import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FleetState {
  /*
(Output)
Describes the state of a Fleet resource.
*/
  Code?: string;
}

export function Gkehub_FleetState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Code",
      "(Output)\nDescribes the state of a Fleet resource.",
      [],
      false,
      false,
    ),
  ];
}
