import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
