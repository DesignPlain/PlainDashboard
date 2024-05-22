import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface fsx_OntapStorageVirtualMachineEndpointNf {
  // The Domain Name Service (DNS) name for the storage virtual machine. You can mount your storage virtual machine using its DNS name.
  dnsName?: string;

  // IP addresses of the storage virtual machine endpoint.
  ipAddresses?: Array<string>;
}

export function fsx_OntapStorageVirtualMachineEndpointNf_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dnsName",
      "The Domain Name Service (DNS) name for the storage virtual machine. You can mount your storage virtual machine using its DNS name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "IP addresses of the storage virtual machine endpoint.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
