import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface fsx_getOntapStorageVirtualMachineEndpointNf {
  //
  dnsName?: string;

  //
  ipAddresses?: Array<string>;
}

export function fsx_getOntapStorageVirtualMachineEndpointNf_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "dnsName", "", () => [], true, false),
  ];
}
