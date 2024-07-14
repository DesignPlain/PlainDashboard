import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  amplify_AppCustomRule,
  amplify_AppCustomRule_GetTypes,
} from "../types/amplify_AppCustomRule";
import {
  amplify_AppProductionBranch,
  amplify_AppProductionBranch_GetTypes,
} from "../types/amplify_AppProductionBranch";
import {
  amplify_AppAutoBranchCreationConfig,
  amplify_AppAutoBranchCreationConfig_GetTypes,
} from "../types/amplify_AppAutoBranchCreationConfig";

export interface AppArgs {
  // Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app.
  enableBasicAuth?: boolean;

  // OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key. The OAuth token is not stored.
  oauthToken?: string;

  // Platform or framework for an Amplify app. Valid values: `WEB`, `WEB_COMPUTE`. Default value: `WEB`.
  platform?: string;

  // Repository for an Amplify app.
  repository?: string;

  // Environment variables map for an Amplify app.
  environmentVariables?: Map<string, string>;

  // Personal access token for a third-party source control system for an Amplify app. The personal access token is used to create a webhook and a read-only deploy key. The token is not stored.
  accessToken?: string;

  // The [custom HTTP headers](https://docs.aws.amazon.com/amplify/latest/userguide/custom-headers.html) for an Amplify app.
  customHeaders?: string;

  // Description for an Amplify app.
  description?: string;

  // Enables auto-building of branches for the Amplify App.
  enableBranchAutoBuild?: boolean;

  // Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository.
  enableBranchAutoDeletion?: boolean;

  // Automated branch creation configuration for an Amplify app. An `auto_branch_creation_config` block is documented below.
  autoBranchCreationConfig?: amplify_AppAutoBranchCreationConfig;

  // Credentials for basic authorization for an Amplify app.
  basicAuthCredentials?: string;

  // The [build specification](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html) (build spec) for an Amplify app.
  buildSpec?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Automated branch creation glob patterns for an Amplify app.
  autoBranchCreationPatterns?: Array<string>;

  // Custom rewrite and redirect rules for an Amplify app. A `custom_rule` block is documented below.
  customRules?: Array<amplify_AppCustomRule>;

  // Enables automated branch creation for an Amplify app.
  enableAutoBranchCreation?: boolean;

  // AWS Identity and Access Management (IAM) service role for an Amplify app.
  iamServiceRoleArn?: string;

  // Name for an Amplify app.
  name?: string;
}
export class App extends Resource {
  // Personal access token for a third-party source control system for an Amplify app. The personal access token is used to create a webhook and a read-only deploy key. The token is not stored.
  public accessToken?: string;

  // ARN of the Amplify app.
  public arn?: string;

  // Automated branch creation glob patterns for an Amplify app.
  public autoBranchCreationPatterns?: Array<string>;

  // Credentials for basic authorization for an Amplify app.
  public basicAuthCredentials?: string;

  // OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key. The OAuth token is not stored.
  public oauthToken?: string;

  // Custom rewrite and redirect rules for an Amplify app. A `custom_rule` block is documented below.
  public customRules?: Array<amplify_AppCustomRule>;

  // Default domain for the Amplify app.
  public defaultDomain?: string;

  // Enables automated branch creation for an Amplify app.
  public enableAutoBranchCreation?: boolean;

  // Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app.
  public enableBasicAuth?: boolean;

  // Describes the information about a production branch for an Amplify app. A `production_branch` block is documented below.
  public productionBranches?: Array<amplify_AppProductionBranch>;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Automated branch creation configuration for an Amplify app. An `auto_branch_creation_config` block is documented below.
  public autoBranchCreationConfig?: amplify_AppAutoBranchCreationConfig;

  // The [custom HTTP headers](https://docs.aws.amazon.com/amplify/latest/userguide/custom-headers.html) for an Amplify app.
  public customHeaders?: string;

  // Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository.
  public enableBranchAutoDeletion?: boolean;

  // Environment variables map for an Amplify app.
  public environmentVariables?: Map<string, string>;

  // AWS Identity and Access Management (IAM) service role for an Amplify app.
  public iamServiceRoleArn?: string;

  // Name for an Amplify app.
  public name?: string;

  // Platform or framework for an Amplify app. Valid values: `WEB`, `WEB_COMPUTE`. Default value: `WEB`.
  public platform?: string;

  // The [build specification](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html) (build spec) for an Amplify app.
  public buildSpec?: string;

  // Description for an Amplify app.
  public description?: string;

  // Enables auto-building of branches for the Amplify App.
  public enableBranchAutoBuild?: boolean;

  // Repository for an Amplify app.
  public repository?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "autoBranchCreationPatterns",
        "Automated branch creation glob patterns for an Amplify app.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "platform",
        "Platform or framework for an Amplify app. Valid values: `WEB`, `WEB_COMPUTE`. Default value: `WEB`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "repository",
        "Repository for an Amplify app.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customHeaders",
        "The [custom HTTP headers](https://docs.aws.amazon.com/amplify/latest/userguide/custom-headers.html) for an Amplify app.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "basicAuthCredentials",
        "Credentials for basic authorization for an Amplify app.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableBasicAuth",
        "Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableBranchAutoBuild",
        "Enables auto-building of branches for the Amplify App.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "autoBranchCreationConfig",
        "Automated branch creation configuration for an Amplify app. An `auto_branch_creation_config` block is documented below.",
        amplify_AppAutoBranchCreationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name for an Amplify app.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "oauthToken",
        "OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key. The OAuth token is not stored.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "environmentVariables",
        "Environment variables map for an Amplify app.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableBranchAutoDeletion",
        "Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customRules",
        "Custom rewrite and redirect rules for an Amplify app. A `custom_rule` block is documented below.",
        amplify_AppCustomRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accessToken",
        "Personal access token for a third-party source control system for an Amplify app. The personal access token is used to create a webhook and a read-only deploy key. The token is not stored.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for an Amplify app.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "buildSpec",
        "The [build specification](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html) (build spec) for an Amplify app.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableAutoBranchCreation",
        "Enables automated branch creation for an Amplify app.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "iamServiceRoleArn",
        "AWS Identity and Access Management (IAM) service role for an Amplify app.",
        [],
        false,
        false,
      ),
    ];
  }
}
