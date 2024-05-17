import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionPerInstanceConfigPreservedStateDisk,
  Compute_RegionPerInstanceConfigPreservedStateDisk_GetTypes,
} from "./Compute_RegionPerInstanceConfigPreservedStateDisk";
import {
  Compute_RegionPerInstanceConfigPreservedStateExternalIp,
  Compute_RegionPerInstanceConfigPreservedStateExternalIp_GetTypes,
} from "./Compute_RegionPerInstanceConfigPreservedStateExternalIp";
import {
  Compute_RegionPerInstanceConfigPreservedStateInternalIp,
  Compute_RegionPerInstanceConfigPreservedStateInternalIp_GetTypes,
} from "./Compute_RegionPerInstanceConfigPreservedStateInternalIp";

export interface Compute_RegionPerInstanceConfigPreservedState {
  /*
Preserved external IPs defined for this instance. This map is keyed with the name of the network interface.
Structure is documented below.
*/
  ExternalIps?: Array<Compute_RegionPerInstanceConfigPreservedStateExternalIp>;

  /*
Preserved internal IPs defined for this instance. This map is keyed with the name of the network interface.
Structure is documented below.
*/
  InternalIps?: Array<Compute_RegionPerInstanceConfigPreservedStateInternalIp>;

  // Preserved metadata defined for this instance. This is a list of key->value pairs.
  Metadata?: Map<string, string>;

  /*
Stateful disks for the instance.
Structure is documented below.
*/
  Disks?: Array<Compute_RegionPerInstanceConfigPreservedStateDisk>;
}

export function Compute_RegionPerInstanceConfigPreservedState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Metadata",
      "Preserved metadata defined for this instance. This is a list of key->value pairs.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Disks",
      "Stateful disks for the instance.\nStructure is documented below.",
      Compute_RegionPerInstanceConfigPreservedStateDisk_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExternalIps",
      "Preserved external IPs defined for this instance. This map is keyed with the name of the network interface.\nStructure is documented below.",
      Compute_RegionPerInstanceConfigPreservedStateExternalIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InternalIps",
      "Preserved internal IPs defined for this instance. This map is keyed with the name of the network interface.\nStructure is documented below.",
      Compute_RegionPerInstanceConfigPreservedStateInternalIp_GetTypes(),
      false,
      false,
    ),
  ];
}
