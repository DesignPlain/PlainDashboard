import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface fsx_OntapFileSystemEndpointManagement {
  // The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.
  dnsName?: string;

  // IP addresses of the file system endpoint.
  ipAddresses?: Array<string>;
}

export function fsx_OntapFileSystemEndpointManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dnsName",
      "The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "IP addresses of the file system endpoint.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
