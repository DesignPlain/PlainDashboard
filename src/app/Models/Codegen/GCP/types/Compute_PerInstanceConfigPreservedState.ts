import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_PerInstanceConfigPreservedStateExternalIp,
  Compute_PerInstanceConfigPreservedStateExternalIp_GetTypes,
} from "./Compute_PerInstanceConfigPreservedStateExternalIp";
import {
  Compute_PerInstanceConfigPreservedStateInternalIp,
  Compute_PerInstanceConfigPreservedStateInternalIp_GetTypes,
} from "./Compute_PerInstanceConfigPreservedStateInternalIp";
import {
  Compute_PerInstanceConfigPreservedStateDisk,
  Compute_PerInstanceConfigPreservedStateDisk_GetTypes,
} from "./Compute_PerInstanceConfigPreservedStateDisk";

export interface Compute_PerInstanceConfigPreservedState {
  /*
Preserved external IPs defined for this instance. This map is keyed with the name of the network interface.
Structure is documented below.
*/
  ExternalIps?: Array<Compute_PerInstanceConfigPreservedStateExternalIp>;

  /*
Preserved internal IPs defined for this instance. This map is keyed with the name of the network interface.
Structure is documented below.
*/
  InternalIps?: Array<Compute_PerInstanceConfigPreservedStateInternalIp>;

  // Preserved metadata defined for this instance. This is a list of key->value pairs.
  Metadata?: Map<string, string>;

  /*
Stateful disks for the instance.
Structure is documented below.
*/
  Disks?: Array<Compute_PerInstanceConfigPreservedStateDisk>;
}

export function Compute_PerInstanceConfigPreservedState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ExternalIps",
      "Preserved external IPs defined for this instance. This map is keyed with the name of the network interface.\nStructure is documented below.",
      Compute_PerInstanceConfigPreservedStateExternalIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InternalIps",
      "Preserved internal IPs defined for this instance. This map is keyed with the name of the network interface.\nStructure is documented below.",
      Compute_PerInstanceConfigPreservedStateInternalIp_GetTypes(),
      false,
      false,
    ),
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
      Compute_PerInstanceConfigPreservedStateDisk_GetTypes(),
      false,
      false,
    ),
  ];
}
