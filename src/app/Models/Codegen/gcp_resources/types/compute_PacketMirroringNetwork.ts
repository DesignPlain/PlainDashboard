import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_PacketMirroringNetwork {
  // The full self_link URL of the network where this rule is active.
  url?: string;
}

export function compute_PacketMirroringNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "url",
      "The full self_link URL of the network where this rule is active.",
      [],
      true,
      true,
    ),
  ];
}
