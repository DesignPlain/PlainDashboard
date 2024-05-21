import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface workbench_InstanceGceSetupNetworkInterface {
  // Optional. The name of the VPC that this VM instance is in.
  network?: string;

  /*
Optional. The type of vNIC to be used on this interface. This
may be gVNIC or VirtioNet.
Possible values are: `VIRTIO_NET`, `GVNIC`.
*/
  nicType?: string;

  // Optional. The name of the subnet that this VM instance is in.
  subnet?: string;
}

export function workbench_InstanceGceSetupNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "nicType",
      "Optional. The type of vNIC to be used on this interface. This\nmay be gVNIC or VirtioNet.\nPossible values are: `VIRTIO_NET`, `GVNIC`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnet",
      "Optional. The name of the subnet that this VM instance is in.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      "Optional. The name of the VPC that this VM instance is in.",
      [],
      false,
      true,
    ),
  ];
}
