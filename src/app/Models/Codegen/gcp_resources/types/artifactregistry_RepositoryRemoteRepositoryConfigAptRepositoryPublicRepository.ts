import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository {
  // Specific repository from the base, e.g. `"centos/8-stream/BaseOS/x86_64/os"`
  repositoryPath?: string;

  /*
A common public repository base for Yum.
Possible values are: `CENTOS`, `CENTOS_DEBUG`, `CENTOS_VAULT`, `CENTOS_STREAM`, `ROCKY`, `EPEL`.
*/
  repositoryBase?: string;
}

export function artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repositoryBase",
      "A common public repository base for Yum.\nPossible values are: `CENTOS`, `CENTOS_DEBUG`, `CENTOS_VAULT`, `CENTOS_STREAM`, `ROCKY`, `EPEL`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "repositoryPath",
      'Specific repository from the base, e.g. `"centos/8-stream/BaseOS/x86_64/os"`',
      [],
      true,
      true,
    ),
  ];
}
