import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface fsx_getOntapStorageVirtualMachineEndpointSmb {
  //
  dnsName?: string;

  //
  ipAddresses?: Array<string>;
}

export function fsx_getOntapStorageVirtualMachineEndpointSmb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "dnsName", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
