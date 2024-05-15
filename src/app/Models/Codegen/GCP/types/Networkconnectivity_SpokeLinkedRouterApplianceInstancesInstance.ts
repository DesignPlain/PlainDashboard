import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance {
  // The IP address on the VM to use for peering.
  IpAddress?: string;

  /*
The URI of the virtual machine resource

- - -
*/
  VirtualMachine?: string;
}

export function Networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IpAddress",
      "The IP address on the VM to use for peering.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "VirtualMachine",
      "The URI of the virtual machine resource\n\n- - -",
      [],
      false,
      true,
    ),
  ];
}
