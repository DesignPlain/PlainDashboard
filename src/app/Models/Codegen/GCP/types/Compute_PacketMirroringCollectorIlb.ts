import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
