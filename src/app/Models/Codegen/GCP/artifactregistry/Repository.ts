import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_RepositoryCleanupPolicy,
  Artifactregistry_RepositoryCleanupPolicy_GetTypes,
} from "../types/Artifactregistry_RepositoryCleanupPolicy";
import {
  Artifactregistry_RepositoryRemoteRepositoryConfig,
  Artifactregistry_RepositoryRemoteRepositoryConfig_GetTypes,
} from "../types/Artifactregistry_RepositoryRemoteRepositoryConfig";
import {
  Artifactregistry_RepositoryMavenConfig,
  Artifactregistry_RepositoryMavenConfig_GetTypes,
} from "../types/Artifactregistry_RepositoryMavenConfig";
import {
  Artifactregistry_RepositoryVirtualRepositoryConfig,
  Artifactregistry_RepositoryVirtualRepositoryConfig_GetTypes,
} from "../types/Artifactregistry_RepositoryVirtualRepositoryConfig";
import {
  Artifactregistry_RepositoryDockerConfig,
  Artifactregistry_RepositoryDockerConfig_GetTypes,
} from "../types/Artifactregistry_RepositoryDockerConfig";

export interface RepositoryArgs {
  // The user-provided description of the repository.
  Description?: string;

  /*
Labels with user-defined metadata.
This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The name of the location this repository is located in.
  Location?: string;

  /*
Cleanup policies for this repository. Cleanup policies indicate when
certain package versions can be automatically deleted.
Map keys are policy IDs supplied by users during policy creation. They must
unique within a repository and be under 128 characters in length.
Structure is documented below.
*/
  CleanupPolicies?: Array<Artifactregistry_RepositoryCleanupPolicy>;

  /*
If true, the cleanup pipeline is prevented from deleting versions in this
repository.
*/
  CleanupPolicyDryRun?: boolean;

  /*
The last part of the repository name, for example:
"repo1"
*/
  RepositoryId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Configuration specific for a Remote Repository.
Structure is documented below.
*/
  RemoteRepositoryConfig?: Artifactregistry_RepositoryRemoteRepositoryConfig;

  /*
The Cloud KMS resource name of the customer managed encryption key that’s
used to encrypt the contents of the Repository. Has the form:
`projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`.
This value may not be changed after the Repository has been created.
*/
  KmsKeyName?: string;

  /*
MavenRepositoryConfig is maven related repository details.
Provides additional configuration details for repositories of the maven
format type.
Structure is documented below.
*/
  MavenConfig?: Artifactregistry_RepositoryMavenConfig;

  /*
The mode configures the repository to serve artifacts from different sources.
Default value is `STANDARD_REPOSITORY`.
Possible values are: `STANDARD_REPOSITORY`, `VIRTUAL_REPOSITORY`, `REMOTE_REPOSITORY`.
*/
  Mode?: string;

  /*
Configuration specific for a Virtual Repository.
Structure is documented below.
*/
  VirtualRepositoryConfig?: Artifactregistry_RepositoryVirtualRepositoryConfig;

  /*
Docker repository config contains repository level configuration for the repositories of docker type.
Structure is documented below.
*/
  DockerConfig?: Artifactregistry_RepositoryDockerConfig;

  /*
The format of packages that are stored in the repository. Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).


- - -
*/
  Format?: string;
}
export class Repository extends Resource {
  /*
The Cloud KMS resource name of the customer managed encryption key that’s
used to encrypt the contents of the Repository. Has the form:
`projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`.
This value may not be changed after the Repository has been created.
*/
  public KmsKeyName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The last part of the repository name, for example:
"repo1"
*/
  public RepositoryId?: string;

  // The time when the repository was last updated.
  public UpdateTime?: string;

  /*
Cleanup policies for this repository. Cleanup policies indicate when
certain package versions can be automatically deleted.
Map keys are policy IDs supplied by users during policy creation. They must
unique within a repository and be under 128 characters in length.
Structure is documented below.
*/
  public CleanupPolicies?: Array<Artifactregistry_RepositoryCleanupPolicy>;

  /*
If true, the cleanup pipeline is prevented from deleting versions in this
repository.
*/
  public CleanupPolicyDryRun?: boolean;

  /*
Docker repository config contains repository level configuration for the repositories of docker type.
Structure is documented below.
*/
  public DockerConfig?: Artifactregistry_RepositoryDockerConfig;

  // The time when the repository was created.
  public CreateTime?: string;

  /*
The format of packages that are stored in the repository. Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).


- - -
*/
  public Format?: string;

  // The name of the location this repository is located in.
  public Location?: string;

  /*
The mode configures the repository to serve artifacts from different sources.
Default value is `STANDARD_REPOSITORY`.
Possible values are: `STANDARD_REPOSITORY`, `VIRTUAL_REPOSITORY`, `REMOTE_REPOSITORY`.
*/
  public Mode?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Configuration specific for a Remote Repository.
Structure is documented below.
*/
  public RemoteRepositoryConfig?: Artifactregistry_RepositoryRemoteRepositoryConfig;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Labels with user-defined metadata.
This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
MavenRepositoryConfig is maven related repository details.
Provides additional configuration details for repositories of the maven
format type.
Structure is documented below.
*/
  public MavenConfig?: Artifactregistry_RepositoryMavenConfig;

  // The user-provided description of the repository.
  public Description?: string;

  /*
The name of the repository, for example:
"repo1"
*/
  public Name?: string;

  /*
Configuration specific for a Virtual Repository.
Structure is documented below.
*/
  public VirtualRepositoryConfig?: Artifactregistry_RepositoryVirtualRepositoryConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "RepositoryId",
        'The last part of the repository name, for example:\n"repo1"',
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DockerConfig",
        "Docker repository config contains repository level configuration for the repositories of docker type.\nStructure is documented below.",
        Artifactregistry_RepositoryDockerConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Format",
        "The format of packages that are stored in the repository. Supported formats\ncan be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).\nYou can only create alpha formats if you are a member of the\n[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this repository is located in.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "CleanupPolicies",
        "Cleanup policies for this repository. Cleanup policies indicate when\ncertain package versions can be automatically deleted.\nMap keys are policy IDs supplied by users during policy creation. They must\nunique within a repository and be under 128 characters in length.\nStructure is documented below.",
        Artifactregistry_RepositoryCleanupPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RemoteRepositoryConfig",
        "Configuration specific for a Remote Repository.\nStructure is documented below.",
        Artifactregistry_RepositoryRemoteRepositoryConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MavenConfig",
        "MavenRepositoryConfig is maven related repository details.\nProvides additional configuration details for repositories of the maven\nformat type.\nStructure is documented below.",
        Artifactregistry_RepositoryMavenConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Mode",
        "The mode configures the repository to serve artifacts from different sources.\nDefault value is `STANDARD_REPOSITORY`.\nPossible values are: `STANDARD_REPOSITORY`, `VIRTUAL_REPOSITORY`, `REMOTE_REPOSITORY`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The user-provided description of the repository.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Labels with user-defined metadata.\nThis field may contain up to 64 entries. Label keys and values may be no\nlonger than 63 characters. Label keys must begin with a lowercase letter\nand may only contain lowercase letters, numeric characters, underscores,\nand dashes.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "CleanupPolicyDryRun",
        "If true, the cleanup pipeline is prevented from deleting versions in this\nrepository.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "The Cloud KMS resource name of the customer managed encryption key that’s\nused to encrypt the contents of the Repository. Has the form:\n`projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`.\nThis value may not be changed after the Repository has been created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "VirtualRepositoryConfig",
        "Configuration specific for a Virtual Repository.\nStructure is documented below.",
        Artifactregistry_RepositoryVirtualRepositoryConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
