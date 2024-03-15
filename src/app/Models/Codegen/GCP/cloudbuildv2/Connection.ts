import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ConnectionGithubEnterpriseConfig } from "../types/ConnectionGithubEnterpriseConfig";
import { ConnectionGitlabConfig } from "../types/ConnectionGitlabConfig";
import { ConnectionGithubConfig } from "../types/ConnectionGithubConfig";
import { ConnectionInstallationState } from "../types/ConnectionInstallationState";

export interface ConnectionArgs {
  /*
Configuration for connections to an instance of GitHub Enterprise.
Structure is documented below.
*/
  GithubEnterpriseConfig?: ConnectionGithubEnterpriseConfig;

  /*
Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
Structure is documented below.
*/
  GitlabConfig?: ConnectionGitlabConfig;

  /*
The location for the resource


- - -
*/
  Location?: string;

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
  GithubConfig?: ConnectionGithubConfig;
}
export class Connection extends Resource {
  // If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
  public Disabled?: boolean;

  // This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  /*
Output only. Installation state of the Connection.
Structure is documented below.
*/
  public InstallationStates?: Array<ConnectionInstallationState>;

  // Output only. Server assigned timestamp for when the connection was updated.
  public UpdateTime?: string;

  /*
Allows clients to store small amounts of arbitrary data.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Output only. Server assigned timestamp for when the connection was created.
  public CreateTime?: string;

  /*
Configuration for connections to github.com.
Structure is documented below.
*/
  public GithubConfig?: ConnectionGithubConfig;

  /*
Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
Structure is documented below.
*/
  public GitlabConfig?: ConnectionGitlabConfig;

  // Immutable. The resource name of the connection.
  public Name?: string;

  // Output only. Set to true when the connection is being set up or updated in the background.
  public Reconciling?: boolean;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
Configuration for connections to an instance of GitHub Enterprise.
Structure is documented below.
*/
  public GithubEnterpriseConfig?: ConnectionGithubEnterpriseConfig;

  /*
The location for the resource


- - -
*/
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.CheckBox,
        "Disabled",
        "If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GithubConfig",
        "Configuration for connections to github.com.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GithubEnterpriseConfig",
        "Configuration for connections to an instance of GitHub Enterprise.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GitlabConfig",
        "Configuration for connections to gitlab.com or an instance of GitLab Enterprise.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Immutable. The resource name of the connection.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Allows clients to store small amounts of arbitrary data.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
    ];
  }
}
