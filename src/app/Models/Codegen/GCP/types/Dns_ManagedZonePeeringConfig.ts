import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_ManagedZonePeeringConfigTargetNetwork,
  Dns_ManagedZonePeeringConfigTargetNetwork_GetTypes,
} from "./Dns_ManagedZonePeeringConfigTargetNetwork";

export interface Dns_ManagedZonePeeringConfig {
  /*
The network with which to peer.
Structure is documented below.
*/
  TargetNetwork?: Dns_ManagedZonePeeringConfigTargetNetwork;
}

export function Dns_ManagedZonePeeringConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "TargetNetwork",
      "The network with which to peer.\nStructure is documented below.",
      Dns_ManagedZonePeeringConfigTargetNetwork_GetTypes(),
      true,
      false,
    ),
  ];
}
