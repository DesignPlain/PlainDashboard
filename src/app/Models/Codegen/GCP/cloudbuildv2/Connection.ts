import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudbuildv2_ConnectionGitlabConfig,
  cloudbuildv2_ConnectionGitlabConfig_GetTypes,
} from "../types/cloudbuildv2_ConnectionGitlabConfig";
import {
  cloudbuildv2_ConnectionInstallationState,
  cloudbuildv2_ConnectionInstallationState_GetTypes,
} from "../types/cloudbuildv2_ConnectionInstallationState";
import {
  cloudbuildv2_ConnectionGithubConfig,
  cloudbuildv2_ConnectionGithubConfig_GetTypes,
} from "../types/cloudbuildv2_ConnectionGithubConfig";
import {
  cloudbuildv2_ConnectionGithubEnterpriseConfig,
  cloudbuildv2_ConnectionGithubEnterpriseConfig_GetTypes,
} from "../types/cloudbuildv2_ConnectionGithubEnterpriseConfig";

export interface ConnectionArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Allows clients to store small amounts of arbitrary data.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  // If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
  disabled?: boolean;

  /*
Configuration for connections to github.com.
Structure is documented below.
*/
  githubConfig?: cloudbuildv2_ConnectionGithubConfig;

  /*
Configuration for connections to an instance of GitHub Enterprise.
Structure is documented below.
*/
  githubEnterpriseConfig?: cloudbuildv2_ConnectionGithubEnterpriseConfig;

  /*
Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
Structure is documented below.
*/
  gitlabConfig?: cloudbuildv2_ConnectionGitlabConfig;

  /*
The location for the resource


- - -
*/
  location?: string;

  // Immutable. The resource name of the connection.
  name?: string;
}
export class Connection extends Resource {
  /*
Configuration for connections to github.com.
Structure is documented below.
*/
  public githubConfig?: cloudbuildv2_ConnectionGithubConfig;

  /*
Output only. Installation state of the Connection.
Structure is documented below.
*/
  public installationStates?: Array<cloudbuildv2_ConnectionInstallationState>;

  /*
The location for the resource


- - -
*/
  public location?: string;

  // Output only. Server assigned timestamp for when the connection was updated.
  public updateTime?: string;

  // Output only. Server assigned timestamp for when the connection was created.
  public createTime?: string;

  // If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
  public disabled?: boolean;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  /*
Configuration for connections to an instance of GitHub Enterprise.
Structure is documented below.
*/
  public githubEnterpriseConfig?: cloudbuildv2_ConnectionGithubEnterpriseConfig;

  /*
Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
Structure is documented below.
*/
  public gitlabConfig?: cloudbuildv2_ConnectionGitlabConfig;

  // Immutable. The resource name of the connection.
  public name?: string;

  /*
Allows clients to store small amounts of arbitrary data.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  // This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public etag?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Output only. Set to true when the connection is being set up or updated in the background.
  public reconciling?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "githubEnterpriseConfig",
        "Configuration for connections to an instance of GitHub Enterprise.\nStructure is documented below.",
        cloudbuildv2_ConnectionGithubEnterpriseConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "gitlabConfig",
        "Configuration for connections to gitlab.com or an instance of GitLab Enterprise.\nStructure is documented below.",
        cloudbuildv2_ConnectionGitlabConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Immutable. The resource name of the connection.",
        [],
        false,
        true,
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
        InputType.Map,
        "annotations",
        "Allows clients to store small amounts of arbitrary data.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "githubConfig",
        "Configuration for connections to github.com.\nStructure is documented below.",
        cloudbuildv2_ConnectionGithubConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
