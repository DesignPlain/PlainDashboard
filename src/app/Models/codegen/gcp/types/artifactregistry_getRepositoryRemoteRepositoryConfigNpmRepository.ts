import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository {
  // Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"]
  publicRepository?: string;
}

export function artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "publicRepository",
      'Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"]',
      () => [],
      true,
      false,
    ),
  ];
}
