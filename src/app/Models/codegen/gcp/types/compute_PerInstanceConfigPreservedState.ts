import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_PerInstanceConfigPreservedStateDisk,
  compute_PerInstanceConfigPreservedStateDisk_GetTypes,
} from "./compute_PerInstanceConfigPreservedStateDisk";
import {
  compute_PerInstanceConfigPreservedStateExternalIp,
  compute_PerInstanceConfigPreservedStateExternalIp_GetTypes,
} from "./compute_PerInstanceConfigPreservedStateExternalIp";
import {
  compute_PerInstanceConfigPreservedStateInternalIp,
  compute_PerInstanceConfigPreservedStateInternalIp_GetTypes,
} from "./compute_PerInstanceConfigPreservedStateInternalIp";

export interface compute_PerInstanceConfigPreservedState {
  /*
Stateful disks for the instance.
Structure is documented below.
*/
  disks?: Array<compute_PerInstanceConfigPreservedStateDisk>;

  /*
Preserved external IPs defined for this instance. This map is keyed with the name of the network interface.
Structure is documented below.
*/
  externalIps?: Array<compute_PerInstanceConfigPreservedStateExternalIp>;

  /*
Preserved internal IPs defined for this instance. This map is keyed with the name of the network interface.
Structure is documented below.
*/
  internalIps?: Array<compute_PerInstanceConfigPreservedStateInternalIp>;

  // Preserved metadata defined for this instance. This is a list of key->value pairs.
  metadata?: Map<string, string>;
}

export function compute_PerInstanceConfigPreservedState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "disks",
      "Stateful disks for the instance.\nStructure is documented below.",
      () => compute_PerInstanceConfigPreservedStateDisk_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "externalIps",
      "Preserved external IPs defined for this instance. This map is keyed with the name of the network interface.\nStructure is documented below.",
      () => compute_PerInstanceConfigPreservedStateExternalIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "internalIps",
      "Preserved internal IPs defined for this instance. This map is keyed with the name of the network interface.\nStructure is documented below.",
      () => compute_PerInstanceConfigPreservedStateInternalIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "metadata",
      "Preserved metadata defined for this instance. This is a list of key->value pairs.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
