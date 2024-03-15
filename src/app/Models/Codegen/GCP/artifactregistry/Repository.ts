import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RepositoryCleanupPolicy } from "../types/RepositoryCleanupPolicy";
import { RepositoryDockerConfig } from "../types/RepositoryDockerConfig";
import { RepositoryMavenConfig } from "../types/RepositoryMavenConfig";
import { RepositoryRemoteRepositoryConfig } from "../types/RepositoryRemoteRepositoryConfig";
import { RepositoryVirtualRepositoryConfig } from "../types/RepositoryVirtualRepositoryConfig";

export interface RepositoryArgs {
  /*
The Cloud KMS resource name of the customer managed encryption key that’s
used to encrypt the contents of the Repository. Has the form:
`projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`.
This value may not be changed after the Repository has been created.
*/
  KmsKeyName?: string;

  /*
Cleanup policies for this repository. Cleanup policies indicate when
certain package versions can be automatically deleted.
Map keys are policy IDs supplied by users during policy creation. They must
unique within a repository and be under 128 characters in length.
Structure is documented below.
*/
  CleanupPolicies?: Array<RepositoryCleanupPolicy>;

  /*
Docker repository config contains repository level configuration for the repositories of docker type.
Structure is documented below.
*/
  DockerConfig?: RepositoryDockerConfig;

  /*
The format of packages that are stored in the repository. Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).


- - -
*/
  Format?: string;

  /*
The last part of the repository name, for example:
"repo1"
*/
  RepositoryId?: string;

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

  /*
MavenRepositoryConfig is maven related repository details.
Provides additional configuration details for repositories of the maven
format type.
Structure is documented below.
*/
  MavenConfig?: RepositoryMavenConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The name of the location this repository is located in.
  Location?: string;

  /*
Configuration specific for a Remote Repository.
Structure is documented below.
*/
  RemoteRepositoryConfig?: RepositoryRemoteRepositoryConfig;

  /*
Configuration specific for a Virtual Repository.
Structure is documented below.
*/
  VirtualRepositoryConfig?: RepositoryVirtualRepositoryConfig;

  /*
If true, the cleanup pipeline is prevented from deleting versions in this
repository.
*/
  CleanupPolicyDryRun?: boolean;

  // The user-provided description of the repository.
  Description?: string;

  /*
The mode configures the repository to serve artifacts from different sources.
Default value is `STANDARD_REPOSITORY`.
Possible values are: `STANDARD_REPOSITORY`, `VIRTUAL_REPOSITORY`, `REMOTE_REPOSITORY`.
*/
  Mode?: string;
}
export class Repository extends Resource {
  /*
Docker repository config contains repository level configuration for the repositories of docker type.
Structure is documented below.
*/
  public DockerConfig?: RepositoryDockerConfig;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

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
  public CleanupPolicies?: Array<RepositoryCleanupPolicy>;

  /*
MavenRepositoryConfig is maven related repository details.
Provides additional configuration details for repositories of the maven
format type.
Structure is documented below.
*/
  public MavenConfig?: RepositoryMavenConfig;

  /*
The name of the repository, for example:
"repo1"
*/
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The Cloud KMS resource name of the customer managed encryption key that’s
used to encrypt the contents of the Repository. Has the form:
`projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`.
This value may not be changed after the Repository has been created.
*/
  public KmsKeyName?: string;

  // The time when the repository was created.
  public CreateTime?: string;

  /*
Configuration specific for a Virtual Repository.
Structure is documented below.
*/
  public VirtualRepositoryConfig?: RepositoryVirtualRepositoryConfig;

  /*
If true, the cleanup pipeline is prevented from deleting versions in this
repository.
*/
  public CleanupPolicyDryRun?: boolean;

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
The mode configures the repository to serve artifacts from different sources.
Default value is `STANDARD_REPOSITORY`.
Possible values are: `STANDARD_REPOSITORY`, `VIRTUAL_REPOSITORY`, `REMOTE_REPOSITORY`.
*/
  public Mode?: string;

  /*
Configuration specific for a Remote Repository.
Structure is documented below.
*/
  public RemoteRepositoryConfig?: RepositoryRemoteRepositoryConfig;

  // The user-provided description of the repository.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "The Cloud KMS resource name of the customer managed encryption key that’s\nused to encrypt the contents of the Repository. Has the form:\n`projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`.\nThis value may not be changed after the Repository has been created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MavenConfig",
        "MavenRepositoryConfig is maven related repository details.\nProvides additional configuration details for repositories of the maven\nformat type.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this repository is located in.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RepositoryId",
        'The last part of the repository name, for example:\n"repo1"',
      ),
      new DynamicUIProps(
        InputType.String,
        "RemoteRepositoryConfig",
        "Configuration specific for a Remote Repository.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "CleanupPolicyDryRun",
        "If true, the cleanup pipeline is prevented from deleting versions in this\nrepository.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The user-provided description of the repository.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Mode",
        "The mode configures the repository to serve artifacts from different sources.\nDefault value is `STANDARD_REPOSITORY`.\nPossible values are: `STANDARD_REPOSITORY`, `VIRTUAL_REPOSITORY`, `REMOTE_REPOSITORY`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DockerConfig",
        "Docker repository config contains repository level configuration for the repositories of docker type.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Format",
        "The format of packages that are stored in the repository. Supported formats\ncan be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).\nYou can only create alpha formats if you are a member of the\n[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "CleanupPolicies",
        "Cleanup policies for this repository. Cleanup policies indicate when\ncertain package versions can be automatically deleted.\nMap keys are policy IDs supplied by users during policy creation. They must\nunique within a repository and be under 128 characters in length.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels with user-defined metadata.\nThis field may contain up to 64 entries. Label keys and values may be no\nlonger than 63 characters. Label keys must begin with a lowercase letter\nand may only contain lowercase letters, numeric characters, underscores,\nand dashes.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VirtualRepositoryConfig",
        "Configuration specific for a Virtual Repository.\nStructure is documented below.",
      ),
    ];
  }
}
