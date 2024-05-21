import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  artifactregistry_RepositoryCleanupPolicy,
  artifactregistry_RepositoryCleanupPolicy_GetTypes,
} from "../types/artifactregistry_RepositoryCleanupPolicy";
import {
  artifactregistry_RepositoryMavenConfig,
  artifactregistry_RepositoryMavenConfig_GetTypes,
} from "../types/artifactregistry_RepositoryMavenConfig";
import {
  artifactregistry_RepositoryRemoteRepositoryConfig,
  artifactregistry_RepositoryRemoteRepositoryConfig_GetTypes,
} from "../types/artifactregistry_RepositoryRemoteRepositoryConfig";
import {
  artifactregistry_RepositoryVirtualRepositoryConfig,
  artifactregistry_RepositoryVirtualRepositoryConfig_GetTypes,
} from "../types/artifactregistry_RepositoryVirtualRepositoryConfig";
import {
  artifactregistry_RepositoryDockerConfig,
  artifactregistry_RepositoryDockerConfig_GetTypes,
} from "../types/artifactregistry_RepositoryDockerConfig";

export interface RepositoryArgs {
  /*
Cleanup policies for this repository. Cleanup policies indicate when
certain package versions can be automatically deleted.
Map keys are policy IDs supplied by users during policy creation. They must
unique within a repository and be under 128 characters in length.
Structure is documented below.
*/
  cleanupPolicies?: Array<artifactregistry_RepositoryCleanupPolicy>;

  /*
The Cloud KMS resource name of the customer managed encryption key that’s
used to encrypt the contents of the Repository. Has the form:
`projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`.
This value may not be changed after the Repository has been created.
*/
  kmsKeyName?: string;

  /*
Labels with user-defined metadata.
This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The name of the location this repository is located in.
  location?: string;

  /*
MavenRepositoryConfig is maven related repository details.
Provides additional configuration details for repositories of the maven
format type.
Structure is documented below.
*/
  mavenConfig?: artifactregistry_RepositoryMavenConfig;

  /*
Configuration specific for a Remote Repository.
Structure is documented below.
*/
  remoteRepositoryConfig?: artifactregistry_RepositoryRemoteRepositoryConfig;

  /*
Configuration specific for a Virtual Repository.
Structure is documented below.
*/
  virtualRepositoryConfig?: artifactregistry_RepositoryVirtualRepositoryConfig;

  /*
If true, the cleanup pipeline is prevented from deleting versions in this
repository.
*/
  cleanupPolicyDryRun?: boolean;

  // The user-provided description of the repository.
  description?: string;

  /*
The format of packages that are stored in the repository. Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).


- - -
*/
  format?: string;

  /*
Docker repository config contains repository level configuration for the repositories of docker type.
Structure is documented below.
*/
  dockerConfig?: artifactregistry_RepositoryDockerConfig;

  /*
The mode configures the repository to serve artifacts from different sources.
Default value is `STANDARD_REPOSITORY`.
Possible values are: `STANDARD_REPOSITORY`, `VIRTUAL_REPOSITORY`, `REMOTE_REPOSITORY`.
*/
  mode?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The last part of the repository name, for example:
"repo1"
*/
  repositoryId?: string;
}
export class Repository extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Configuration specific for a Virtual Repository.
Structure is documented below.
*/
  public virtualRepositoryConfig?: artifactregistry_RepositoryVirtualRepositoryConfig;

  /*
Cleanup policies for this repository. Cleanup policies indicate when
certain package versions can be automatically deleted.
Map keys are policy IDs supplied by users during policy creation. They must
unique within a repository and be under 128 characters in length.
Structure is documented below.
*/
  public cleanupPolicies?: Array<artifactregistry_RepositoryCleanupPolicy>;

  // The time when the repository was created.
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The name of the repository, for example:
"repo1"
*/
  public name?: string;

  // The user-provided description of the repository.
  public description?: string;

  /*
Docker repository config contains repository level configuration for the repositories of docker type.
Structure is documented below.
*/
  public dockerConfig?: artifactregistry_RepositoryDockerConfig;

  /*
MavenRepositoryConfig is maven related repository details.
Provides additional configuration details for repositories of the maven
format type.
Structure is documented below.
*/
  public mavenConfig?: artifactregistry_RepositoryMavenConfig;

  /*
The mode configures the repository to serve artifacts from different sources.
Default value is `STANDARD_REPOSITORY`.
Possible values are: `STANDARD_REPOSITORY`, `VIRTUAL_REPOSITORY`, `REMOTE_REPOSITORY`.
*/
  public mode?: string;

  /*
The last part of the repository name, for example:
"repo1"
*/
  public repositoryId?: string;

  // The time when the repository was last updated.
  public updateTime?: string;

  /*
If true, the cleanup pipeline is prevented from deleting versions in this
repository.
*/
  public cleanupPolicyDryRun?: boolean;

  /*
The format of packages that are stored in the repository. Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).


- - -
*/
  public format?: string;

  /*
Labels with user-defined metadata.
This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Configuration specific for a Remote Repository.
Structure is documented below.
*/
  public remoteRepositoryConfig?: artifactregistry_RepositoryRemoteRepositoryConfig;

  /*
The Cloud KMS resource name of the customer managed encryption key that’s
used to encrypt the contents of the Repository. Has the form:
`projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`.
This value may not be changed after the Repository has been created.
*/
  public kmsKeyName?: string;

  // The name of the location this repository is located in.
  public location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "remoteRepositoryConfig",
        "Configuration specific for a Remote Repository.\nStructure is documented below.",
        artifactregistry_RepositoryRemoteRepositoryConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "virtualRepositoryConfig",
        "Configuration specific for a Virtual Repository.\nStructure is documented below.",
        artifactregistry_RepositoryVirtualRepositoryConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The user-provided description of the repository.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyName",
        "The Cloud KMS resource name of the customer managed encryption key that’s\nused to encrypt the contents of the Repository. Has the form:\n`projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`.\nThis value may not be changed after the Repository has been created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels with user-defined metadata.\nThis field may contain up to 64 entries. Label keys and values may be no\nlonger than 63 characters. Label keys must begin with a lowercase letter\nand may only contain lowercase letters, numeric characters, underscores,\nand dashes.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The name of the location this repository is located in.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "cleanupPolicyDryRun",
        "If true, the cleanup pipeline is prevented from deleting versions in this\nrepository.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "mode",
        "The mode configures the repository to serve artifacts from different sources.\nDefault value is `STANDARD_REPOSITORY`.\nPossible values are: `STANDARD_REPOSITORY`, `VIRTUAL_REPOSITORY`, `REMOTE_REPOSITORY`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cleanupPolicies",
        "Cleanup policies for this repository. Cleanup policies indicate when\ncertain package versions can be automatically deleted.\nMap keys are policy IDs supplied by users during policy creation. They must\nunique within a repository and be under 128 characters in length.\nStructure is documented below.",
        artifactregistry_RepositoryCleanupPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "mavenConfig",
        "MavenRepositoryConfig is maven related repository details.\nProvides additional configuration details for repositories of the maven\nformat type.\nStructure is documented below.",
        artifactregistry_RepositoryMavenConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "format",
        "The format of packages that are stored in the repository. Supported formats\ncan be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).\nYou can only create alpha formats if you are a member of the\n[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dockerConfig",
        "Docker repository config contains repository level configuration for the repositories of docker type.\nStructure is documented below.",
        artifactregistry_RepositoryDockerConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "repositoryId",
        'The last part of the repository name, for example:\n"repo1"',
        [],
        true,
        true,
      ),
    ];
  }
}
