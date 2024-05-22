import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt {
  /*
Type of archive files in this repository.
Possible values are: `ARCHIVE_TYPE_UNSPECIFIED`, `DEB`, `DEB_SRC`.
*/
  archiveType?: string;

  /*
List of components for this repository. Must
contain at least one item.
*/
  components?: Array<string>;

  // Distribution of this repository.
  distribution?: string;

  /*
URI of the key file for this repository. The agent
maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`.
*/
  gpgKey?: string;

  // URI for this repository.
  uri?: string;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "distribution",
      "Distribution of this repository.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gpgKey",
      "URI of the key file for this repository. The agent\nmaintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "URI for this repository.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "archiveType",
      "Type of archive files in this repository.\nPossible values are: `ARCHIVE_TYPE_UNSPECIFIED`, `DEB`, `DEB_SRC`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "components",
      "List of components for this repository. Must\ncontain at least one item.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
