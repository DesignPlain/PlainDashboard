import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dns_ManagedZonePeeringConfigTargetNetwork,
  dns_ManagedZonePeeringConfigTargetNetwork_GetTypes,
} from "./dns_ManagedZonePeeringConfigTargetNetwork";

export interface dns_ManagedZonePeeringConfig {
  /*
The network with which to peer.
Structure is documented below.
*/
  targetNetwork?: dns_ManagedZonePeeringConfigTargetNetwork;
}

export function dns_ManagedZonePeeringConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "targetNetwork",
      "The network with which to peer.\nStructure is documented below.",
      dns_ManagedZonePeeringConfigTargetNetwork_GetTypes(),
      true,
      false,
    ),
  ];
}
