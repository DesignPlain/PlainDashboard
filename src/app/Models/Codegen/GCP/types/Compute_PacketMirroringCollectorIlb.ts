import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_PacketMirroringCollectorIlb {
  // The URL of the forwarding rule.
  Url?: string;
}

export function Compute_PacketMirroringCollectorIlb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Url",
      "The URL of the forwarding rule.",
      [],
      true,
      false,
    ),
  ];
}
