import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_RegionPerInstanceConfigPreservedStateDisk,
  compute_RegionPerInstanceConfigPreservedStateDisk_GetTypes,
} from "./compute_RegionPerInstanceConfigPreservedStateDisk";
import {
  compute_RegionPerInstanceConfigPreservedStateExternalIp,
  compute_RegionPerInstanceConfigPreservedStateExternalIp_GetTypes,
} from "./compute_RegionPerInstanceConfigPreservedStateExternalIp";
import {
  compute_RegionPerInstanceConfigPreservedStateInternalIp,
  compute_RegionPerInstanceConfigPreservedStateInternalIp_GetTypes,
} from "./compute_RegionPerInstanceConfigPreservedStateInternalIp";

export interface compute_RegionPerInstanceConfigPreservedState {
  /*
Stateful disks for the instance.
Structure is documented below.
*/
  disks?: Array<compute_RegionPerInstanceConfigPreservedStateDisk>;

  /*
Preserved external IPs defined for this instance. This map is keyed with the name of the network interface.
Structure is documented below.
*/
  externalIps?: Array<compute_RegionPerInstanceConfigPreservedStateExternalIp>;

  /*
Preserved internal IPs defined for this instance. This map is keyed with the name of the network interface.
Structure is documented below.
*/
  internalIps?: Array<compute_RegionPerInstanceConfigPreservedStateInternalIp>;

  // Preserved metadata defined for this instance. This is a list of key->value pairs.
  metadata?: Map<string, string>;
}

export function compute_RegionPerInstanceConfigPreservedState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "disks",
      "Stateful disks for the instance.\nStructure is documented below.",
      compute_RegionPerInstanceConfigPreservedStateDisk_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "externalIps",
      "Preserved external IPs defined for this instance. This map is keyed with the name of the network interface.\nStructure is documented below.",
      compute_RegionPerInstanceConfigPreservedStateExternalIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "internalIps",
      "Preserved internal IPs defined for this instance. This map is keyed with the name of the network interface.\nStructure is documented below.",
      compute_RegionPerInstanceConfigPreservedStateInternalIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "metadata",
      "Preserved metadata defined for this instance. This is a list of key->value pairs.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
