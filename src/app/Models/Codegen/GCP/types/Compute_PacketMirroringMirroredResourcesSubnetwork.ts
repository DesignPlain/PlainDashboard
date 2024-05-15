import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_PacketMirroringMirroredResourcesSubnetwork {
  // The URL of the subnetwork where this rule should be active.
  Url?: string;
}

export function Compute_PacketMirroringMirroredResourcesSubnetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Url",
      "The URL of the subnetwork where this rule should be active.",
      [],
      true,
      false,
    ),
  ];
}
