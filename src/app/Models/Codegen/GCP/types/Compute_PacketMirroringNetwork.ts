import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_PacketMirroringNetwork {
  // The full self_link URL of the network where this rule is active.
  Url?: string;
}

export function Compute_PacketMirroringNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Url",
      "The full self_link URL of the network where this rule is active.",
      [],
      true,
      true,
    ),
  ];
}
