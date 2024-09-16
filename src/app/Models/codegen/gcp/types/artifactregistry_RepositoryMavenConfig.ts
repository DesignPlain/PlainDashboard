import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface artifactregistry_RepositoryMavenConfig {
  /*
The repository with this flag will allow publishing the same
snapshot versions.
*/
  allowSnapshotOverwrites?: boolean;

  /*
Version policy defines the versions that the registry will accept.
Default value is `VERSION_POLICY_UNSPECIFIED`.
Possible values are: `VERSION_POLICY_UNSPECIFIED`, `RELEASE`, `SNAPSHOT`.
*/
  versionPolicy?: string;
}

export function artifactregistry_RepositoryMavenConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'allowSnapshotOverwrites',
      'The repository with this flag will allow publishing the same\nsnapshot versions.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'versionPolicy',
      'Version policy defines the versions that the registry will accept.\nDefault value is `VERSION_POLICY_UNSPECIFIED`.\nPossible values are: `VERSION_POLICY_UNSPECIFIED`, `RELEASE`, `SNAPSHOT`.',
      () => [],
      false,
      true,
    ),
  ];
}
