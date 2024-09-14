import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkmanager_CoreNetworkSegment {
  // Regions where the edges are located.
  edgeLocations?: Array<string>;

  // Name of a core network segment.
  name?: string;

  // Shared segments of a core network.
  sharedSegments?: Array<string>;
}

export function networkmanager_CoreNetworkSegment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "edgeLocations",
      "Regions where the edges are located.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of a core network segment.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sharedSegments",
      "Shared segments of a core network.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
