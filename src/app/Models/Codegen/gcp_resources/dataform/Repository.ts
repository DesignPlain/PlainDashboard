import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataform_RepositoryGitRemoteSettings,
  dataform_RepositoryGitRemoteSettings_GetTypes,
} from "../types/dataform_RepositoryGitRemoteSettings";
import {
  dataform_RepositoryWorkspaceCompilationOverrides,
  dataform_RepositoryWorkspaceCompilationOverrides_GetTypes,
} from "../types/dataform_RepositoryWorkspaceCompilationOverrides";

export interface RepositoryArgs {
  /*
Optional. If set, configures this repository to be linked to a Git remote.
Structure is documented below.
*/
  gitRemoteSettings?: dataform_RepositoryGitRemoteSettings;

  /*
Optional. Repository user labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The repository's name.


- - -
*/
  name?: string;

  // A reference to the region
  region?: string;

  // Optional. The repository's user-friendly name.
  displayName?: string;

  // Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format projects/-/secrets/-/versions/-. The file itself must be in a JSON format.
  npmrcEnvironmentVariablesSecretVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The service account to run workflow invocations under.
  serviceAccount?: string;

  /*
If set, fields of workspaceCompilationOverrides override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results.
Structure is documented below.
*/
  workspaceCompilationOverrides?: dataform_RepositoryWorkspaceCompilationOverrides;
}
export class Repository extends Resource {
  /*
The repository's name.


- - -
*/
  public name?: string;

  // A reference to the region
  public region?: string;

  // Optional. The repository's user-friendly name.
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format projects/-/secrets/-/versions/-. The file itself must be in a JSON format.
  public npmrcEnvironmentVariablesSecretVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // The service account to run workflow invocations under.
  public serviceAccount?: string;

  /*
If set, fields of workspaceCompilationOverrides override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results.
Structure is documented below.
*/
  public workspaceCompilationOverrides?: dataform_RepositoryWorkspaceCompilationOverrides;

  /*
Optional. If set, configures this repository to be linked to a Git remote.
Structure is documented below.
*/
  public gitRemoteSettings?: dataform_RepositoryGitRemoteSettings;

  /*
Optional. Repository user labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'Optional. Repository user labels.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The repository's name.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "npmrcEnvironmentVariablesSecretVersion",
        "Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format projects/*/secrets/*/versions/*. The file itself must be in a JSON format.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccount",
        "The service account to run workflow invocations under.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "gitRemoteSettings",
        "Optional. If set, configures this repository to be linked to a Git remote.\nStructure is documented below.",
        dataform_RepositoryGitRemoteSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "A reference to the region",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Optional. The repository's user-friendly name.",
        [],
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
        InputType.Object,
        "workspaceCompilationOverrides",
        "If set, fields of workspaceCompilationOverrides override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results.\nStructure is documented below.",
        dataform_RepositoryWorkspaceCompilationOverrides_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
