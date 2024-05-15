import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_PacketMirroringMirroredResourcesInstance,
  Compute_PacketMirroringMirroredResourcesInstance_GetTypes,
} from "./Compute_PacketMirroringMirroredResourcesInstance";
import {
  Compute_PacketMirroringMirroredResourcesSubnetwork,
  Compute_PacketMirroringMirroredResourcesSubnetwork_GetTypes,
} from "./Compute_PacketMirroringMirroredResourcesSubnetwork";

export interface Compute_PacketMirroringMirroredResources {
  /*
All the listed instances will be mirrored.  Specify at most 50.
Structure is documented below.
*/
  Instances?: Array<Compute_PacketMirroringMirroredResourcesInstance>;

  /*
All instances in one of these subnetworks will be mirrored.
Structure is documented below.
*/
  Subnetworks?: Array<Compute_PacketMirroringMirroredResourcesSubnetwork>;

  // All instances with these tags will be mirrored.
  Tags?: Array<string>;
}

export function Compute_PacketMirroringMirroredResources_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Instances",
      "All the listed instances will be mirrored.  Specify at most 50.\nStructure is documented below.",
      Compute_PacketMirroringMirroredResourcesInstance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Subnetworks",
      "All instances in one of these subnetworks will be mirrored.\nStructure is documented below.",
      Compute_PacketMirroringMirroredResourcesSubnetwork_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "All instances with these tags will be mirrored.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
