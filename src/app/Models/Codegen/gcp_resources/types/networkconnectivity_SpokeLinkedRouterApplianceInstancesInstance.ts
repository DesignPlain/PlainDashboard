import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance {
  /*
The URI of the virtual machine resource

- - -
*/
  virtualMachine?: string;

  // The IP address on the VM to use for peering.
  ipAddress?: string;
}

export function networkconnectivity_SpokeLinkedRouterApplianceInstancesInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "virtualMachine",
      "The URI of the virtual machine resource\n\n- - -",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipAddress",
      "The IP address on the VM to use for peering.",
      [],
      false,
      true,
    ),
  ];
}
