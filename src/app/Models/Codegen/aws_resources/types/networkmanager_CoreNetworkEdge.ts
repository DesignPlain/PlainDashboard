import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkmanager_CoreNetworkEdge {
  // Inside IP addresses used for core network edges.
  insideCidrBlocks?: Array<string>;

  // ASN of a core network edge.
  asn?: number;

  // Region where a core network edge is located.
  edgeLocation?: string;
}

export function networkmanager_CoreNetworkEdge_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "insideCidrBlocks",
      "Inside IP addresses used for core network edges.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "asn",
      "ASN of a core network edge.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "edgeLocation",
      "Region where a core network edge is located.",
      [],
      false,
      false,
    ),
  ];
}
