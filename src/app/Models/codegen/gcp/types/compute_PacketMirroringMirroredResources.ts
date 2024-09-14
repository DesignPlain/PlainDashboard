import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_PacketMirroringMirroredResourcesInstance,
  compute_PacketMirroringMirroredResourcesInstance_GetTypes,
} from "./compute_PacketMirroringMirroredResourcesInstance";
import {
  compute_PacketMirroringMirroredResourcesSubnetwork,
  compute_PacketMirroringMirroredResourcesSubnetwork_GetTypes,
} from "./compute_PacketMirroringMirroredResourcesSubnetwork";

export interface compute_PacketMirroringMirroredResources {
  /*
All the listed instances will be mirrored.  Specify at most 50.
Structure is documented below.
*/
  instances?: Array<compute_PacketMirroringMirroredResourcesInstance>;

  /*
All instances in one of these subnetworks will be mirrored.
Structure is documented below.
*/
  subnetworks?: Array<compute_PacketMirroringMirroredResourcesSubnetwork>;

  // All instances with these tags will be mirrored.
  tags?: Array<string>;
}

export function compute_PacketMirroringMirroredResources_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "instances",
      "All the listed instances will be mirrored.  Specify at most 50.\nStructure is documented below.",
      () => compute_PacketMirroringMirroredResourcesInstance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetworks",
      "All instances in one of these subnetworks will be mirrored.\nStructure is documented below.",
      () => compute_PacketMirroringMirroredResourcesSubnetwork_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "All instances with these tags will be mirrored.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
