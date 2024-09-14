import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance {
  // The IP address on the VM to use for peering.
  ipAddress?: string;

  /*
The URI of the virtual machine resource

- - -
*/
  virtualMachine?: string;
}

export function networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipAddress",
      "The IP address on the VM to use for peering.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "virtualMachine",
      "The URI of the virtual machine resource\n\n- - -",
      () => [],
      false,
      true,
    ),
  ];
}
