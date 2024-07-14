import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface artifactregistry_getRepositoryMavenConfig {
  /*
The repository with this flag will allow publishing the same
snapshot versions.
*/
  allowSnapshotOverwrites?: boolean;

  // Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]
  versionPolicy?: string;
}

export function artifactregistry_getRepositoryMavenConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowSnapshotOverwrites",
      "The repository with this flag will allow publishing the same\nsnapshot versions.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "versionPolicy",
      'Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]',
      [],
      true,
      false,
    ),
  ];
}
