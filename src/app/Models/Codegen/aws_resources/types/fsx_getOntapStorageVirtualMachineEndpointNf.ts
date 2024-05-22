import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface fsx_getOntapStorageVirtualMachineEndpointNf {
  //
  ipAddresses?: Array<string>;

  //
  dnsName?: string;
}

export function fsx_getOntapStorageVirtualMachineEndpointNf_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "dnsName", "", [], true, false),
  ];
}
