import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

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
      () => [],
      true,
      true,
    ),
  ];
}
