import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Artifactregistry_RepositoryMavenConfig {
  /*
The repository with this flag will allow publishing the same
snapshot versions.
*/
  AllowSnapshotOverwrites?: boolean;

  /*
Version policy defines the versions that the registry will accept.
Default value is `VERSION_POLICY_UNSPECIFIED`.
Possible values are: `VERSION_POLICY_UNSPECIFIED`, `RELEASE`, `SNAPSHOT`.
*/
  VersionPolicy?: string;
}

export function Artifactregistry_RepositoryMavenConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "VersionPolicy",
      "Version policy defines the versions that the registry will accept.\nDefault value is `VERSION_POLICY_UNSPECIFIED`.\nPossible values are: `VERSION_POLICY_UNSPECIFIED`, `RELEASE`, `SNAPSHOT`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowSnapshotOverwrites",
      "The repository with this flag will allow publishing the same\nsnapshot versions.",
      [],
      false,
      true,
    ),
  ];
}
