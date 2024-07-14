import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration {
  // A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.
  dnsIps?: Array<string>;

  // The fully qualified domain name of the self-managed AD directory.
  domainName?: string;

  // The name of the domain group whose members have administrative privileges for the FSx file system.
  fileSystemAdministratorsGroup?: string;

  // The fully qualified distinguished name of the organizational unit within the self-managed AD directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
  organizationalUnitDistinguishedName?: string;

  // The user name for the service account on your self-managed AD domain that FSx uses to join to your AD domain.
  username?: string;
}

export function fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dnsIps",
      "A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "The fully qualified domain name of the self-managed AD directory.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fileSystemAdministratorsGroup",
      "The name of the domain group whose members have administrative privileges for the FSx file system.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "organizationalUnitDistinguishedName",
      "The fully qualified distinguished name of the organizational unit within the self-managed AD directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "The user name for the service account on your self-managed AD domain that FSx uses to join to your AD domain.",
      [],
      true,
      false,
    ),
  ];
}
