import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface fsx_getOntapFileSystemEndpointManagement {
  // DNS name for the file system.
  dnsName?: string;

  //
  ipAddresses?: Array<string>;
}

export function fsx_getOntapFileSystemEndpointManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'dnsName',
      'DNS name for the file system.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ipAddresses',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
