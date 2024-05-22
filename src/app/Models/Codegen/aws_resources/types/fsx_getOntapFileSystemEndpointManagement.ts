import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface fsx_getOntapFileSystemEndpointManagement {
  //
  ipAddresses?: Array<string>;

  // DNS name for the file system (e.g. `fs-12345678.corp.example.com`).
  dnsName?: string;
}

export function fsx_getOntapFileSystemEndpointManagement_GetTypes(): DynamicUIProps[] {
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
