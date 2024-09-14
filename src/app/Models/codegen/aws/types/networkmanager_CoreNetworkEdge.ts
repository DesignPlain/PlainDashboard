import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkmanager_CoreNetworkEdge {
  // ASN of a core network edge.
  asn?: number;

  // Region where a core network edge is located.
  edgeLocation?: string;

  // Inside IP addresses used for core network edges.
  insideCidrBlocks?: Array<string>;
}

export function networkmanager_CoreNetworkEdge_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "edgeLocation",
      "Region where a core network edge is located.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "insideCidrBlocks",
      "Inside IP addresses used for core network edges.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "asn",
      "ASN of a core network edge.",
      () => [],
      false,
      false,
    ),
  ];
}
