import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_PacketMirroringMirroredResourcesInstance {
  /*
The URL of the instances where this rule should be active.

- - -
*/
  url?: string;
}

export function compute_PacketMirroringMirroredResourcesInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "url",
      "The URL of the instances where this rule should be active.\n\n- - -",
      () => [],
      true,
      false,
    ),
  ];
}
