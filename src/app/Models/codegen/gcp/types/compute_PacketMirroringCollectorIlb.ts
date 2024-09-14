import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_PacketMirroringCollectorIlb {
  // The URL of the forwarding rule.
  url?: string;
}

export function compute_PacketMirroringCollectorIlb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "url",
      "The URL of the forwarding rule.",
      () => [],
      true,
      false,
    ),
  ];
}
