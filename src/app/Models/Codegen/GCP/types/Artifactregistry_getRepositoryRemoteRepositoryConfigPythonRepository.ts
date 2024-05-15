import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Artifactregistry_getRepositoryRemoteRepositoryConfigPythonRepository {
  // Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"]
  PublicRepository?: string;
}

export function Artifactregistry_getRepositoryRemoteRepositoryConfigPythonRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PublicRepository",
      'Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"]',
      [],
      true,
      false,
    ),
  ];
}
