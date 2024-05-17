import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuildv2_ConnectionGithubConfig,
  Cloudbuildv2_ConnectionGithubConfig_GetTypes,
} from "../types/Cloudbuildv2_ConnectionGithubConfig";
import {
  Cloudbuildv2_ConnectionGithubEnterpriseConfig,
  Cloudbuildv2_ConnectionGithubEnterpriseConfig_GetTypes,
} from "../types/Cloudbuildv2_ConnectionGithubEnterpriseConfig";
import {
  Cloudbuildv2_ConnectionGitlabConfig,
  Cloudbuildv2_ConnectionGitlabConfig_GetTypes,
} from "../types/Cloudbuildv2_ConnectionGitlabConfig";
import {
  Cloudbuildv2_ConnectionInstallationState,
  Cloudbuildv2_ConnectionInstallationState_GetTypes,
} from "../types/Cloudbuildv2_ConnectionInstallationState";

export interface ConnectionArgs {
  // Immutable. The resource name of the connection.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Allows clients to store small amounts of arbitrary data.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
  Disabled?: boolean;

  /*
Configuration for connections to github.com.
Structure is documented below.
*/
  GithubConfig?: Cloudbuildv2_ConnectionGithubConfig;

  /*
Configuration for connections to an instance of GitHub Enterprise.
Structure is documented below.
*/
  GithubEnterpriseConfig?: Cloudbuildv2_ConnectionGithubEnterpriseConfig;

  /*
Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
Structure is documented below.
*/
  GitlabConfig?: Cloudbuildv2_ConnectionGitlabConfig;

  /*
The location for the resource


- - -
*/
  Location?: string;
}
export class Connection extends Resource {
  /*
Configuration for connections to github.com.
Structure is documented below.
*/
  public GithubConfig?: Cloudbuildv2_ConnectionGithubConfig;

  /*
Output only. Installation state of the Connection.
Structure is documented below.
*/
  public InstallationStates?: Array<Cloudbuildv2_ConnectionInstallationState>;

  /*
The location for the resource


- - -
*/
  public Location?: string;

  // Output only. Server assigned timestamp for when the connection was updated.
  public UpdateTime?: string;

  /*
Allows clients to store small amounts of arbitrary data.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  /*
Configuration for connections to an instance of GitHub Enterprise.
Structure is documented below.
*/
  public GithubEnterpriseConfig?: Cloudbuildv2_ConnectionGithubEnterpriseConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  /*
Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
Structure is documented below.
*/
  public GitlabConfig?: Cloudbuildv2_ConnectionGitlabConfig;

  // Immutable. The resource name of the connection.
  public Name?: string;

  // Output only. Set to true when the connection is being set up or updated in the background.
  public Reconciling?: boolean;

  // Output only. Server assigned timestamp for when the connection was created.
  public CreateTime?: string;

  // If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
  public Disabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        "Allows clients to store small amounts of arbitrary data.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Disabled",
        "If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GithubConfig",
        "Configuration for connections to github.com.\nStructure is documented below.",
        Cloudbuildv2_ConnectionGithubConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GithubEnterpriseConfig",
        "Configuration for connections to an instance of GitHub Enterprise.\nStructure is documented below.",
        Cloudbuildv2_ConnectionGithubEnterpriseConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GitlabConfig",
        "Configuration for connections to gitlab.com or an instance of GitLab Enterprise.\nStructure is documented below.",
        Cloudbuildv2_ConnectionGitlabConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Immutable. The resource name of the connection.",
        [],
        false,
        true,
      ),
    ];
  }
}
