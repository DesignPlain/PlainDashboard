import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RepositoryGitRemoteSettings } from "../types/RepositoryGitRemoteSettings";
import { RepositoryWorkspaceCompilationOverrides } from "../types/RepositoryWorkspaceCompilationOverrides";

export interface RepositoryArgs {
  // Optional. The repository's user-friendly name.
  DisplayName?: string;

  /*
Optional. Repository user labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format projects/-/secrets/-/versions/-. The file itself must be in a JSON format.
  NpmrcEnvironmentVariablesSecretVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // A reference to the region
  Region?: string;

  /*
Optional. If set, configures this repository to be linked to a Git remote.
Structure is documented below.
*/
  GitRemoteSettings?: RepositoryGitRemoteSettings;

  /*
The repository's name.


- - -
*/
  Name?: string;

  // The service account to run workflow invocations under.
  ServiceAccount?: string;

  /*
If set, fields of workspaceCompilationOverrides override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results.
Structure is documented below.
*/
  WorkspaceCompilationOverrides?: RepositoryWorkspaceCompilationOverrides;
}
export class Repository extends Resource {
  // Optional. The repository's user-friendly name.
  public DisplayName?: string;

  /*
The repository's name.


- - -
*/
  public Name?: string;

  /*
If set, fields of workspaceCompilationOverrides override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results.
Structure is documented below.
*/
  public WorkspaceCompilationOverrides?: RepositoryWorkspaceCompilationOverrides;

  // A reference to the region
  public Region?: string;

  // The service account to run workflow invocations under.
  public ServiceAccount?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Optional. If set, configures this repository to be linked to a Git remote.
Structure is documented below.
*/
  public GitRemoteSettings?: RepositoryGitRemoteSettings;

  /*
Optional. Repository user labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format projects/-/secrets/-/versions/-. The file itself must be in a JSON format.
  public NpmrcEnvironmentVariablesSecretVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'Optional. Repository user labels.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
      new DynamicUIProps(
        InputType.String,
        "NpmrcEnvironmentVariablesSecretVersion",
        "Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format projects/*/secrets/*/versions/*. The file itself must be in a JSON format.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "A reference to the region",
      ),
      new DynamicUIProps(
        InputType.String,
        "GitRemoteSettings",
        "Optional. If set, configures this repository to be linked to a Git remote.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "The service account to run workflow invocations under.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Optional. The repository's user-friendly name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The repository's name.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "WorkspaceCompilationOverrides",
        "If set, fields of workspaceCompilationOverrides override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results.\nStructure is documented below.",
      ),
    ];
  }
}
