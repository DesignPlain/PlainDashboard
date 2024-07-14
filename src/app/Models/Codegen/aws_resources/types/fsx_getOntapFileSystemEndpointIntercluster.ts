import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface fsx_getOntapFileSystemEndpointIntercluster {
  // DNS name for the file system (e.g. `fs-12345678.corp.example.com`).
  dnsName?: string;

  //
  ipAddresses?: Array<string>;
}

export function fsx_getOntapFileSystemEndpointIntercluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dnsName",
      "DNS name for the file system (e.g. `fs-12345678.corp.example.com`).",
      [],
      true,
      false,
    ),
  ];
}
