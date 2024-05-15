import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt {
  /*
URI of the key file for this repository. The agent
maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`.
*/
  GpgKey?: string;

  // URI for this repository.
  Uri?: string;

  /*
Type of archive files in this repository.
Possible values are: `ARCHIVE_TYPE_UNSPECIFIED`, `DEB`, `DEB_SRC`.
*/
  ArchiveType?: string;

  /*
List of components for this repository. Must
contain at least one item.
*/
  Components?: Array<string>;

  // Distribution of this repository.
  Distribution?: string;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GpgKey",
      "URI of the key file for this repository. The agent\nmaintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "URI for this repository.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ArchiveType",
      "Type of archive files in this repository.\nPossible values are: `ARCHIVE_TYPE_UNSPECIFIED`, `DEB`, `DEB_SRC`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Components",
      "List of components for this repository. Must\ncontain at least one item.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Distribution",
      "Distribution of this repository.",
      [],
      true,
      false,
    ),
  ];
}
