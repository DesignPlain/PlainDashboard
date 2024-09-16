import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface fsx_OntapStorageVirtualMachineEndpointManagement {
  // The Domain Name Service (DNS) name for the storage virtual machine. You can mount your storage virtual machine using its DNS name.
  dnsName?: string;

  // IP addresses of the storage virtual machine endpoint.
  ipAddresses?: Array<string>;
}

export function fsx_OntapStorageVirtualMachineEndpointManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'dnsName',
      'The Domain Name Service (DNS) name for the storage virtual machine. You can mount your storage virtual machine using its DNS name.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ipAddresses',
      'IP addresses of the storage virtual machine endpoint.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
