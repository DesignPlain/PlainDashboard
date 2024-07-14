import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface fsx_OntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration {
  // The fully qualified domain name of the self-managed AD directory. For example, `corp.example.com`.
  domainName?: string;

  // The name of the domain group whose members are granted administrative privileges for the SVM. The group that you specify must already exist in your domain. Defaults to `Domain Admins`.
  fileSystemAdministratorsGroup?: string;

  // The fully qualified distinguished name of the organizational unit within your self-managed AD directory that the Windows File Server instance will join. For example, `OU=FSx,DC=yourdomain,DC=corp,DC=com`. Only accepts OU as the direct parent of the SVM. If none is provided, the SVM is created in the default location of your self-managed AD directory. To learn more, see [RFC 2253](https://tools.ietf.org/html/rfc2253).
  organizationalUnitDistinguishedName?: string;

  // The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.
  password?: string;

  // The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.
  username?: string;

  // A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.
  dnsIps?: Array<string>;
}

export function fsx_OntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fileSystemAdministratorsGroup",
      "The name of the domain group whose members are granted administrative privileges for the SVM. The group that you specify must already exist in your domain. Defaults to `Domain Admins`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "organizationalUnitDistinguishedName",
      "The fully qualified distinguished name of the organizational unit within your self-managed AD directory that the Windows File Server instance will join. For example, `OU=FSx,DC=yourdomain,DC=corp,DC=com`. Only accepts OU as the direct parent of the SVM. If none is provided, the SVM is created in the default location of your self-managed AD directory. To learn more, see [RFC 2253](https://tools.ietf.org/html/rfc2253).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.",
      [],
      true,
      false,
    ),
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
      "The fully qualified domain name of the self-managed AD directory. For example, `corp.example.com`.",
      [],
      true,
      false,
    ),
  ];
}
