import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appstream_DirectoryConfigServiceAccountCredentials,
  appstream_DirectoryConfigServiceAccountCredentials_GetTypes,
} from "../types/appstream_DirectoryConfigServiceAccountCredentials";

export interface DirectoryConfigArgs {
  // Fully qualified name of the directory.
  directoryName?: string;

  // Distinguished names of the organizational units for computer accounts.
  organizationalUnitDistinguishedNames?: Array<string>;

  // Configuration block for the name of the directory and organizational unit (OU) to use to join the directory config to a Microsoft Active Directory domain. See `service_account_credentials` below.
  serviceAccountCredentials?: appstream_DirectoryConfigServiceAccountCredentials;
}
export class DirectoryConfig extends Resource {
  // Distinguished names of the organizational units for computer accounts.
  public organizationalUnitDistinguishedNames?: Array<string>;

  // Configuration block for the name of the directory and organizational unit (OU) to use to join the directory config to a Microsoft Active Directory domain. See `service_account_credentials` below.
  public serviceAccountCredentials?: appstream_DirectoryConfigServiceAccountCredentials;

  // Date and time, in UTC and extended RFC 3339 format, when the directory config was created.
  public createdTime?: string;

  // Fully qualified name of the directory.
  public directoryName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "organizationalUnitDistinguishedNames",
        "Distinguished names of the organizational units for computer accounts.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceAccountCredentials",
        "Configuration block for the name of the directory and organizational unit (OU) to use to join the directory config to a Microsoft Active Directory domain. See `service_account_credentials` below.",
        appstream_DirectoryConfigServiceAccountCredentials_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "directoryName",
        "Fully qualified name of the directory.",
        [],
        true,
        true,
      ),
    ];
  }
}
