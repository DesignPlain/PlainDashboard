import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface artifactregistry_getRepositoryRemoteRepositoryConfigMavenRepository {
  // Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"]
  publicRepository?: string;
}

export function artifactregistry_getRepositoryRemoteRepositoryConfigMavenRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "publicRepository",
      'Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"]',
      [],
      true,
      false,
    ),
  ];
}
