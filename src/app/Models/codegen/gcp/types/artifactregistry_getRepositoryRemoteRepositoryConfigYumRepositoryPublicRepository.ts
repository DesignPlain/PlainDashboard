import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface artifactregistry_getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository {
  // A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"]
  repositoryBase?: string;

  // Specific repository from the base, e.g. '"centos/8-stream/BaseOS/x86_64/os"'
  repositoryPath?: string;
}

export function artifactregistry_getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repositoryBase",
      'A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"]',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repositoryPath",
      "Specific repository from the base, e.g. '\"centos/8-stream/BaseOS/x86_64/os\"'",
      () => [],
      true,
      false,
    ),
  ];
}
