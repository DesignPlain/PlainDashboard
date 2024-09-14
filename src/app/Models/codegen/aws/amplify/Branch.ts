import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface BranchArgs {
  // Enables auto building for the branch.
  enableAutoBuild?: boolean;

  // Enables performance mode for the branch.
  enablePerformanceMode?: boolean;

  // Enables pull request previews for this branch.
  enablePullRequestPreview?: boolean;

  // Environment variables for the branch.
  environmentVariables?: Map<string, string>;

  // Framework for the branch.
  framework?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // ARN for a backend environment that is part of an Amplify app.
  backendEnvironmentArn?: string;

  // Display name for a branch. This is used as the default domain prefix.
  displayName?: string;

  // Basic authorization credentials for the branch.
  basicAuthCredentials?: string;

  // Enables basic authorization for the branch.
  enableBasicAuth?: boolean;

  // Describes the current stage for the branch. Valid values: `PRODUCTION`, `BETA`, `DEVELOPMENT`, `EXPERIMENTAL`, `PULL_REQUEST`.
  stage?: string;

  // Unique ID for an Amplify app.
  appId?: string;

  // Amplify environment name for the pull request.
  pullRequestEnvironmentName?: string;

  // Enables notifications for the branch.
  enableNotification?: boolean;

  // Content Time To Live (TTL) for the website in seconds.
  ttl?: string;

  // Name for the branch.
  branchName?: string;

  // Description for the branch.
  description?: string;
}
export class Branch extends DS_Resource {
  // Enables pull request previews for this branch.
  public enablePullRequestPreview?: boolean;

  // Environment variables for the branch.
  public environmentVariables?: Map<string, string>;

  // Framework for the branch.
  public framework?: string;

  // Source branch if the branch is a pull request branch.
  public sourceBranch?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Unique ID for an Amplify app.
  public appId?: string;

  // Custom domains for the branch.
  public customDomains?: Array<string>;

  // Destination branch if the branch is a pull request branch.
  public destinationBranch?: string;

  // Display name for a branch. This is used as the default domain prefix.
  public displayName?: string;

  // Enables auto building for the branch.
  public enableAutoBuild?: boolean;

  // Describes the current stage for the branch. Valid values: `PRODUCTION`, `BETA`, `DEVELOPMENT`, `EXPERIMENTAL`, `PULL_REQUEST`.
  public stage?: string;

  // Content Time To Live (TTL) for the website in seconds.
  public ttl?: string;

  // ARN for the branch.
  public arn?: string;

  // A list of custom resources that are linked to this branch.
  public associatedResources?: Array<string>;

  // ARN for a backend environment that is part of an Amplify app.
  public backendEnvironmentArn?: string;

  // Name for the branch.
  public branchName?: string;

  // Enables basic authorization for the branch.
  public enableBasicAuth?: boolean;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Basic authorization credentials for the branch.
  public basicAuthCredentials?: string;

  // Description for the branch.
  public description?: string;

  // Enables notifications for the branch.
  public enableNotification?: boolean;

  // Enables performance mode for the branch.
  public enablePerformanceMode?: boolean;

  // Amplify environment name for the pull request.
  public pullRequestEnvironmentName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enablePullRequestPreview",
        "Enables pull request previews for this branch.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "framework",
        "Framework for the branch.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "backendEnvironmentArn",
        "ARN for a backend environment that is part of an Amplify app.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableBasicAuth",
        "Enables basic authorization for the branch.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "branchName",
        "Name for the branch.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enablePerformanceMode",
        "Enables performance mode for the branch.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "basicAuthCredentials",
        "Basic authorization credentials for the branch.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "pullRequestEnvironmentName",
        "Amplify environment name for the pull request.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableAutoBuild",
        "Enables auto building for the branch.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "environmentVariables",
        "Environment variables for the branch.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Display name for a branch. This is used as the default domain prefix.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "stage",
        "Describes the current stage for the branch. Valid values: `PRODUCTION`, `BETA`, `DEVELOPMENT`, `EXPERIMENTAL`, `PULL_REQUEST`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "appId",
        "Unique ID for an Amplify app.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableNotification",
        "Enables notifications for the branch.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ttl",
        "Content Time To Live (TTL) for the website in seconds.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for the branch.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
