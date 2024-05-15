import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository {
  /*
A common public repository base for Yum.
Possible values are: `CENTOS`, `CENTOS_DEBUG`, `CENTOS_VAULT`, `CENTOS_STREAM`, `ROCKY`, `EPEL`.
*/
  RepositoryBase?: string;

  // Specific repository from the base, e.g. `"centos/8-stream/BaseOS/x86_64/os"`
  RepositoryPath?: string;
}

export function Artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RepositoryBase",
      "A common public repository base for Yum.\nPossible values are: `CENTOS`, `CENTOS_DEBUG`, `CENTOS_VAULT`, `CENTOS_STREAM`, `ROCKY`, `EPEL`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "RepositoryPath",
      'Specific repository from the base, e.g. `"centos/8-stream/BaseOS/x86_64/os"`',
      [],
      true,
      true,
    ),
  ];
}
